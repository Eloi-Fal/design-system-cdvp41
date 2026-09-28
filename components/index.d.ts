import * as React from "react";

/** Logo officiel (image fournie). */
export interface LogoProps { section?: "cdvp" | "handi"; version?: "fond-blanc" | "transparent" | "contour"; taille?: number; alt?: string; className?: string; }
export declare function Logo(props: LogoProps): JSX.Element;

/** Pastille d'appartenance ; la section Handi-Planeur porte un « H ». */
export interface PastilleProps { section?: "cdvp" | "handi"; children?: React.ReactNode; className?: string; }
export declare function Pastille(props: PastilleProps): JSX.Element;

/** Surtitre Barlow Condensed en capitales. */
export interface SurtitreProps { ton?: "accent" | "titre" | "sombre"; children: React.ReactNode; className?: string; }
export declare function Surtitre(props: SurtitreProps): JSX.Element;

/** Icône Lucide teintée par masque. */
export type NomIcone = "accessibility" | "arrow-right" | "binoculars" | "calendar-check" | "calendar-days" | "check" | "clipboard-list" | "cloud" | "cloud-sun" | "compass" | "euro" | "file-text" | "flag" | "hammer" | "hand-heart" | "handshake" | "heart" | "heart-handshake" | "info" | "leaf" | "mail" | "map" | "map-pin" | "mountain" | "phone" | "piggy-bank" | "plane" | "plane-landing" | "plane-takeoff" | "shield-check" | "smile" | "sparkles" | "star" | "sun" | "sunrise" | "trophy" | "user-round" | "users" | "wind" | "wrench";
export interface IconeProps { nom: NomIcone; taille?: number; couleur?: "marine" | "rouge" | "clair" | string; label?: string; className?: string; }
export declare function Icone(props: IconeProps): JSX.Element | null;

/** Encart sombre : un chiffre et sa phrase. */
export interface EncartChiffreProps { chiffre: React.ReactNode; children: React.ReactNode; className?: string; }
export declare function EncartChiffre(props: EncartChiffreProps): JSX.Element;

/** Rangée de 2 à 4 chiffres clés. */
export interface ChiffreCle { valeur: React.ReactNode; libelle: React.ReactNode; note?: React.ReactNode; }
export interface ChiffresClesProps { items: ChiffreCle[]; className?: string; }
export declare function ChiffresCles(props: ChiffresClesProps): JSX.Element;

/** Point numéroté. */
export interface EtapeProps { numero: React.ReactNode; titre: React.ReactNode; children?: React.ReactNode; ton?: "rouge" | "marine"; encart?: boolean; className?: string; }
export declare function Etape(props: EtapeProps): JSX.Element;

/** Tuile d'information courte. */
export interface TuileProps { titre: React.ReactNode; children?: React.ReactNode; className?: string; }
export declare function Tuile(props: TuileProps): JSX.Element;

/** Encadré à bordure marine. */
export interface EncadreProps { children: React.ReactNode; signe?: React.ReactNode; className?: string; }
export declare function Encadre(props: EncadreProps): JSX.Element;

/** Bandeau partenaire marine avec cartouche logo blanc. */
export interface BandeauPartenaireProps { titre: React.ReactNode; surtitre?: React.ReactNode; children?: React.ReactNode; logo?: string; logoAlt?: string; pleinePage?: boolean; className?: string; }
export declare function BandeauPartenaire(props: BandeauPartenaireProps): JSX.Element;

/** Pied de page imprimable. */
export interface PiedDePageProps { children?: React.ReactNode; page?: React.ReactNode; className?: string; }
export declare function PiedDePage(props: PiedDePageProps): JSX.Element;

/** Page A5 imprimable. */
export interface PageA5Props { children: React.ReactNode; couverture?: boolean; page?: React.ReactNode; pied?: React.ReactNode; titre?: string; className?: string; }
export declare function PageA5(props: PageA5Props): JSX.Element;
