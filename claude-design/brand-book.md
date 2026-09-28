Le système visuel du Comité départemental de vol en planeur du Loir-et-Cher (CDVP41) et de sa **section Handi-Planeur**, tiré du *Programme Handi-Planeur 2027* et de la planche *Icônes CDVP41*. Papier chaud, marine de la Loire, rouge du soleil, Barlow partout.

## Deux identités, une règle « H »

- **CDVP41** : le comité (clubs, compétitions, formations, vie du département). Groupe `Logos-CDVP41`. Pied de page : « CDVP41 · Loir-et-Cher ».
- **Handi-Planeur** : la section handicap (vols pour personnes en situation de handicap, avec les clubs du département). Groupe `Logos-H-Handi-Planeur`. Pied de page : « CDVP41 · Section Handi-Planeur Loir-et-Cher ».
- **Règle du « H » :** tout fichier, logo ou groupe marqué `H` (préfixe `H-`, groupe `…-H-…`) relève de la section Handi-Planeur. Nommer ainsi tout nouveau fichier de la section : `H-programme-2027-A5.pdf`. À l'écran, la `Pastille` `section="handi"` porte ce « H ».
- Sur un support de la section, le logo Handi-Planeur est le seul logo du comité ; le comité est nommé dans le texte (« le Comité coordonne »). Ne jamais poser les deux logos côte à côte.

## Ton et contenu

- Le comité parle en « nous » et s'adresse aux clubs et aux familles en « vous » : « Nos clubs ont les machines, les pilotes et le savoir-faire », « Votre club est partant ? Parlons-en. »
- Chaleureux, concret, sans jargon : « Un premier vol en planeur, c'est un moment que l'on n'oublie pas. »
- Langage inclusif et respectueux : « personnes en situation de handicap » (jamais « handicapés »), « celles et ceux », « la personne comme son accompagnant ».
- Titres en casse de phrase, courts, qui affirment une idée : « Le prix ne doit plus être un frein », « Une dynamique qui prend ».
- Surtitres saisis en casse normale, mis en capitales par le style `eyebrow` : « Pourquoi ce programme », « Saison avril → septembre 2027 ».
- Typographie française : espace insécable avant `? ! : ;` et à l'intérieur des guillemets « … » ; nombres groupés par espace (« 2 800 € »), symbole € après le nombre ; flèche `→` pour une période.
- Graphies fixes : `CDVP41`, `Handi-Planeur`, `Loir-et-Cher`, « vol à voile », « le Comité » (majuscule quand il désigne le CDVP41).
- Pas d'emoji.

## Couleurs

- Deux couleurs d'identité : `navy-700` (titres, bandeaux, filets forts) et `red-600` (surtitres, chiffres, repères, barre de couverture). Le reste est de l'encre et du papier.
- Fond de page `surface-page` (`paper`, blanc cassé chaud) ; blocs `surface-card` (`mist`) ; encarts `surface-dark` (`navy-700`).
- Texte : `text-heading` pour les titres, `text-body` pour le courant, `text-muted` pour les notes, `text-subtle` seulement pour le pied de page.
- Sur `surface-dark` : `text-on-dark`, `text-on-dark-muted`, chiffre en `accent-on-dark`, surtitre en `eyebrow-on-dark`. Jamais `red-600` sur marine.
- `red-600` sur `mist` fait 4,29:1 : sur une tuile, le réserver aux chiffres et aux formes, pas à du texte courant.
- `line` (1px) est un filet décoratif ; `border-strong` en 3px ouvre un bloc (chiffres clés, « Le comité à vos côtés »), en 2px entoure l'`Encadre`.
- À l'écran, les pages A5 se posent sur `surface-desk` avec `shadow-sheet`.

## Typographie

- **Barlow** (`sans`) pour tout, **Barlow Condensed** (`condensed`) uniquement pour les surtitres `eyebrow`. Fichiers dans `fonts/` (sous-ensemble latin, suffisant pour le français).
- Échelle A5 : `display` 58px/800 (couverture), `h1` 34px/800, `h2` 18px/700, `h3` 16px/700, `figure` 38px/800 et `figure-xl` 44px/800 pour les chiffres ; `lead` 14px, `body` 13px, `small` 11,5px, `footer` 10,5px.
- Ces tailles sont celles de l'imprimé A5 (559px de large). Pour un écran ou une affiche, garder les rapports et agrandir le tout : texte courant d'au moins 16px sur un site.
- Titres en graisse 800 serrés (`letter-spacing` −0,01 à −0,02em), texte en 400, intitulés en 700.
- Sous le titre de couverture : un filet `red-600` de 56 × 4px.

## Mise en page

- Page A5 intérieure : marges `page-pad-top` 34px, `page-pad-x` 38px, `page-pad-bottom` 26px ; blocs espacés de 18px (`space-6`).
- Déroulé d'une page : `Surtitre` + `h1` (logo 78px à droite) → chapeau `lead` → blocs (`EncartChiffre`, `Etape`, `ChiffresCles`, `Tuile`…) → appel au contact en bas → `PiedDePage` numéroté.
- Couverture : barre `red-600` de 10px en haut, ligne « Loir-et-Cher / Saison 2027 » en surtitres, logo 340px centré, surtitre + `display` + filet + chapeau, bandeau partenaire marine en bas.
- Rayons : `radius-sm` 6px (tuiles, cartouches), `radius-md` 8px (encarts, encadrés), `radius-full` (pastilles numérotées). Aucun dégradé.

## Accessibilité

- Toutes les paires texte/fond nommées dans les jetons atteignent 4,5:1 (sauf `red-600` sur `mist`, voir Couleurs).
- Ne jamais porter une information par la couleur seule : chaque chiffre a son libellé, chaque icône son texte.
- Chaque logo a un texte alternatif (« CDVP41 Section Handi-Planeur Loir-et-Cher »), chaque photo une description.
- Donner les informations pratiques en clair : accès, transfert, accompagnant, contact (`cdvp41.bureau@gmail.com`).

## Logos et partenaires

- Utiliser uniquement les fichiers fournis ; ne jamais les redessiner, recolorer ni détacher la salamandre du soleil.
- Handi-Planeur : `transparent` sur `paper` (usage du programme) ; `fond-blanc` en bureautique ; `contour` pour le marquage.
- Lettrage `navy-700` : jamais de logo directement sur `surface-dark`.
- Logos partenaires (groupe `Partenaires`) toujours dans un cartouche `white` au sein d'un `BandeauPartenaire`.

## Iconographie

- 40 icônes Lucide au trait (24 × 24, trait 2px, extrémités arrondies), groupe `Icones`, à teinter par masque avec le composant `Icone`.
- `navy-700` par défaut ; `red-600` pour `plane`, `sunrise`, `accessibility`, `smile`, `wrench`, `check`.
- Toujours à côté d'un texte, 24 à 28px, une par ligne ou par tuile. Pas d'emoji ni de pictogrammes d'une autre famille.
