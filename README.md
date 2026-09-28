<div align="center">

# Design system CDVP41

**Le système visuel du Comité départemental de vol en planeur du Loir-et-Cher et de sa section Handi-Planeur.**

Papier chaud, marine de la Loire, rouge du soleil, Barlow partout. Deux couleurs d'identité et rien d'autre.

[Aperçu](https://eloi-fal.github.io/design-system-cdvp41/) · [DESIGN.md](DESIGN.md) · [tokens.css](tokens.css) · [Dans Claude Design](https://claude.ai/artifact/5j3v4vXFZw1v433V7VMsdY)

</div>

---

## Ce que contient le dépôt

| Fichier | Ce que c'est | Pour qui |
|---|---|---|
| [`DESIGN.md`](DESIGN.md) | Le système en un fichier : jetons en frontmatter YAML, règles en huit sections (marque, couleurs, typographie, mise en page, élévation, formes, composants, interdits) | Claude Design, un agent de code, un designer |
| [`tokens.css`](tokens.css) | Les mêmes valeurs en variables CSS, prêtes à importer | Un site, un prototype |
| [`tokens.json`](tokens.json) | Les jetons au format du design system Claude Design (source de vérité) | Resynchronisation |
| [`fonts/`](fonts/) | Barlow 400–800 et Barlow Condensed 600–700 en woff2, sous-ensemble latin | Auto-hébergement |
| [`logos/`](logos/) | Logos du comité et de la section Handi-Planeur (préfixe `H-`), logo partenaire ANS | Tout support |
| [`components/`](components/) | Les douze composants du programme A5 : feuille de style, bundle React, types, une fiche par composant | Un développeur |
| [`claude-design/`](claude-design/) | Le brand book et l'index tels qu'ils vivent dans Claude Design | Référence |
| [`docs/`](docs/) | L'aperçu : trois pages du Programme Handi-Planeur 2027 rendues avec les jetons, palette, échelle | GitHub Pages |

## Les trois décisions

1. **Deux couleurs d'identité, pas une troisième.** `navy-700` `#1D3A6E` pour les titres, les bandeaux et les filets forts ; `red-600` `#D9302A` pour les surtitres, les chiffres et les repères. Le reste est de l'encre et du papier. Une troisième couleur, même « pour le handicap », ferait lire deux organismes au lieu d'un.
2. **Le papier chaud, jamais le blanc pur.** `paper` `#FDFCFA` en fond de page, `mist` `#F1F3F7` pour les blocs. Le blanc pur n'a que deux emplois : le texte sur marine et le cartouche des logos partenaires.
3. **La règle du « H ».** Tout fichier, logo ou groupe marqué `H` relève de la section Handi-Planeur. Un support, un logo ; l'autre entité est nommée dans le texte. Jamais les deux logos côte à côte.

## Deux seuils à connaître

- **Jamais `red-600` sur marine** (3,1:1). Sur fond sombre, un chiffre prend `red-300`, un surtitre `red-200`.
- **Pas de texte courant en `red-600` sur `mist`** (4,29:1) : les chiffres et les formes seulement.

Toutes les autres paires texte/fond nommées dans les jetons atteignent 4,5:1.

## S'en servir

**Dans Claude Design.** Le système existe déjà : [CDVP41](https://claude.ai/artifact/5j3v4vXFZw1v433V7VMsdY). Sélectionne-le avant de générer un écran. Pour le recréer ailleurs, colle le contenu de `DESIGN.md`.

**Dans un site ou un prototype.** Importe `tokens.css` et `components/bundle.css`, et appuie-toi sur les alias (`--text-heading`, `--surface-card`, `--accent-on-dark`), jamais sur les rampes. L'échelle typographique du système est celle de l'imprimé A5 : à l'écran, garde les rapports et agrandis (corps 17–18 px, `h1` 40–56 px).

**Pour un support imprimé.** Les composants `PageA5`, `EncartChiffre`, `ChiffresCles`, `Etape`, `Tuile`, `Encadre` et `BandeauPartenaire` reproduisent le Programme Handi-Planeur 2027 ; chaque fiche dans `components/` dit ce qu'il faut fournir.

## Ce qui reste à dessiner

Le système couvre l'imprimé. Un site en dérive, dans le même langage : navigation, boutons, champs, puces de filtre, carte d'actualité, ligne d'agenda. Ils sont décrits dans `DESIGN.md`, section *Components*, et n'existent pas encore dans le bundle.

## Licences

Le code (CSS, JS, TypeScript, HTML) est sous licence MIT. Barlow et Barlow Condensed sont sous SIL Open Font License. Les icônes Lucide sont sous licence ISC. **Les logos du CDVP41 et de la section Handi-Planeur restent la propriété du comité** ; le logo de l'Agence nationale du Sport est reproduit au titre du partenariat et ne doit servir qu'aux actions qu'elle finance.
