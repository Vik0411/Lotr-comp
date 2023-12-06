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

//doesnt function properly (omits second object always)
export const onlyMultiples = removeDuplicates(onlyHeroesForCampaign).rest;

//functioning properly
export const onlyMultiplesOtherwise = onlyHeroesForCampaign.filter(
  (hero) => !onlyUniqueHeroes.includes(hero)
);

console.log("wise", onlyMultiplesOtherwise);
console.log("hero", onlyUniqueHeroes);
console.log("hero@", onlyMultiples);

function rename(hero) {
  let name = hero.name;
  let sphere = hero.sphere_name;
  hero.name = name.concat(" (", sphere, ")");
}

export const changedNameMultiples = onlyMultiplesOtherwise.map((hero) => {
  let name = hero.name;
  let sphere = hero.sphere_name;
  let namewhole = name.concat(" (", sphere, ")");
  return { ...hero, name: namewhole };
});

export const origoPrepared = changedNameMultiples.concat(onlyUniqueHeroes);

console.log("restr", origoPrepared);
console.log("last", changedNameMultiples);

export const defaultState: CampaignContextInterface = {
  campaign: {
    allHeroes: origoPrepared,
  },
  setCampaign: () => {},
};
