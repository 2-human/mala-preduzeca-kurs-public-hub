/* ============================================================================
 * mala-preduzeca-kurs — sadržaj proposal hub-a (window.HUB) — SRPSKI
 * NSC predstavlja tromesečni "Kurs za mala preduzeća" (Srbija, 1.500 EUR).
 * Chassis: proposal-hub hub.html (chassis-config). Tvrdo kodirane UI oznake
 * (sidebar, CRM zaglavlja/fioka) su lokalizovane u hub.html.
 * Stil: bez crtica (em-dash), srpski, oprezne tvrdnje o trenutnom stanju.
 * ========================================================================== */

var WEB = "website/";

window.HUB = {

  /* ---- AGENCIJA (NSC) ---- */
  agency: {
    name: "NSC",
    unit: "Studio za rast",
    org:  "NSC Agencija",
    lang: "sr",
    logo: "<svg viewBox='0 0 32 32'><rect width='32' height='32' rx='7' fill='currentColor'/><text x='16' y='21' font-family='Georgia,serif' font-size='13' font-weight='700' text-anchor='middle' fill='#0b1f1c'>NSC</text></svg>",
    favicon: "favicon.svg",
    tokens: {
      accent: "#0f766e", accentStrong: "#115e59", accentSoft: "#d6efe9",
      ink: "#0f1a18", ink2: "#17211f", inkMuted: "rgba(15,26,24,.58)",
      sidebar: "#0b1f1c", bg: "#f6f8f7", bgAlt: "#eaefed", hairline: "rgba(15,26,24,.12)",
      onDark: "#f2f7f5",
    },
    fonts: { display: "Georgia,'Times New Roman',serif", body: "system-ui,-apple-system,Segoe UI,Roboto,sans-serif" },
  },

  /* ---- PREDLOG ---- */
  brand: {
    proposalFor: "Kurs za mala preduzeća",
    foot: "NSC Agencija.<br>Plan generisanja lidova za Kurs za mala preduzeća (Srbija). " +
          "Prikazane površine su predlozi za pregled i prototipovi, ne živi sajt.",
  },
  favicon: "favicon.svg",
  title: "NSC — Plan generisanja lidova za Kurs za mala preduzeća",
  defaultView: "intro",
  WEB: "website/",

  /* ---- NAVIGACIJA ---- */
  nav: [
    { section: "Plan", items: [
      { view: "intro", label: "Uvod" },
      { view: "recs",  label: "Strategija" },
    ]},
    { section: "Sajt", items: [
      { view: "website", label: "Program + prijava" },
      { view: "flows",   label: "Tok kampanje",  icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><rect x='3' y='4' width='6' height='5' rx='1'/><rect x='15' y='4' width='6' height='5' rx='1'/><rect x='9' y='15' width='6' height='5' rx='1'/><path d='M6 9v3h12V9M12 12v3'/></svg>" },
      { view: "mocks",   label: "Objave i oglasi", icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><rect x='7' y='3' width='10' height='18' rx='2'/><path d='M10 18h4'/></svg>" },
    ]},
    { section: "Kampanja", items: [
      { view: "ads",    label: "Meta + WhatsApp + Google" },
      { view: "social", label: "Organski + boost", badge: 4 },
    ]},
    { section: "CRM", items: [
      { view: "crm", label: "Lidovi i tok prodaje", badge: 12 },
    ]},
    { section: "Ponuda", items: [
      { view: "offer", label: "Ponuda i ROI", icon: "<svg class='ic' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2'><path d='M5 3h9l5 5v13H5z'/><path d='M9 9h3M9 13h6M9 17h6'/></svg>" },
    ]},
  ],

  /* ---- POGLEDI ---- */
  VIEWS: {
    intro:   { title: "Kurs za mala preduzeća", sub: "Plan lidova za prvu grupu", open: WEB, openLabel: "Otvori sajt ↗" },
    recs:    { title: "Strategija", sub: "Pet povezanih pravaca do 12 prodaja" },
    website: { title: "Sajt", sub: "Prototip programa i prijave", open: WEB, openLabel: "Otvori u novom tabu ↗", tbBadge: "Funkcionalan prototip", infoPane: true },
    flows:   { title: "Tok kampanje", sub: "Klikabilni tok: objave i oglasi do prijave i ponude", open: WEB + "tok/", openLabel: "Otvori tok ↗", type: "static" },
    mocks:   { title: "Objave i oglasi", sub: "Klikabilni prototipovi: native forma, landing, reel, objava, storija", open: WEB + "mock/", openLabel: "Otvori prototipove ↗", type: "static" },
    ads:     { title: "Meta, WhatsApp, Google", sub: "Koncepti oglasa i tok lead-forme", type: "static" },
    social:  { title: "Organski + boost", sub: "Objave koje nose linkove za prijavu i program" },
    crm:     { title: "Lidovi i tok prodaje", sub: "Svaki upit se hvata sa izvorom, spreman za prodaju" },
    offer:   { title: "Ponuda i ROI", sub: "Cena, budžet i procena povraćaja (3 scenarija)", type: "static" },
  },

  /* ---- DRUŠTVENE MREŽE: platforme + boost objave ---- */
  PF: {
    facebook:  { name: "Facebook",  cls: "fb", tag: "f"  },
    instagram: { name: "Instagram", cls: "ig", tag: "◉" },
  },
  socialMeta: {
    heading: "Organski + boost objave",
    lede: "Dvanaest organskih komada mesečno (4 reela, 4 objave, 4 storije) plus dva stalna oglasa (native lead forma + landing). Svaki komad vodi na program ili prijavu, a oni pogodni za boost grade publiku za retargeting. Ceo plan sadržaja je u content/plan-sadrzaja.md.",
    allLabel: "Sve platforme",
  },
  crmMeta: {
    heading: "Lidovi i tok prodaje",
    lede: "Svaki pravac ovde ostavlja jedan lid označen izvorom. Lidovi sa native forme idu na stranicu programa sa click-to-call brojem, a one koji ne pozovu prodaja kontaktira u roku od sat vremena.",
  },
  social: [
    { slug: "3-greske", title: "3 greške koje koštaju male firme", location: "Reel",
      img: "assets/social/post-3-greske.svg", article: WEB,
      posts: {
        facebook:  { cap: "Vodite biznis, a osecate da radite naslepo? 3 greske koje najvise kostaju male firme, i sta da radite umesto toga. Ceo program je na linku.", tags: ["#malipreduzetnici", "#biznis"] },
        instagram: { cap: "3 greske koje koste male firme. Program u opisu profila.", tags: ["#preduzetnistvo", "#malibiznis"] },
      }},
    { slug: "12-nedelja", title: "12 nedelja, od haosa do sistema", location: "Karusel",
      img: "assets/social/post-12-nedelja.svg", article: WEB + "program/",
      posts: {
        facebook:  { cap: "12 nedelja. Od haosa do sistema koji radi i bez vas. Pogledajte ceo plan programa.", tags: ["#edukacija"] },
        instagram: { cap: "Ceo plan programa, nedelja po nedelja. Link u opisu.", tags: ["#biznisobuka"] },
      }},
    { slug: "prva-grupa", title: "Prva grupa, 12 mesta", location: "Objava",
      img: "assets/social/post-prva-grupa.svg", article: WEB + "prijava/",
      posts: {
        facebook:  { cap: "Prva grupa krece u oktobru. Samo 12 mesta. Rezervisite svoje.", tags: ["#upis"] },
        instagram: { cap: "Prva grupa. 12 mesta. Prijava na linku.", tags: ["#upis2026"] },
      }},
    { slug: "instruktor", title: "Upoznajte instruktora", location: "Reel",
      img: "assets/social/post-instruktor.svg", article: WEB,
      posts: {
        facebook:  { cap: "Ko vodi program i zasto. Kratko upoznavanje sa vasim instruktorom.", tags: ["#tim"] },
        instagram: { cap: "Vas instruktor, u 60 sekundi.", tags: ["#mentorstvo"] },
      }},
  ],

  /* ---- CRM ---- */
  STAGES: {
    "Novo": "st-new",
    "Kontaktiran": "st-contacted",
    "Program poslat": "st-visit",
    "Zakazan poziv": "st-quoted",
    "Upisan": "st-won",
    "Izgubljen": "st-lost",
  },
  leads: [
    { id: "L-1001", name: "Jelena Marković", email: "jelena.m@example.rs", phone: "+381 64 000 0001",
      projectType: "Maloprodaja, 3 zaposlena", idealStart: "Oktobarska grupa", message: "Preuzela program, pita za načine plaćanja.",
      page: "Meta Instant forma · Program magnet", pageUrl: null,
      srcShort: "Meta lead forma", srcKind: "paid",
      utm: { source: "facebook", medium: "paid-social", campaign: "curriculum-magnet", content: "reel-3greske", term: "-" },
      stage: "Program poslat", date: "2. sep 2026", notes: "Nije pozvala. Prodaja da je zove u roku od 1h." },
    { id: "L-1002", name: "Nikola Petrović", email: "nikola@example.rs", phone: "+381 63 000 0002",
      projectType: "Vlasnik kafića", idealStart: "Oktobarska grupa", message: "Prijavio se na sajtu, pitao za depozit.",
      page: "Prijava na sajtu", pageUrl: WEB + "prijava/",
      srcShort: "Prijava na sajtu", srcKind: "direct",
      utm: { source: "facebook", medium: "paid-social", campaign: "conversions-registration", content: "carousel-12nedelja", term: "-" },
      stage: "Upisan", date: "3. sep 2026", notes: "Uplatio depozit 200 EUR. Ostatak na startu." },
    { id: "L-1003", name: "Ana Jovanović", email: "ana.j@example.rs", phone: "+381 65 000 0003",
      projectType: "Onlajn prodavnica", idealStart: "Neodlučna", message: "Pisala na WhatsApp o rasporedu.",
      page: "Click-to-WhatsApp oglas", pageUrl: null,
      srcShort: "WhatsApp", srcKind: "paid",
      utm: { source: "facebook", medium: "paid-social", campaign: "whatsapp-messages", content: "gesture-01", term: "-" },
      stage: "Zakazan poziv", date: "4. sep 2026", notes: "Poziv zakazan za četvrtak 17:00." },
    { id: "L-1004", name: "Marko Stanković", email: "marko.s@example.rs", phone: "+381 60 000 0004",
      projectType: "Usluge, samostalno", idealStart: "Oktobarska grupa", message: "Tražio kurs za biznis i prijavio se.",
      page: "Google pretraga · kurs za preduzetnike", pageUrl: WEB + "prijava/",
      srcShort: "Google pretraga", srcKind: "paid",
      utm: { source: "google", medium: "cpc", campaign: "search-high-intent", content: "rsa-kurs", term: "kurs za preduzetnike" },
      stage: "Kontaktiran", date: "4. sep 2026", notes: "Visoka namera. Poslati PDF programa." },
    { id: "L-1005", name: "Ivana Ilić", email: "ivana@example.rs", phone: "+381 62 000 0005",
      projectType: "Pekara", idealStart: "Oktobarska grupa", message: "Došla sa boost objave, traži program.",
      page: "Boost objava · 12 nedelja", pageUrl: WEB + "program/",
      srcShort: "Boost objava", srcKind: "social",
      utm: { source: "instagram", medium: "paid-social", campaign: "boost-12nedelja", content: "carousel", term: "-" },
      stage: "Novo", date: "5. sep 2026", notes: "" },
    { id: "L-1006", name: "Stefan Nikolić", email: "stefan.n@example.rs", phone: "+381 64 000 0006",
      projectType: "Građevina, 6 zaposlenih", idealStart: "Oktobarska grupa", message: "Preuzeo program, pozvao prodaju direktno.",
      page: "Meta Instant forma · Program magnet", pageUrl: null,
      srcShort: "Meta lead forma", srcKind: "paid",
      utm: { source: "facebook", medium: "paid-social", campaign: "curriculum-magnet", content: "reel-instruktor", term: "-" },
      stage: "Upisan", date: "5. sep 2026", notes: "Pozvao sa stranice programa. Zatvoreno istog dana." },
    { id: "L-1007", name: "Milica Todorović", email: "milica.t@example.rs", phone: "+381 63 000 0007",
      projectType: "Kozmetički salon", idealStart: "Sledeća grupa", message: "Zainteresovana ali termin ne odgovara.",
      page: "Meta Instant forma · Program magnet", pageUrl: null,
      srcShort: "Meta lead forma", srcKind: "paid",
      utm: { source: "facebook", medium: "paid-social", campaign: "curriculum-magnet", content: "reel-3greske", term: "-" },
      stage: "Izgubljen", date: "6. sep 2026", notes: "Negovati za drugu grupu." },
    { id: "L-1008", name: "Dušan Perić", email: "dusan@example.rs", phone: "+381 65 000 0008",
      projectType: "Auto servis", idealStart: "Oktobarska grupa", message: "Prijavio se na sajtu posle vebinara.",
      page: "Prijava na sajtu", pageUrl: WEB + "prijava/",
      srcShort: "Prijava na sajtu", srcKind: "direct",
      utm: { source: "google", medium: "cpc", campaign: "search-high-intent", content: "rsa-biznis", term: "biznis kurs" },
      stage: "Zakazan poziv", date: "6. sep 2026", notes: "" },
    { id: "L-1009", name: "Sanja Lukić", email: "sanja.l@example.rs", phone: "+381 60 000 0009",
      projectType: "Cvećara", idealStart: "Oktobarska grupa", message: "WhatsApp upit o ceni i plaćanju.",
      page: "Click-to-WhatsApp oglas", pageUrl: null,
      srcShort: "WhatsApp", srcKind: "paid",
      utm: { source: "facebook", medium: "paid-social", campaign: "whatsapp-messages", content: "gesture-02", term: "-" },
      stage: "Kontaktiran", date: "7. sep 2026", notes: "Poslat link za depozit." },
    { id: "L-1010", name: "Vladimir Đorđević", email: "vlada.dj@example.rs", phone: "+381 64 000 0010",
      projectType: "IT frilenser", idealStart: "Oktobarska grupa", message: "Program magnet, visoka angažovanost.",
      page: "Meta Instant forma · Program magnet", pageUrl: null,
      srcShort: "Meta lead forma", srcKind: "paid",
      utm: { source: "instagram", medium: "paid-social", campaign: "curriculum-magnet", content: "story-prva-grupa", term: "-" },
      stage: "Program poslat", date: "7. sep 2026", notes: "" },
    { id: "L-1011", name: "Tijana Ristić", email: "tijana@example.rs", phone: "+381 63 000 0011",
      projectType: "Konsultant", idealStart: "Oktobarska grupa", message: "Prijavila se i uplatila depozit.",
      page: "Prijava na sajtu", pageUrl: WEB + "prijava/",
      srcShort: "Prijava na sajtu", srcKind: "direct",
      utm: { source: "facebook", medium: "paid-social", campaign: "conversions-registration", content: "retarget", term: "-" },
      stage: "Upisan", date: "8. sep 2026", notes: "Depozit uplaćen." },
    { id: "L-1012", name: "Aleksandar Simić", email: "aca.simic@example.rs", phone: "+381 65 000 0012",
      projectType: "Veleprodaja", idealStart: "Oktobarska grupa", message: "Google pretraga, pozvao direktno iz oglasa.",
      page: "Google call-only oglas", pageUrl: null,
      srcShort: "Google pretraga", srcKind: "paid",
      utm: { source: "google", medium: "cpc", campaign: "search-high-intent", content: "call-only", term: "kako pokrenuti biznis" },
      stage: "Novo", date: "8. sep 2026", notes: "" },
  ],

  /* ---- EDITORIJALNI POGLEDI ---- */
  html: {

    intro: "" +
      "<style>" +
        ".prose{max-width:1000px;padding:20px clamp(20px,3vw,40px) 56px}.prose h2,.prose h3{font-family:Georgia,serif;text-wrap:balance}.prose p,.prose li{text-wrap:pretty}.prose>p:first-child,.prose>.lede:first-child,.prose>*:first-child{margin-top:0}" +
        ".lede{font-size:1.16rem;color:#17211f;max-width:720px}.muted{color:#5b6b68}" +
        ".statgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin:22px 0}" +
        ".stat{background:#fff;border:1px solid rgba(15,26,24,.08);border-radius:12px;padding:18px;box-shadow:0 1px 3px rgba(15,26,24,.06),0 4px 12px rgba(15,26,24,.05)}" +
        ".stat__n{font-family:Georgia,serif;font-size:1.7rem;font-weight:700;color:#115e59}" +
        ".stat__l{color:#5b6b68;font-size:.82rem;margin-top:4px}" +
        ".cards{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin:16px 0}" +
        ".cards .card{background:#fff;border:1px solid rgba(15,26,24,.08);border-radius:12px;padding:20px;box-shadow:0 1px 3px rgba(15,26,24,.06),0 4px 12px rgba(15,26,24,.05)}" +
        ".cards .card h3{margin:0 0 8px;font-size:1.05rem}.card--accent{background:#d6efe9;border-color:#0f766e}" +
        ".block{display:flex;align-items:baseline;gap:12px;margin:30px 0 10px;font-size:1.4rem;font-family:Georgia,serif}" +
        ".block__n{color:#0f766e;font-weight:700}" +
        ".ledger{padding-left:18px}.ledger li{margin-bottom:6px}" +
        ".tblwrap{overflow-x:auto;margin:14px 0}" +
        ".tbl{border-collapse:collapse;width:100%;font-size:.92rem;background:#fff}" +
        ".tbl th,.tbl td{border:1px solid rgba(15,26,24,.12);padding:8px 12px;text-align:left}" +
        ".tbl th{background:#eaefed}.tbl tr.hi{background:#d6efe9;font-weight:600}" +
        ".admock{max-width:430px;border:1px solid rgba(15,26,24,.16);border-radius:14px;overflow:hidden;background:#fff;margin:14px 0;box-shadow:0 8px 24px rgba(15,26,24,.08)}" +
        ".admock__head{display:flex;gap:10px;align-items:center;padding:12px 14px}" +
        ".admock__av{width:40px;height:40px;border-radius:50%;background:#0f766e;flex:none}" +
        ".admock__body{padding:0 14px 12px}" +
        ".admock__img{background:#eaefed;height:170px;display:flex;align-items:center;justify-content:center;color:#5b6b68}" +
        ".admock__form{padding:14px;display:grid;gap:8px;background:#f6f8f7}" +
        ".fld{background:#fff;border:1px solid rgba(15,26,24,.16);border-radius:8px;padding:10px 12px;color:#5b6b68;font-size:.9rem}" +
        ".fld--q{color:#0f1a18}" +
        ".admock__cta{background:#0f766e;color:#fff;border:none;border-radius:8px;padding:11px;font-weight:600;font-size:.95rem;cursor:pointer}" +
        ".admock__note{padding:10px 14px;font-size:.8rem;color:#5b6b68;border-top:1px solid rgba(15,26,24,.12)}" +
        ".sitepane__lede{font-weight:600}.sp-point{margin:12px 0;padding-left:12px;border-left:3px solid #0f766e}" +
        "@media(max-width:820px){.statgrid,.cards{grid-template-columns:1fr 1fr}}" +
        "@media(max-width:560px){.statgrid,.cards{grid-template-columns:1fr}}" +
      "</style>" +
      "<div class='prose'>" +
      "<p class='lede'>Tromesečni program koji uči mala preduzeća u Srbiji kako da postave temelje za uspeh. Cena 1.500 EUR. Upis počinje u oktobru. Ovaj plan dovodi prvu grupu od 12 polaznika koji plaćaju, kroz plaćeno generisanje lidova, organsku kampanju i mali sajt, sve u jedan namenski CRM.</p>" +
      "<div class='statgrid'>" +
        "<div class='stat'><div class='stat__n'>12</div><div class='stat__l'>prodaja, prva grupa</div></div>" +
        "<div class='stat'><div class='stat__n'>4 do 6 &euro;</div><div class='stat__l'>cena po lidu</div></div>" +
        "<div class='stat'><div class='stat__n'>150 do 300 &euro;</div><div class='stat__l'>cena po upisu</div></div>" +
        "<div class='stat'><div class='stat__n'>5 do 9x</div><div class='stat__l'>povraćaj na medije</div></div>" +
      "</div>" +
      "<p>Ekonomija je popustljiva: po ceni od 1.500 EUR po mestu, čak i konzervativni scenario vraća pet puta više od uloženog u medije. Pravi posao je izvođenje toka i zatvaranje neproverene prve grupe, zato plan spaja jeftin volumen lidova sa Meta platforme sa brzim praćenjem od strane prodaje, WhatsApp-om, fokusiranom Google linijom i organskom kampanjom koja gradi poverenje.</p>" +
      "<p class='muted'>Brojevi ispod su zasnovani na uživo povučenim podacima o obimu Google pretraga u Srbiji i veličini Meta publike, plus benčmarci za B2B edukaciju. Zamenite procene stvarnim podacima iz platformi posle prve nedelje.</p>" +
      "</div>",

    recs: "" +
      "<div class='prose'>" +

      "<h2 class='block'><span class='block__n'>01</span> Gde ste danas</h2>" +
      "<p>Dve činjenice iz uživo podataka oblikuju sve:</p>" +
      "<ul>" +
        "<li><b>Tražnja na Google pretrazi je tanka.</b> Kroz sve srpske termine relevantne za kupca (kurs za preduzetnike, biznis kurs, kako pokrenuti biznis i varijante) ukupan obim je oko 280 do 300 pretraga mesečno. Klikovi su jeftini, oko 0,40 do 0,70 EUR, ali inventar realno može da proizvede samo 15 do 30 lidova tokom cele kampanje. Google hvata nameru, ne može da stvori volumen.</li>" +
        "<li><b>Meta ima sav volumen koji vam treba.</b> Srbija, uzrast 25 do 55, dostupno je 3,0 do 3,6 miliona, sa dubokim slojevima poslovnih interesovanja. U odnosu na potrebu od oko 400 lidova, publika je praktično neograničena.</li>" +
        "<li><b>Ovo je neproverena prva grupa.</b> Nema recenzija, nema publike za retargeting, nema istorije. To smanjuje stopu lid-u-prodaju dok organska kampanja i prve preporuke ne izgrade poverenje.</li>" +
      "</ul>" +

      "<h2 class='block'><span class='block__n'>02</span> Strategija: pet povezanih pravaca</h2>" +
      "<p>Jedna ponuda, jedan CRM, pet ulaza. Meta nosi volumen, sve ostalo hvata ili konvertuje.</p>" +
      "<div class='cards'>" +
        "<div class='card'><h3>1. Meta native lead forma</h3><p>Program u zamenu za ime, email i opciono telefon. Po slanju, prijavljeni sleće na stranicu programa sa click-to-call brojem. Ako ne pozovu, prodaja zove ili piše u roku od sat vremena. Najjeftinija cena po lidu, nosi volumen.</p></div>" +
        "<div class='card'><h3>2. Meta konverzije na sajt</h3><p>Oglasi na stranicu prijave sa opcionim depozitom. Viša namera. Retargetuje publiku sa lead-forme, posetioce sajta i one koji su reagovali na objave.</p></div>" +
        "<div class='card'><h3>3. Boost objave</h3><p>Četiri organske objave nedeljno, svaka pogodna za boost, svaka nosi link za prijavu ili program. Gradi poverenje i publiku za retargeting.</p></div>" +
        "<div class='card'><h3>4. WhatsApp</h3><p>Click-to-WhatsApp oglasi otvaraju čet sa prodajom, WhatsApp je uključen kao pozicija u isporuci, a WhatsApp link stoji na sajtu i u objavama. Srbija je WhatsApp-first tržište za ovakvu promišljenu kupovinu.</p></div>" +
        "<div class='card'><h3>5. Google pretraga visoke namere</h3><p>Vitka, uvek aktivna linija na ključnim rečima visoke namere, sa responsive search oglasima, sitelink-ovima na prijavu i program, i call-only oglasima na mobilnom.</p></div>" +
        "<div class='card card--accent'><h3>Namenski CRM</h3><p>Kičma. Svaki pravac ostavlja jedan lid označen izvorom. Tok od Novo do Upisan, uživo cena po lidu i cena po akviziciji u odnosu na cilj od 12 prodaja, i oznaka brzine odziva za prodajni tim.</p></div>" +
      "</div>" +

      "<h2 class='block'><span class='block__n'>03</span> Šta bismo izgradili</h2>" +
      "<ul class='ledger'>" +
        "<li><b>Sajt</b> sa stranicom programa (plan, click-to-call, WhatsApp, CTA za prijavu) i stranicom prijave (rezervacija mesta plus opcioni depozit).</li>" +
        "<li><b>Meta kampanje</b>: lead-forma magnet, konverzije na prijavu, retargeting i WhatsApp poruke, sa srpskim kreativama i tekstom.</li>" +
        "<li><b>Google pretraga</b> kampanja na proverenom setu ključnih reči visoke namere plus lista negativa.</li>" +
        "<li><b>Organski plan</b>: ritam od četiri objave nedeljno, avgust do oktobar, hrani i poverenje i retargeting.</li>" +
        "<li><b>CRM</b>: hvatanje lidova označenih izvorom, faze toka prodaje, i tabla sa CPL i CPA u odnosu na cilj.</li>" +
      "</ul>" +

      "<h2 class='block'><span class='block__n'>04</span> Kako se sabira do 12 prodaja</h2>" +
      "<div class='tblwrap'><table class='tbl'>" +
        "<thead><tr><th>Scenario</th><th>Prosečan CPL</th><th>Lid u prodaju</th><th>Lidova za 12</th><th>Budžet medija</th><th>CPA</th></tr></thead>" +
        "<tbody>" +
        "<tr><td>Konzervativan</td><td>6 &euro;</td><td>2,0%</td><td>~600</td><td>~3.600 &euro;</td><td>~300 &euro;</td></tr>" +
        "<tr class='hi'><td>Osnovni (plan)</td><td>5 &euro;</td><td>3,0%</td><td>~400</td><td>~2.000 &euro;</td><td>~167 &euro;</td></tr>" +
        "<tr><td>Optimističan</td><td>4 &euro;</td><td>5,0%</td><td>~240</td><td>~960 &euro;</td><td>~80 &euro;</td></tr>" +
        "</tbody>" +
      "</table></div>" +
      "<p>Planirajte oko osnovnog scenarija, ali budžetirajte za konzervativni: radni okvir medija od oko 3.500 do 4.000 EUR, otprilike 55% Meta akvizicija, 17% Meta retargeting, 10% Google pretraga, i ostatak na Demand Gen i WhatsApp. Prihod pri 12 prodaja je 18.000 EUR, pa čak i konzervativni scenario vraća pet puta više od uloženog u medije.</p>" +

      "<h3>Vremenski plan</h3>" +
      "<div class='tblwrap'><table class='tbl'>" +
        "<thead><tr><th>Kada</th><th>Fokus</th></tr></thead><tbody>" +
        "<tr><td>Avgust</td><td>Izrada sajta, praćenja i CRM-a. Priprema kreativa. Početak organskog zagrevanja.</td></tr>" +
        "<tr><td>Početak septembra</td><td>Pokretanje test budžeta kroz dva Meta ad seta, WhatsApp i Google. Merenje cene i kvaliteta lidova.</td></tr>" +
        "<tr><td>Kraj septembra</td><td>Skaliranje pobednika, početak retargetinga, podsticanje preuzimanja programa i prijava.</td></tr>" +
        "<tr><td>Oktobar</td><td>Upis se otvara. Konverzioni potisak sa rokom i ograničenjem mesta, snažan retargeting, prodaja zatvara tok.</td></tr>" +
      "</tbody></table></div>" +
      "</div>",

    ads: "" +
      "<div class='prose'>" +
      "<p class='lede'>Plaćeni motor: native lead-forma magnet na Meti, konverzioni oglasi na sajt, WhatsApp i fokusirana Google linija. Prikazani tekst je na srpskom, onakav kakav bi išao.</p>" +

      "<h3>Pravac 1 &middot; Meta native lead forma (program magnet)</h3>" +
      "<div class='admock'>" +
        "<div class='admock__head'><span class='admock__av'></span><div><b>Kurs za mala preduzeća</b><br><span class='muted'>Sponzorisano</span></div></div>" +
        "<div class='admock__body'>Preuzmite ceo plan programa. 12 nedelja, korak po korak, kako da vas biznis radi i bez vas. Ostavite ime i email, plan stize odmah.</div>" +
        "<div class='admock__img'>[ kreativa programa ]</div>" +
        "<div class='admock__form'>" +
          "<div class='fld'>Ime i prezime</div><div class='fld'>Email</div><div class='fld'>Telefon (opciono)</div>" +
          "<div class='fld fld--q'>Da li vodite ili pokrecete biznis? &nbsp; Da / Ne</div>" +
          "<button class='admock__cta'>Preuzmi plan programa</button>" +
        "</div>" +
        "<div class='admock__note'>Po slanju &rarr; stranica programa sa click-to-call. Bez poziva &rarr; prodaja kontaktira u roku od 1h.</div>" +
      "</div>" +

      "<h3>Pravac 2 &middot; Meta konverzije na prijavu</h3>" +
      "<p>Iste publike plus retargeting svih koji su dodirnuli pravac 1. Cilj su konverzije na stranici prijave, uz opcioni depozit od 200 EUR koji zaključava nameru.</p>" +

      "<h3>Pravac 4 &middot; WhatsApp</h3>" +
      "<p>Click-to-WhatsApp oglasi otvaraju čet sa brojem prodaje (cilj Poruke), WhatsApp je uključen kao pozicija u isporuci, a WhatsApp dugme stoji na sajtu i u objavama. Popunjena prva poruka: <i>Zdravo, zanima me kurs za mala preduzeca.</i></p>" +

      "<h3>Pravac 5 &middot; Google pretraga visoke namere</h3>" +
      "<div class='tblwrap'><table class='tbl'>" +
        "<thead><tr><th>Ključna reč</th><th>Pretraga / mes.</th><th>CPC (procena)</th><th>Namera</th></tr></thead><tbody>" +
        "<tr><td>kurs za preduzetnike</td><td>20</td><td>~0,5 &euro;</td><td>Visoka</td></tr>" +
        "<tr><td>biznis kurs</td><td>20</td><td>~0,5 &euro;</td><td>Visoka</td></tr>" +
        "<tr><td>kurs preduzetnistva</td><td>10 do 20</td><td>~0,5 &euro;</td><td>Visoka</td></tr>" +
        "<tr><td>kako pokrenuti biznis</td><td>90</td><td>0,3 do 0,9 &euro;</td><td>Srednja</td></tr>" +
        "<tr><td>kako pokrenuti sopstveni biznis</td><td>20</td><td>do 1,4 &euro;</td><td>Srednja</td></tr>" +
      "</tbody></table></div>" +
      "<p class='muted'>Negativi: besplatno, posao, zaposlenje, pdf, torrent. Oglasi vode na prijavu, program i click-to-call. Volumen je tanak, pa ova linija ostaje vitka i uvek aktivna, ne igra na skaliranje.</p>" +
      "</div>",

    offer: "" +
      "<div class='prose'>" +
      "<p class='lede'>Predlog saradnje za prvu grupu: fiksni honorar plus preporučeni budžet za oglase, sa procenom povraćaja na bazi benčmarka. Tri scenarija: pesimistična, bazna i optimistična.</p>" +

      "<div class='statgrid'>" +
        "<div class='stat'><div class='stat__n'>3 do 5</div><div class='stat__l'>upisa = pokriven trošak (break-even)</div></div>" +
        "<div class='stat'><div class='stat__n'>5 do 19x</div><div class='stat__l'>ROAS (prihod / oglasi)</div></div>" +
        "<div class='stat'><div class='stat__n'>171 do 349%</div><div class='stat__l'>ROI na ukupno ulaganje</div></div>" +
        "<div class='stat'><div class='stat__n'>18.000 &euro;</div><div class='stat__l'>prihod prve grupe (12 × 1.500)</div></div>" +
      "</div>" +

      "<h2 class='block'><span class='block__n'>01</span> Honorar agencije</h2>" +
      "<div class='tblwrap'><table class='tbl'>" +
        "<thead><tr><th>Stavka</th><th>Model</th><th>Iznos (3 meseca)</th></tr></thead><tbody>" +
        "<tr><td>Postavka svih sistema (platforme, landing, mini CRM)</td><td>jednokratno</td><td>500 &euro;</td></tr>" +
        "<tr><td>Organski sadržaj (12 objava mesečno)</td><td>450 &euro; / mes</td><td>1.350 &euro;</td></tr>" +
        "<tr><td>Vođenje kampanja (Meta, Google, WhatsApp)</td><td>400 &euro; / mes</td><td>1.200 &euro;</td></tr>" +
        "<tr class='hi'><td>Ukupno honorar</td><td>3-mesečni angažman</td><td>3.050 &euro;</td></tr>" +
      "</tbody></table></div>" +
      "<p class='muted'>Ad spend i boost budžet se plaćaju direktno platformama (Meta, Google) i nisu deo honorara. Preporučeni raspon: 960 do 3.600 &euro; (vidi scenarije ispod).</p>" +

      "<h2 class='block'><span class='block__n'>02</span> Povraćaj: 3 scenarija</h2>" +
      "<p>Cilj je 12 upisa (kapacitet prve grupe), pa je prihod fiksan na 18.000 &euro;. Scenariji pokazuju koliko medijskog budžeta treba da se cilj dostigne pri slaboj, očekivanoj ili odličnoj efikasnosti levka, i koliki je povraćaj u svakom slučaju.</p>" +
      "<div class='tblwrap'><table class='tbl'>" +
        "<thead><tr><th>Metrika</th><th>Pesimistična</th><th>Bazna</th><th>Optimistična</th></tr></thead><tbody>" +
        "<tr><td>CPL (prosečna cena po lidu)</td><td>6 &euro;</td><td>5 &euro;</td><td>4 &euro;</td></tr>" +
        "<tr><td>Lid → prodaja</td><td>2,0%</td><td>3,0%</td><td>5,0%</td></tr>" +
        "<tr><td>Lidova za 12 upisa</td><td>600</td><td>400</td><td>240</td></tr>" +
        "<tr><td>Ad + boost budžet</td><td>3.600 &euro;</td><td>2.000 &euro;</td><td>960 &euro;</td></tr>" +
        "<tr><td>Cena po upisu (CPA)</td><td>300 &euro;</td><td>167 &euro;</td><td>80 &euro;</td></tr>" +
        "<tr><td>Prihod (12 × 1.500)</td><td>18.000 &euro;</td><td>18.000 &euro;</td><td>18.000 &euro;</td></tr>" +
        "<tr><td>Honorar (3 meseca)</td><td>3.050 &euro;</td><td>3.050 &euro;</td><td>3.050 &euro;</td></tr>" +
        "<tr><td>Ukupno ulaganje (honorar + mediji)</td><td>6.650 &euro;</td><td>5.050 &euro;</td><td>4.010 &euro;</td></tr>" +
        "<tr><td>Neto profit</td><td>11.350 &euro;</td><td>12.950 &euro;</td><td>13.990 &euro;</td></tr>" +
        "<tr class='hi'><td>ROAS (prihod / oglasi)</td><td>5,0x</td><td>9,0x</td><td>18,8x</td></tr>" +
        "<tr class='hi'><td>ROI (neto / ukupno ulaganje)</td><td>171%</td><td>256%</td><td>349%</td></tr>" +
      "</tbody></table></div>" +
      "<p class='muted'>ROAS = prihod / medijski trošak (oglasi + boost), industrijska definicija. ROI = neto profit / ukupno ulaganje (honorar + mediji). Osnova: uživo povučeni srpski CPC i veličina Meta publike, plus industrijski benčmarci za B2B edukaciju. Break-even je na 3 do 5 upisa, a cilj je 12.</p>" +

      "<h2 class='block'><span class='block__n'>03</span> Šta ostaje posle prve grupe</h2>" +
      "<p>Sistemi (sajt, mini CRM, kampanje) i organska publika ostaju vaši. Svaka naredna grupa startuje bez ponovne postavke, sa toplom publikom za retargeting i društvenim dokazom prve grupe, pa cena po upisu pada, a ROI raste iz grupe u grupu. Honorar za naredne grupe je samo mesečni deo (organski + vođenje), bez 500 &euro; postavke.</p>" +
      "<p class='muted'>Zaštita od rizika: i ako se popuni samo 8 od 12 mesta uz najskuplji levak, prihod od 12.000 &euro; i dalje pokriva ceo trošak (ROAS 3,3x, ROI oko 80%). Break-even je na svega 3 do 5 upisa.</p>" +
      "</div>",

    website: "<iframe title='Prototip sajta' src='website/' style='width:100%;height:72vh;border:1px solid var(--hairline);border-radius:12px;background:#fff'></iframe>",
    flows:   "<iframe title='Tok kampanje' src='website/tok/' style='width:100%;height:74vh;border:1px solid var(--hairline);border-radius:12px;background:#fff'></iframe>",
    mocks:   "<iframe title='Objave i oglasi' src='website/mock/' style='width:100%;height:74vh;border:1px solid var(--hairline);border-radius:12px;background:#fff'></iframe>",
  },

  sitepane: "<p class='sitepane__lede'>Sajt ima dva zadatka: da preda program i primi prijavu.</p>" +
            "<div class='sp-point'><b>Stranica programa</b><br>Plan po nedeljama, instruktor, click-to-call, WhatsApp i CTA za prijavu.</div>" +
            "<div class='sp-point'><b>Stranica prijave</b><br>Rezervacija mesta, opcioni depozit 200 EUR (stub), izvor i UTM zabeleženi za CRM.</div>" +
            "<div class='sp-point'><b>Bekend</b><br>Za sada statički stub. Forme pišu u zajednički lokalni store koji CRM čita. Povezati Firebase ili Sheet za produkciju.</div>",
};
