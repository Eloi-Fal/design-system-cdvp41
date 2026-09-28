---
version: 1
name: CDVP41
description: >-
  Système de conception du Comité départemental de vol en planeur du
  Loir-et-Cher (CDVP41) et de sa section Handi-Planeur, tiré du Programme
  Handi-Planeur 2027 (A5) et de la planche d'icônes. Papier chaud, marine de la
  Loire, rouge du soleil, Barlow partout. Deux couleurs d'identité, le reste est
  de l'encre et du papier ; aucun dégradé, aucun emoji, une règle du « H ».
colors:
  # --- Marine : la couleur de la marque. Titres, bandeaux, filets forts. -----
  navy-900: "#1A2440"
  navy-700: "#1D3A6E"
  navy-600: "#2C3752"
  navy-500: "#44506B"
  navy-400: "#6A7389"
  navy-100: "#D6DEEE"
  # --- Rouge soleil : l'accent. Surtitres, chiffres, repères. Jamais un fond
  #     de texte courant, jamais posé sur marine. -----------------------------
  red-600: "#D9302A"
  red-300: "#FF8F88"
  red-200: "#FFB3AE"
  # --- Papier et brume : les surfaces. Pas de blanc pur en fond de page. ----
  paper: "#FDFCFA"
  mist: "#F1F3F7"
  line: "#D7D9DF"
  desk: "#E9E7E2"
  white: "#FFFFFF"
  # --- Alias sémantiques. Le code applicatif attrape ceux-ci. ---------------
  text-strong: "{colors.navy-900}"
  text-heading: "{colors.navy-700}"
  text-body: "{colors.navy-600}"
  text-muted: "{colors.navy-500}"
  text-subtle: "{colors.navy-400}"
  text-on-dark: "{colors.white}"
  text-on-dark-muted: "{colors.navy-100}"
  accent: "{colors.red-600}"
  accent-on-dark: "{colors.red-300}"
  eyebrow-on-dark: "{colors.red-200}"
  surface-page: "{colors.paper}"
  surface-card: "{colors.mist}"
  surface-dark: "{colors.navy-700}"
  surface-desk: "{colors.desk}"
  border-default: "{colors.line}"
  border-strong: "{colors.navy-700}"
typography:
  fonts:
    sans: "'Barlow', Helvetica, Arial, sans-serif"
    condensed: "'Barlow Condensed', 'Barlow', sans-serif"
  # Échelle de l'imprimé A5 (559 px de large). À l'écran, garder les rapports et
  # agrandir : corps 17–18 px sur un site (voir la section Typography).
  display: { font: sans, size: 58px, lineHeight: 0.95, weight: 800, letterSpacing: -0.02em }
  h1: { font: sans, size: 34px, lineHeight: 1.02, weight: 800, letterSpacing: -0.01em }
  h2: { font: sans, size: 18px, lineHeight: 1.2, weight: 700 }
  h3: { font: sans, size: 16px, lineHeight: 1.2, weight: 700 }
  figure-xl: { font: sans, size: 44px, lineHeight: 1, weight: 800 }
  figure: { font: sans, size: 38px, lineHeight: 1, weight: 800, letterSpacing: -0.02em }
  lead: { font: sans, size: 14px, lineHeight: 1.5, weight: 400 }
  body: { font: sans, size: 13px, lineHeight: 1.45, weight: 400 }
  small: { font: sans, size: 11.5px, lineHeight: 1.35, weight: 400 }
  footer: { font: sans, size: 10.5px, lineHeight: 1.35, weight: 400 }
  eyebrow: { font: condensed, size: 12px, lineHeight: 1.2, weight: 700, letterSpacing: 0.14em, transform: uppercase }
rounded:
  sm: 6px      # tuiles, cartouche blanc des logos
  md: 8px      # encarts sombres, étapes en encart, encadré, bandeau partenaire
  full: 999px  # pastilles numérotées, pastilles de section
spacing:
  base: 1px
  space-1: 3px
  space-2: 6px
  space-3: 10px
  space-4: 12px
  space-5: 14px
  space-6: 18px
  space-7: 26px
  space-8: 34px
  space-9: 38px
  space-10: 44px
  page-pad-x: 38px
  page-pad-top: 34px
  page-pad-bottom: 26px
shadows:
  sheet: "0 1px 2px rgba(26,36,64,.08), 0 8px 24px rgba(26,36,64,.08)"
