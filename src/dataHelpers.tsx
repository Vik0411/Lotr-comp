import { SetStateAction, Dispatch } from "react";
import { Campaign, Hero } from "./types";
import { allCards } from "./dataSet";
import { onlyHeroesFFG } from "./onlyHeroes";
import { scenarios } from "./scenarios";

export interface CampaignContextInterface {
  campaign: Campaign;
  setCampaign: Dispatch<SetStateAction<Campaign>>;
}

export const heroesNames = allCards
  .filter((typeHero) => typeHero.type_name === "Hero")
  .map((typeHero) => typeHero.name);

function removeDuplicates(arr: Hero[]) {
  let state: { unique: Hero[]; rest: Hero[] } = { unique: [], rest: [] };

  for (let i = 0; i < arr.length; i++) {
    let dupls1 = state.unique.find((element: Hero) => {
      return element.name == arr[i].name;
    });
    let dupls2 = state.rest.find((element: Hero) => {
      return element.name == arr[i].name;
    });
    console.log(dupls1);
    if (!dupls1 && !dupls2) {
      state.unique.push(arr[i]);
    } else if (dupls1 && !dupls2) {
      state.rest.push(arr[i]);
      state.rest.push(dupls1);
      state.unique = state.unique.filter((hero) => hero.name !== dupls1.name);
    } else {
      state.rest.push(arr[i]);
    }
  }
  return state;
}

const onlyHeroesForCampaign: Hero[] = onlyHeroesFFG.map((hero) => ({
  ...hero,
  alive: true,
  current: false,
}));

export const onlyUniqueHeroes = removeDuplicates(onlyHeroesForCampaign).unique;
export const onlyMultiples = removeDuplicates(onlyHeroesForCampaign).rest;

export const changedNameMultiples = onlyMultiples.map((hero) => {
  let name = hero.name;
  let sphere = hero.sphere_name;
  let namewhole = name.concat(" (", sphere, ")");
  return { ...hero, name: namewhole };
});

// const changedNamesAll = onlyHeroesForCampaign.map((hero) => {
//   let name = hero.name;
//   let sphere = hero.sphere_name;
//   let namewhole = name.concat(" (", sphere, ")");
//   return { ...hero, name: namewhole };
// });

const all = changedNameMultiples.concat(
  removeDuplicates(onlyHeroesForCampaign).unique
);

const scenariosForCampaign = scenarios.map((scenario, indexing) => {
  let scen = { ...scenario, index: indexing, current: false, won: false };
  return scen;
});
export const defaultState: CampaignContextInterface = {
  campaign: {
    allHeroes: all,
    boonsAndBurdens: {
      boons: [],
      burdens: [],
    },
    scenarios: scenariosForCampaign,
  },
  setCampaign: () => {},
};
