import { Dispatch, SetStateAction } from "react";

export type Boon = {
  name: string;
  index: number;
  image: string;
  extraInfo: string;
};

export type Scenario = {
  name: string;
  index: number;
  current: boolean;
  won: boolean;
  campaign: string;
};

export type Burden = {
  name: string;
  index: number;
  image: string;
  extraInfo: string;
};
export interface Campaign {
  allHeroes: Hero[];
  boonsAndBurdens: { boons: Boon[]; burdens: Burden[] };
  scenarios: Scenario[];
}
export type changedAttrs = { alive: boolean; current: boolean };
export type changedAttrsScenario = { won: boolean; current: boolean };

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

interface BBNameObject {
  boonName: string;
  burdenName: string;
}

export interface BBContextInterface {
  bBNameObject: BBNameObject;
  setBBNameObject: Dispatch<SetStateAction<BBNameObject>>;
}