format:
  a5-width: 148mm
  a5-height: 210mm
components:
  surtitre: { font: eyebrow, color: accent, colorOnDark: eyebrow-on-dark }
  encart-chiffre: { bg: surface-dark, chiffre: { font: figure-xl, color: accent-on-dark }, radius: md, padding: 16px 20px }
  chiffres-cles: { borderTop: 3px border-strong, borderBottom: 1px border-default, valeur: { font: figure, color: accent }, separator: 1px border-default }
  etape: { pastille: { size: 28px, radius: full, bg: red-600 | navy-700, color: white }, encart: { bg: surface-card, radius: md } }
  tuile: { bg: surface-card, radius: sm, padding: 10px 12px }
  encadre: { border: 2px border-strong, radius: md, signe: { color: accent } }
  bandeau-partenaire: { bg: surface-dark, radius: md, cartouche: { bg: white, radius: sm } }
  pastille: { radius: full, bg: mist, color: navy-700, h: { bg: red-600, color: white } }
  pied-de-page: { borderTop: 1px border-default, font: footer, color: text-subtle }
  page-a5: { width: 559px, height: 794px, bg: surface-page, shadow: sheet, padding: page-pad-top page-pad-x page-pad-bottom }
  logo: { sizes: { couverture: 340px, en-tete: 78px }, versions: [fond-blanc, transparent, contour] }
  icone: { set: lucide, size: 24px, stroke: 2px, color: navy-700, rouges: [plane, sunrise, accessibility, smile, wrench, check] }
---

## Brand & Style

CDVP41 est le système visuel d'un comité départemental sportif, associatif, créé
en octobre 2025, qui coordonne deux clubs de planeur et porte une section
Handi-Planeur. Le registre est celui du **document associatif bien fait** : un
programme A5 qu'un dirigeant de club lit en deux minutes, qu'un financeur garde
sur son bureau, qu'une structure d'accueil peut afficher. Chaleureux, concret,
sans jargon, sans effet.

Trois décisions portent tout le reste, par ordre d'importance.

- **Deux couleurs d'identité, et pas une troisième.** `navy-700` pour les
  titres, les bandeaux et les filets forts ; `red-600` pour les surtitres, les
  chiffres et les repères. Tout le reste est de l'encre (les marines moyens) et
  du papier. Une troisième couleur, même « pour le handicap », ferait lire deux
  organismes au lieu d'un.
- **Le papier chaud, jamais le blanc pur.** `paper` (`#FDFCFA`) est le fond de
  page, `mist` le fond des blocs. Le blanc pur n'existe que dans deux emplois :
  le texte sur marine, et le cartouche des logos partenaires.
- **La règle du « H ».** Le comité et sa section Handi-Planeur partagent le
  système. Tout fichier, logo ou groupe marqué `H` (préfixe `H-`, groupe
  `…-H-…`) relève de la section ; à l'écran, la `Pastille` `section="handi"`
  porte ce « H » dans un disque `red-600`. Sur un support de la section, le logo
  Handi-Planeur est le seul logo ; le comité est nommé dans le texte. Jamais les
  deux logos côte à côte.

**Ce que le système n'a délibérément pas** : pas de dégradé, pas d'emoji, pas
de thème sombre (les encarts `navy-700` sont des blocs voulus, pas une
inversion), pas d'ombre en dehors de la feuille A5 posée à l'écran, pas de
pictogramme d'une autre famille que Lucide.

**Ton et contenu.** Le comité parle en « nous » et s'adresse aux clubs et aux
familles en « vous » : « Nos clubs ont les machines, les pilotes et le
savoir-faire », « Votre club est partant ? Parlons-en. » Titres en casse de
phrase, courts, qui affirment une idée : « Le prix ne doit plus être un frein ».
Langage inclusif : « personnes en situation de handicap », jamais
« handicapés » ; « celles et ceux » ; « la personne comme son accompagnant ».
Typographie française : espace insécable avant `? ! : ;` et dans les
guillemets « … », nombres groupés par espace (« 2 800 € »), symbole € après le
nombre, flèche `→` pour une période. Graphies fixes : `CDVP41`, `Handi-Planeur`,
`Loir-et-Cher`, « vol à voile », « le Comité » avec majuscule quand il désigne
le CDVP41.

