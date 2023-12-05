import { SetStateAction, Dispatch } from "react";
import { Campaign } from "./types";
import { allCards } from "./dataSet";
import { onlyHeroesFFG } from "./onlyHeroes";

export interface CampaignContextInterface {
  campaign: Campaign;
  setCampaign: Dispatch<SetStateAction<Campaign>>;
}

export const heroesNames = allCards
  .filter((typeHero) => typeHero.type_name === "Hero")
  .map((typeHero) => typeHero.name);

function removeDuplicates(arr) {
  let state = { unique: [], rest: [] };

  for (let i = 0; i < arr.length; i++) {
    let dupls = state.unique.find((element) => element.name === arr[i].name);
    if (dupls === undefined) {
      state.unique.push(arr[i]);
    } else {
      state.rest.push(arr[i]);
      state.unique = state.unique.filter(
        (heroes) => heroes.name !== dupls.name
      );
      let multiple = state.unique.filter(
        (heroes) => heroes.name === dupls.name
      );
      state.rest.push(multiple);
    }
  }
  return state;
}

const onlyHeroesForCampaign = onlyHeroesFFG.map((hero) => ({
  ...hero,
  alive: true,
  current: false,
}));

export const onlyUniqueHeroes = removeDuplicates(onlyHeroesForCampaign).unique;
export const onlyMultiples = removeDuplicates(onlyHeroesForCampaign).rest;

console.log("restr", onlyHeroesForCampaign);

console.log("hero", onlyUniqueHeroes);
console.log("hero@", onlyMultiples);

export const defaultState: CampaignContextInterface = {
  campaign: {
    allHeroes: onlyHeroesForCampaign,
  },
  setCampaign: () => {},
};
