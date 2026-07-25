/* ============================================================================
 * flowmap.js — fiksna mini-mapa toka (dole desno) na svakoj strani funela.
 * Prikazuje čvorove toka, hajlajtuje trenutni (data-node), klik vodi na drugi.
 * Uključivanje: <script src="../assets/flowmap.js" data-node="prijava"></script>
 * Sve strane funela su na istoj dubini (website/{node}/), pa važi ../{node}/.
 * ========================================================================== */
(function () {
  var NODES = [
    { k: "mock",    label: "1 · Oglasi i objave", href: "../mock/" },
    { k: "prijava", label: "2 · Prijava",         href: "../prijava/" },
    { k: "program", label: "3 · Program",         href: "../program/" },
    { k: "ponuda",  label: "4 · Ponuda + uplatnica", href: "../ponuda/" },
    { k: "hvala",   label: "5 · Hvala / upis",    href: "../hvala/" },
  ];
  var cur = (document.currentScript && document.currentScript.getAttribute("data-node")) || "";

  var body = NODES.map(function (n, i) {
    var arrow = i ? '<span class="flowmap__arr">↓</span>' : "";
    return arrow + (n.k === cur
      ? '<span class="flowmap__node on" aria-current="page">' + n.label + "</span>"
      : '<a class="flowmap__node" href="' + n.href + '">' + n.label + "</a>");
  }).join("");

  var wrap = document.createElement("div");
  wrap.className = "flowmap";
  wrap.innerHTML =
    '<div class="flowmap__head"><span>Tok kampanje</span>' +
      '<button class="flowmap__t" type="button" aria-label="Sakrij mapu" title="Sakrij / prikaži">–</button></div>' +
    '<div class="flowmap__body">' + body +
      '<a class="flowmap__full" href="../tok/">Cela mapa →</a></div>';
  document.body.appendChild(wrap);

  var t = wrap.querySelector(".flowmap__t");
  t.addEventListener("click", function () {
    var c = wrap.classList.toggle("collapsed");
    t.textContent = c ? "+" : "–";
  });
})();