## Colors

Trois familles, seize alias. **Les composants attrapent les alias** ; les
rampes ne servent qu'à les définir.

- **Marine** porte l'encre. `navy-700` (`#1D3A6E`) est la marque : titres,
  bandeaux, encarts sombres, filet fort, pastilles numérotées ; le blanc dessus
  tient 11,2:1. `navy-900` est le texte le plus fort (encadré), `navy-600` le
  texte courant, `navy-500` le texte secondaire (7,9:1 sur `paper`, 7,3:1 sur
  `mist`), `navy-400` le texte discret du pied de page, sur `paper` uniquement
  (4,6:1). `navy-100` est le texte secondaire sur fond sombre (8,3:1).
- **Rouge soleil** est l'accent, **et il se scinde selon le fond**. `red-600`
  (`#D9302A`) tient 4,65:1 sur `paper` mais **4,29:1 sur `mist`** : sur une
  tuile, le réserver aux chiffres (≥ 19 px gras) et aux formes, jamais au texte
  courant. Sur `navy-700`, le rouge de marque ne passe pas : le grand chiffre
  prend `red-300` (`accent-on-dark`, 5,1:1) et le surtitre `red-200`
  (`eyebrow-on-dark`, 6,5:1). **Jamais `red-600` sur marine.**
- **Papier et brume** portent les surfaces. `paper` en fond de page, `mist` en
  fond de tuile, d'étape et de carte, `line` en filet fin (1,4:1 : décoratif,
  ne porte aucun sens seul). `desk` est la table de travail autour des pages A5
  à l'écran ; il n'apparaît jamais à l'impression.

Toutes les paires texte/fond nommées dans les jetons atteignent 4,5:1, sauf
`red-600` sur `mist`, documentée ci-dessus. Ne jamais porter une information par
la couleur seule : chaque chiffre a son libellé, chaque icône son texte.

## Typography

Une famille et sa condensée. **Barlow** pour tout, **Barlow Condensed**
uniquement pour les surtitres `eyebrow`. Les deux sont libres (SIL OFL), servies
par Google Fonts ou embarquées en woff2 (sous-ensemble latin, suffisant pour le
français).

- **Titres en 800 serrés** (`letter-spacing` −0,01 à −0,02 em), texte en 400,
  intitulés en 700. Pas de 500 ni de 600 dans l'échelle : les demi-graisses
  affadissent le contraste titre/texte qui fait la lisibilité du programme.
- **Le surtitre est saisi en casse normale** (« Pourquoi ce programme ») et mis
  en capitales par le style, à 0,14 em d'interlettrage ; `accent` au-dessus
  d'un titre, `text-heading` au-dessus d'un bloc, `eyebrow-on-dark` sur fond
  sombre. Toujours suivi d'un titre ou d'un bloc : un surtitre seul est un
  libellé.
- **Deux tailles de chiffres**. `figure` (38 px, `accent`) pour les chiffres
  clés sur `paper` ; `figure-xl` (44 px, `accent-on-dark`) pour le chiffre d'un
  encart sombre. Un chiffre est toujours accompagné de son libellé en 700 et,
  s'il le faut, d'une note en `small`.
- **Sous le titre de couverture, un filet `red-600` de 56 × 4 px.** C'est le
  seul ornement typographique du système.
- **L'échelle est celle de l'A5** (559 px de large) : `display` 58, `h1` 34,
  `h2` 18, `h3` 16, `lead` 14, `body` 13, `small` 11,5, `footer` 10,5. **Pour
  un écran ou une affiche, garder les rapports et agrandir le tout** : sur un
  site, corps 17–18 px, `lead` 20–22, `h2` 28–32, `h1` 40–56 en `clamp()`,
  `display` jusqu'à 72 sur une page d'accueil.

## Layout & Spacing

Le système est né d'un imprimé : la mise en page est celle d'une page A5, et
c'est elle qui fixe les espacements.

- **Page intérieure A5** : marges `page-pad-top` 34 px, `page-pad-x` 38 px,
  `page-pad-bottom` 26 px ; blocs espacés de 18 px (`space-6`). Déroulé :
  `Surtitre` + `h1` (logo 78 px à droite) → chapeau `lead` → blocs
  (`EncartChiffre`, `Etape`, `ChiffresCles`, `Tuile`…) → appel au contact →
  `PiedDePage` numéroté.
