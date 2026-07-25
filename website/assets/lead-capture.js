/* ============================================================================
 * lead-capture.js — STATIC STUB lead capture for the microsite.
 *
 * Every strand (Meta lead form, website registration, WhatsApp, boosted post,
 * Google) should land ONE source-tagged lead. This stub writes leads to a shared
 * localStorage store that the CRM dashboard (../../../crm/app/dashboard.html) reads.
 *
 * >>> TO GO LIVE, replace the body of `persist()` with a real backend. <<<
 * Proven pattern in this org: Firebase RTDB write-only push (see
 * projects/dramafree/public/events/registration.config.js), or a Google
 * Apps Script endpoint. Keep the same lead shape so the CRM keeps working.
 * A mailto: fallback is included for when the backend is unreachable.
 * ========================================================================== */
(function (w) {
  "use strict";

  var STORE_KEY = "mpk_leads";          // shared with the CRM dashboard
  var SALES_EMAIL = "prodaja@example.rs"; // TODO: real sales inbox (mailto fallback)

  // Pull UTM + click ids from the URL so paid clicks are attributed.
  function readUTM() {
    var q = new URLSearchParams(w.location.search);
    return {
      source:   q.get("utm_source")   || "",
      medium:   q.get("utm_medium")   || "",
      campaign: q.get("utm_campaign") || "",
      content:  q.get("utm_content")  || "",
      term:     q.get("utm_term")     || "",
      fbclid:   q.get("fbclid")       || "",
      gclid:    q.get("gclid")        || "",
    };
  }

  // Human-friendly source label + kind from UTM (falls back to explicit source).
  function classify(utm, explicit) {
    var s = (utm.source || "").toLowerCase();
    if (explicit) return explicit;
    if (utm.gclid || s === "google") return { srcShort: "Google Search", srcKind: "paid" };
    if (s === "instagram" || s === "facebook" || utm.fbclid) {
      var m = (utm.medium || "").toLowerCase();
      return { srcShort: m.indexOf("paid") > -1 ? "Meta ad" : "Boosted post", srcKind: m.indexOf("paid") > -1 ? "paid" : "social" };
    }
    return { srcShort: "Direct", srcKind: "direct" };
  }

  function nowLabel() {
    try { return new Date().toLocaleDateString("sr-RS"); } catch (e) { return ""; }
  }

  function persist(lead) {
    // --- STUB: write to localStorage + console. Swap for Firebase/Sheet later. ---
    try {
      var arr = JSON.parse(w.localStorage.getItem(STORE_KEY) || "[]");
      arr.push(lead);
      w.localStorage.setItem(STORE_KEY, JSON.stringify(arr));
      console.info("[lead-capture stub] saved lead:", lead);
      return true;
    } catch (e) {
      console.warn("[lead-capture stub] localStorage failed, mailto fallback", e);
      return false;
    }
  }

  function mailtoFallback(lead) {
    var body = Object.keys(lead).map(function (k) { return k + ": " + JSON.stringify(lead[k]); }).join("\n");
    w.location.href = "mailto:" + SALES_EMAIL +
      "?subject=" + encodeURIComponent("Nova prijava: " + (lead.name || "")) +
      "&body=" + encodeURIComponent(body);
  }

  // Public: capture a lead object. Returns the stored lead (with id).
  function captureLead(fields, opts) {
    opts = opts || {};
    var utm = readUTM();
    var cls = classify(utm, opts.classify);
    var lead = {
      id: "L-" + Date.now(),
      name: fields.name || "",
      email: fields.email || "",
      phone: fields.phone || "",
      projectType: fields.business || fields.projectType || "",
      message: fields.message || "",
      deposit: fields.deposit || "",
      page: opts.page || w.document.title,
      pageUrl: w.location.pathname,
      srcShort: cls.srcShort,
      srcKind: cls.srcKind,
      utm: utm,
      stage: opts.stage || "New",
      date: nowLabel(),
      createdAt: Date.now(),
      notes: "",
    };
    var ok = persist(lead);
    if (!ok) mailtoFallback(lead);
    return lead;
  }

  // Public: wire a <form> so submit captures a lead and redirects to a thank-you.
  function attachForm(form, opts) {
    opts = opts || {};
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = {};
      new FormData(form).forEach(function (v, k) { data[k] = v; });
      captureLead(data, opts);
      var to = opts.redirect || "hvala/";
      w.location.href = to;
    });
  }

  w.LeadCapture = { captureLead: captureLead, attachForm: attachForm, STORE_KEY: STORE_KEY };
})(window);
