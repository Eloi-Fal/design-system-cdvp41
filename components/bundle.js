/* @ds-bundle: {"format":4,"namespace":"CDVP41","components":[{"name":"Logo"},{"name":"Pastille"},{"name":"Surtitre"},{"name":"Icone"},{"name":"EncartChiffre"},{"name":"ChiffresCles"},{"name":"Etape"},{"name":"Tuile"},{"name":"Encadre"},{"name":"BandeauPartenaire"},{"name":"PiedDePage"},{"name":"PageA5"}]} */
(function () {
  var R = window.React, h = R.createElement;
  function cx() { return Array.prototype.filter.call(arguments, Boolean).join(" "); }

  var LOGOS = {
    cdvp: { "fond-blanc": "/_blob/22a726f77891f36721621af25df93c80", "contour": "/_blob/42866f12c6030e48a893302cb7ea56df" },
    handi: { "fond-blanc": "/_blob/8448d992fc06b8957c3b84cb87e63ba2", "transparent": "/_blob/092362136e3c1cf6704e62b57e053edd", "contour": "/_blob/303c1ec47a689b4706e3ea55e22e39d6" }
  };
  var ALT = { cdvp: "CDVP41 – Comité départemental de vol en planeur, Loir-et-Cher", handi: "CDVP41 Section Handi-Planeur Loir-et-Cher" };
  var ANS = "/_blob/d75f1222b38ad2c2521c47f62ad7a336";
  var ICONES = {"accessibility":"/_blob/ae757a0f957c0a9e25fb7cfd508cbf33","arrow-right":"/_blob/8d3cf0ec21ddd4ae456b5a8f89bcbed0","binoculars":"/_blob/9d4375305d7b564a14d02fc8333f4c05","calendar-check":"/_blob/467cdc563ed95f9c3872b1fde4be5d0e","calendar-days":"/_blob/43d3b1e10194a1731b8ed793f1070edd","check":"/_blob/76fd6896161810b9b5fcc42321f9309b","clipboard-list":"/_blob/bbff5d0bddb029da8b9dece5fa57b421","cloud":"/_blob/2626a0d4f3b23e4d04809b4bf06a842a","cloud-sun":"/_blob/a0bf41afeef6bb7aa1f24658cd562e26","compass":"/_blob/2038b2e4c8431eb66909982e2196a618","euro":"/_blob/051a24d1c80d17dba5c9ad16e27872fb","file-text":"/_blob/034f2c6ae30bec61d489dbc6bc499266","flag":"/_blob/241f29eb6e971c94f8b67fadd1dd1e1e","hammer":"/_blob/1f19c15cb73f5a69ce23be38236b8ad8","hand-heart":"/_blob/aac183a0d2ebdb5c43fac70758b1fc06","handshake":"/_blob/da8ea90f1f3671871613353e3787801f","heart":"/_blob/62c3340067e2ed07e2cd960538926bd0","heart-handshake":"/_blob/8709a1815f6666f093972a92065e652c","info":"/_blob/8f284ac2a5f44168f9d90fb019054f90","leaf":"/_blob/3d366f5c9d3fef6af9a8cb0db818e9ca","mail":"/_blob/c8f8bb649bce3c0ea47a7b15db8de937","map":"/_blob/ddd1b55af1116caca1354979aa90480f","map-pin":"/_blob/b3cd2a47dae54ff1d6c7256b65be5a70","mountain":"/_blob/de12a94e3c0fd5c173479b840bc2a6d8","phone":"/_blob/8ee88f8c93a41a7d0bd2348432c1712e","piggy-bank":"/_blob/910f507cf4b0c90e0a9203892b01e33e","plane":"/_blob/d313ead70cc20141306d50d6554b6eab","plane-landing":"/_blob/117aa6202ab49ad2055ffc3390bf9aed","plane-takeoff":"/_blob/b784e8d11c98a5625d522b047ef90c18","shield-check":"/_blob/3456e2388f5818634211c1b0ca3eb30b","smile":"/_blob/28555abf977663fc47c8d79975d7a6b1","sparkles":"/_blob/010f4a1376ed4491941afa2ddfe05daa","star":"/_blob/9fd0b026074a17043cba4e0e70815c24","sun":"/_blob/cc047fdd6a47908c31ea90c42933a6ce","sunrise":"/_blob/fd8bb2d8b98b44dd82f975452c6e1509","trophy":"/_blob/25f9911d6908620a5c689a158ab0f476","user-round":"/_blob/be48d278c9a788ced57cf3d1cb4d54ba","users":"/_blob/ce038f6061a6f8a1c0a0450d8133a2c7","wind":"/_blob/d15189e5c7c9546f695099825fc5496b","wrench":"/_blob/206e1b2f7c46173b19c3bdfb61ab847d"};
  var ROUGES = { plane: 1, sunrise: 1, accessibility: 1, smile: 1, wrench: 1, check: 1 };

  function Logo(p) {
    var s = p.section === "handi" ? "handi" : "cdvp";
    var v = p.version || (s === "handi" ? "transparent" : "fond-blanc");
    var src = LOGOS[s][v] || LOGOS[s]["fond-blanc"];
    var t = p.taille || 160;
    return h("img", { className: cx("cd-logo", p.className), src: src, width: t, height: t, alt: p.alt != null ? p.alt : ALT[s] });
  }

  function Pastille(p) {
    var s = p.section || "cdvp";
    var label = p.children != null ? p.children : (s === "handi" ? "Handi-Planeur" : "CDVP41");
    return h("span", { className: cx("cd-pastille", "cd-pastille-" + s, p.className) },
      s === "handi" ? h("span", { className: "cd-pastille-h", "aria-hidden": "true" }, "H") : null,
      h("span", null, label));
  }

  function Surtitre(p) {
    return h("div", { className: cx("cd-surtitre", "cd-surtitre-" + (p.ton || "accent"), p.className) }, p.children);
  }

  function Icone(p) {
    var src = ICONES[p.nom];
    if (!src) return null;
    var t = p.taille || 24;
    var c = p.couleur === "rouge" ? "var(--red-600)" : p.couleur === "marine" ? "var(--navy-700)" : p.couleur === "clair" ? "var(--white)"
      : (p.couleur || (ROUGES[p.nom] ? "var(--red-600)" : "var(--navy-700)"));
    var m = "url(\"" + src + "\") center/contain no-repeat";
    var st = { width: t, height: t, background: c, WebkitMask: m, mask: m };
    return h("span", { className: cx("cd-icone", p.className), style: st, role: p.label ? "img" : undefined, "aria-label": p.label, "aria-hidden": p.label ? undefined : "true" });
  }

  function EncartChiffre(p) {
    return h("div", { className: cx("cd-encart", p.className) },
      h("div", { className: "cd-encart-chiffre" }, p.chiffre),
      h("div", { className: "cd-encart-texte" }, p.children));
  }

  function ChiffresCles(p) {
    return h("div", { className: cx("cd-chiffres", p.className), style: { gridTemplateColumns: "repeat(" + (p.items || []).length + ",minmax(0,1fr))" } },
      (p.items || []).map(function (it, i) {
        return h("div", { key: i, className: "cd-chiffre" },
          h("div", { className: "cd-chiffre-valeur" }, it.valeur),
          h("div", { className: "cd-chiffre-libelle" }, it.libelle),
          it.note ? h("div", { className: "cd-chiffre-note" }, it.note) : null);
      }));
  }

  function Etape(p) {
    return h("div", { className: cx("cd-etape", p.encart && "cd-etape-encart", p.className) },
      h("div", { className: cx("cd-etape-num", "cd-etape-num-" + (p.ton || "rouge")), "aria-hidden": "true" }, p.numero),
      h("div", { className: "cd-etape-corps" },
        h("div", { className: "cd-etape-titre" }, p.titre),
        p.children ? h("div", { className: "cd-etape-texte" }, p.children) : null));
  }

  function Tuile(p) {
    return h("div", { className: cx("cd-tuile", p.className) },
      h("div", { className: "cd-tuile-titre" }, p.titre),
      p.children ? h("div", { className: "cd-tuile-texte" }, p.children) : null);
  }

  function Encadre(p) {
    return h("div", { className: cx("cd-encadre", p.className) },
      h("div", { className: "cd-encadre-signe", "aria-hidden": "true" }, p.signe || "+"),
      h("div", { className: "cd-encadre-texte" }, p.children));
  }

  function BandeauPartenaire(p) {
    return h("div", { className: cx("cd-bandeau", p.pleinePage && "cd-bandeau-page", p.className) },
      h("div", { className: "cd-bandeau-logo" }, h("img", { src: p.logo || ANS, alt: p.logoAlt || "Agence nationale du Sport" })),
      h("div", { className: "cd-bandeau-texte" },
        p.surtitre ? h("div", { className: "cd-surtitre cd-surtitre-sombre" }, p.surtitre) : null,
        h("div", { className: "cd-bandeau-titre" }, p.titre),
        p.children ? h("div", { className: "cd-bandeau-sous" }, p.children) : null));
  }

  function PiedDePage(p) {
    return h("footer", { className: cx("cd-pied", p.className) },
      h("div", null, p.children || "CDVP41 · Section Handi-Planeur Loir-et-Cher"),
      p.page != null ? h("div", { className: "cd-pied-num" }, p.page) : null);
  }

  function PageA5(p) {
    return h("section", { className: cx("cd-page", p.couverture && "cd-page-couverture", p.className), "aria-label": p.titre },
      p.couverture ? h("div", { className: "cd-page-barre" }) : null,
      h("div", { className: "cd-page-corps" }, p.children),
      p.pied != null || p.page != null ? h(PiedDePage, { page: p.page }, p.pied) : null);
  }

  window.CDVP41 = Object.assign(window.CDVP41 || {}, { Logo: Logo, Pastille: Pastille, Surtitre: Surtitre, Icone: Icone,
    EncartChiffre: EncartChiffre, ChiffresCles: ChiffresCles, Etape: Etape, Tuile: Tuile, Encadre: Encadre,
    BandeauPartenaire: BandeauPartenaire, PiedDePage: PiedDePage, PageA5: PageA5, LOGOS: LOGOS, ICONES: ICONES });
})();