- **Couverture** : barre `red-600` de 10 px en haut, ligne « Loir-et-Cher /
  Saison 2027 » en surtitres, logo 340 px centré, surtitre + `display` + filet +
  chapeau, bandeau partenaire marine en bas, marge latérale `space-10` 44 px.
- **Échelle d'espacement en dix pas irréguliers** (3, 6, 10, 12, 14, 18, 26,
  34, 38, 44) : chaque pas a un emploi nommé, aucun n'est libre. `space-1` sépare
  un titre de son texte dans une étape, `space-6` sépare deux blocs.
- **À l'écran**, les pages A5 se posent sur `surface-desk` avec `shadow-sheet`,
  centrées, sans mise à l'échelle. Pour un site, repartir des rapports :
  gouttière 16 px minimum sur téléphone, cibles tactiles 44 px, grilles
  3 → 2 → 1 colonnes.

## Elevation & Depth

**Plat.** La hiérarchie se fait par les fonds (`paper`, `mist`, `navy-700`) et
par les filets, pas par l'ombre.

- **`line` en 1 px** est un filet décoratif : séparateurs de colonnes de
  chiffres, pied de page.
- **`border-strong` en 3 px** ouvre un bloc (chiffres clés, « Le comité à vos
  côtés ») ; **en 2 px** il entoure l'`Encadre`.
- **Une seule ombre**, `shadow-sheet`, pour la feuille A5 posée sur
  `surface-desk` à l'écran. Jamais à l'impression, jamais sur un composant. Une
  carte web qui se soulève au survol peut la reprendre ; c'est la seule
  exception, et elle se désactive en `prefers-reduced-motion`.
- **Le focus n'est pas une élévation** : anneau 3 px `red-600` décalé de 2 px.

## Shapes

Trois rayons, une iconographie, aucun dégradé.

- **`radius-sm` 6 px** : tuiles, cartouche blanc des logos partenaires.
- **`radius-md` 8 px** : encarts sombres, étapes en encart, encadré, bandeau
  partenaire.
- **`radius-full`** : pastilles numérotées (disques 28–30 px) et pastilles de
  section.
- **Iconographie Lucide au trait**, 24 × 24, trait 2 px, extrémités arrondies,
  quarante glyphes teintés par masque avec le composant `Icone`. `navy-700` par
  défaut ; `red-600` pour `plane`, `sunrise`, `accessibility`, `smile`,
  `wrench`, `check`. Toujours à côté d'un texte, 24 à 28 px, une par ligne ou
  par tuile.
- **Logos** : uniquement les fichiers fournis ; ne jamais les redessiner, les
  recolorer ni détacher la salamandre du soleil. Le lettrage est `navy-700` :
  jamais de logo directement sur `surface-dark`. Handi-Planeur : `transparent`
  sur `paper` (usage du programme), `fond-blanc` en bureautique, `contour` pour
  le marquage. Logos partenaires toujours dans un cartouche `white` au sein
  d'un `BandeauPartenaire`.

## Components

Douze composants, tous nés du programme A5. Le préfixe de classe est `cd-`.

### Surtitre

