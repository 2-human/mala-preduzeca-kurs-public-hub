/* ============================================================================
 * ips-uplatnica.js — Serbian payment slip (nalog za uplatu) with a scannable
 * NBS IPS QR code. Depends on vendor/qrcode.js (qrcode-generator, MIT).
 *
 * NBS IPS QR format (pipe-separated tags):
 *   K:PR | V:01 | C:1 | R:<18-digit account> | N:<recipient> | I:RSD<amount,dec>
 *   | SF:<3-digit payment code> | S:<purpose> | RO:<2-digit model><reference>
 * Amount uses a comma decimal and NO thousand separators (e.g. RSD176000,00).
 * The QR payload is transliterated to ASCII (banks accept it; avoids UTF-8 byte
 * edge cases). The visible slip keeps proper Serbian diacritics.
 *
 * PROTOTYPE NOTE: the account/recipient/PIB below are PLACEHOLDERS. Replace with
 * the real company account before any live use.
 * ========================================================================== */
(function (w) {
  "use strict";

  // ---- ASCII transliteration for the QR payload ----
  var MAP = { "č":"c","ć":"c","ž":"z","š":"s","đ":"dj","Č":"C","Ć":"C","Ž":"Z","Š":"S","Đ":"Dj" };
  function ascii(s) { return String(s || "").replace(/[čćžšđČĆŽŠĐ]/g, function (c) { return MAP[c] || c; }); }

  // ---- amount → "176000,00" (comma decimal, no thousand separators) ----
  function amt(n) { return Number(n).toFixed(2).replace(".", ","); }
  // ---- pretty RSD for display: "176.000,00" ----
  function rsd(n) {
    var p = Number(n).toFixed(2).split(".");
    return p[0].replace(/\B(?=(\d{3})+(?!\d))/g, ".") + "," + p[1];
  }

  // ---- build the IPS QR string ----
  function ipsPayload(cfg) {
    var parts = [
      "K:PR", "V:01", "C:1",
      "R:" + cfg.account,
      "N:" + ascii(cfg.name),
      "I:RSD" + amt(cfg.amount),
      "SF:" + (cfg.code || "221"),
    ];
    if (cfg.purpose) parts.push("S:" + ascii(cfg.purpose));
    if (cfg.ref) parts.push("RO:" + (cfg.model || "00") + cfg.ref);
    return parts.join("|");
  }

  // ---- render a scannable QR (SVG) into an element ----
  function renderQR(el, text) {
    if (!w.qrcode) { el.textContent = "QR encoder not loaded"; return; }
    var qr = w.qrcode(0, "M");     // auto type, error-correction M
    qr.addData(text);
    qr.make();
    el.innerHTML = qr.createSvgTag({ cellSize: 4, margin: 2, scalable: true });
    var svg = el.querySelector("svg");
    if (svg) { svg.setAttribute("width", "100%"); svg.setAttribute("height", "100%"); svg.style.display = "block"; }
  }

  // ---- render the full uplatnica card ----
  // cfg: {account,name,pib,amount,code,purpose,ref,model,payer}
  function render(container, cfg) {
    var payload = ipsPayload(cfg);
    container.innerHTML =
      '<div class="upl">' +
        '<div class="upl__head"><span>NALOG ZA UPLATU</span><span class="upl__ips">IPS QR</span></div>' +
        '<div class="upl__grid">' +
          '<div class="upl__col">' +
            fld("uplatilac", cfg.payer || "Ime i prezime uplatioca") +
            fld("svrha uplate", cfg.purpose) +
            fld("primalac", cfg.name + (cfg.pib ? "<br>PIB " + cfg.pib : "")) +
          '</div>' +
          '<div class="upl__col upl__col--r">' +
            '<div class="upl__row3">' +
              fld("šifra plaćanja", cfg.code || "221", true) +
              fld("valuta", "RSD", true) +
              fld("iznos", "=" + rsd(cfg.amount), true) +
            '</div>' +
            fld("račun primaoca", groupAcct(cfg.account)) +
            '<div class="upl__row2">' +
              fld("model", cfg.model || "00", true) +
              fld("poziv na broj (odobrenje)", cfg.ref || "", true) +
            '</div>' +
          '</div>' +
          '<div class="upl__qr"><div class="upl__qrbox" id="' + (cfg.qrId || "ipsQr") + '"></div>' +
            '<div class="upl__qrcap">Skenirajte u mBanking aplikaciji</div></div>' +
        '</div>' +
        '<div class="upl__foot">Prototip. Račun, PIB i poziv na broj su placeholderi do unosa pravih podataka. ' +
          'Iznos u RSD je indikativan (' + (cfg.eur ? "≈ " + cfg.eur + " €, " : "") + 'kurs promenljiv).</div>' +
      '</div>';
    renderQR(container.querySelector("#" + (cfg.qrId || "ipsQr")), payload);
    return payload;
  }

  function fld(label, val, tight) {
    return '<div class="upl__fld' + (tight ? " upl__fld--t" : "") + '">' +
      '<div class="upl__lbl">' + label + '</div><div class="upl__val">' + (val || "&nbsp;") + '</div></div>';
  }
  function groupAcct(a) {
    a = String(a || "");
    if (a.length !== 18) return a;
    return a.slice(0, 3) + "-" + a.slice(3, 16) + "-" + a.slice(16);
  }

  w.IPSUplatnica = { render: render, payload: ipsPayload, rsd: rsd };
})(window);
