export type Boon = string;
export type Burden = string;
export interface Campaign {
  allHeroes: Hero[];
  boonsAndBurdens: { boons: Boon[]; burdens: Burden[] };
}
export type changedAttrs = { alive: boolean; current: boolean };

export type Hero = {
  pack_code: string;
  pack_name: string;
  type_code: string;
  type_name: string;
  sphere_code: string;
  sphere_name: string;
  position: number;
  traits: string;
  text: string;
  flavor?: string;
  threat: number;
  willpower: number;
  attack: number;
  defense: number;
  health: number;
  quantity: number;
  deck_limit: number;
  illustrator: string;
  octgnid?: string;
  has_errata: boolean;
  url: string;
  imagesrc: string;
  name: string;
  alive: boolean;
  current: boolean;
  code: string;
};