`eyebrow` en capitales. Trois tons : `accent` (au-dessus d'un titre),
`titre` (`text-heading`, au-dessus d'un bloc), `sombre` (`eyebrow-on-dark`,
11 px à 0,16 em, sur fond marine).

### EncartChiffre

Bloc `surface-dark`, `radius-md`, padding 16 × 20 px : le chiffre en
`figure-xl` `accent-on-dark` à gauche, le texte en 13,5 px blanc à droite. Un
seul par page, pour le chiffre qui prouve (« 19 personnes ont déjà découvert le
planeur »).

### ChiffresCles

Grille de deux à quatre colonnes ouverte par un filet fort 3 px et fermée par un
filet fin, colonnes séparées par `line`. Chaque colonne : valeur en `figure`
`accent`, libellé en 13 px 700 `text-heading`, note en `small` `text-muted`.

### Etape

Pastille numérotée (`red-600` par défaut, `navy-700` en ton `marine`), titre
`h3`, texte `body`. Variante `encart` sur `surface-card` avec `radius-md`, pour
les listes de dispositifs.

### Tuile

Fond `surface-card`, `radius-sm`, titre 13,5 px 700, texte `small` `text-muted`.
Trois tuiles côte à côte forment « Le comité à vos côtés ».

### Encadre

Bordure 2 px `border-strong`, `radius-md`, signe « + » en `accent` à gauche,
texte `text-strong` avec le mot fort en `text-heading`. Pour ce qui se cumule ou
se réserve.

### BandeauPartenaire

Fond `surface-dark`, `radius-md`, cartouche `white` avec le logo partenaire à
gauche (82 px, 58 px en bas de couverture), surtitre `sombre`, titre 18 px 700
blanc, sous-titre `text-on-dark-muted`.

### Pastille

`radius-full`, fond `mist`, texte condensé `navy-700` en capitales. En
`section="handi"`, un disque `red-600` de 18 px porte le « H » en 800 blanc
avant le libellé.

### PiedDePage

Filet fin au-dessus, `footer` en `text-subtle` à gauche, numéro de page en
12 px 700 `text-heading` à droite. « CDVP41 · Loir-et-Cher » pour le comité,
« CDVP41 · Section Handi-Planeur Loir-et-Cher » pour la section.

### PageA5

Feuille 559 × 794 px, `surface-page`, marges de page, `shadow-sheet` à l'écran ;
en couverture, padding nul et barre `red-600` de 10 px en tête. À l'impression,
148 × 210 mm sans ombre.

### Logo, Icone

Voir *Shapes*. `Logo` prend `section` (`cdvp` | `handi`), `version`
(`fond-blanc` | `transparent` | `contour`), `taille` (carré, 160 px par
défaut) et `alt` (`""` quand le nom est écrit juste à côté). `Icone` prend
`nom`, `taille`, `couleur` (`rouge` | `marine` | `clair`) et `label` quand
l'icône porte du sens.

### Ce qui reste à dessiner pour le web

Le système couvre l'imprimé. Un site en dérive, dans le même langage :
navigation (`paper`, filet `line`, lien actif souligné `red-600` 3 px), bouton
primaire (`navy-700`, blanc, `radius-sm`, 48 px), bouton secondaire (contour
2 px `navy-700`), champ (bordure 2 px `line`, libellé au-dessus, erreur en texte
sous le champ), puces de filtre (`radius-full`, `aria-pressed`), carte
d'actualité, ligne d'agenda. Ils n'existent pas encore dans le bundle : les
ajouter au système plutôt que les improviser dans un projet.

## Do's and Don'ts

**À faire**

- Passer par les alias (`text-heading`, `surface-card`, `accent-on-dark`),
  jamais par les rampes dans un composant.
- Donner à chaque chiffre son libellé, à chaque icône son texte, à chaque logo
  son texte alternatif (« CDVP41 Section Handi-Planeur Loir-et-Cher »).
- Ouvrir un bloc par un filet fort 3 px avant d'envisager une carte, et une
  carte avant une ombre.
- Nommer `H-…` tout fichier de la section Handi-Planeur, et poser la
  `Pastille` `handi` à l'écran.
- Saisir les surtitres en casse normale et laisser le style les capitaliser.
- Écrire « 2 800 € », « avril → septembre 2027 », « personnes en situation de
  handicap ».
- Donner les informations pratiques en clair : accès, transfert, accompagnant,
  contact.

**À ne pas faire**

- **Ne pas poser `red-600` sur `navy-700`.** À 3,1:1 le rouge de marque ne
  passe pas ; sur fond sombre, `red-300` pour un chiffre, `red-200` pour un
  surtitre.
- **Ne pas écrire du texte courant en `red-600` sur `mist`.** 4,29:1 : les
  chiffres et les formes seulement.
- **Ne pas poser un logo sur `surface-dark`** : le lettrage marine disparaît.
  Le cartouche blanc existe pour ça.
- **Ne pas mettre les deux logos côte à côte.** Un support, un logo ; l'autre
  entité est nommée dans le texte.
- **Ne pas redessiner la salamandre**, ni la détacher du soleil, ni recolorer
  un logo.
- **Ne pas ajouter de dégradé, d'emoji, ni de pictogramme hors Lucide.** Deux
  jeux d'icônes sur une page se voient immédiatement.
- **Ne pas laisser `desk` ou `shadow-sheet` partir à l'impression.**
- **Ne pas reprendre l'échelle A5 telle quelle sur un écran** : 13 px de corps
  est un corps d'imprimé, pas de site.
