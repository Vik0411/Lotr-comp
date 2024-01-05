import { SetStateAction, Dispatch } from "react";
import { Campaign, Hero } from "./types";
import { allCards } from "./dataSet";
import { onlyHeroesFFG } from "./onlyHeroes";

export interface CampaignContextInterface {
  campaign: Campaign;
  setCampaign: Dispatch<SetStateAction<Campaign>>;
}

export const heroesNames = allCards
  .filter((typeHero) => typeHero.type_name === "Hero")
  .map((typeHero) => typeHero.name);

// state.rest not filtered properly - refactor
function removeDuplicates(arr: Hero[]) {
  let state: { unique: Hero[]; rest: Hero[] } = { unique: [], rest: [] };

  for (let i = 0; i < arr.length; i++) {
    let dupls = state.unique.find(
      (element: Hero) => element.name === arr[i].name
    );
    if (dupls === undefined) {
      state.unique.push(arr[i]);
    } else {
      state.rest.push(arr[i]);
      state.unique = state.unique.filter(
        (heroes) => heroes.name !== dupls?.name
      );
      let multiple: Hero | undefined = state.unique.find(
        (heroes) => heroes.name === dupls?.name
      );
      if (multiple) state.rest.push(multiple);
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

//doesnt function properly (omits second object always)
export const onlyMultiples = removeDuplicates(onlyHeroesForCampaign).rest;

//functioning properly
export const onlyMultiplesOtherwise = onlyHeroesForCampaign.filter(
  (hero) => !onlyUniqueHeroes.includes(hero)
);

export const changedNameMultiples = onlyMultiplesOtherwise.map((hero) => {
  let name = hero.name;
  let sphere = hero.sphere_name;
  let namewhole = name.concat(" (", sphere, ")");
  return { ...hero, name: namewhole };
});

export const origoPrepared = changedNameMultiples.concat(onlyUniqueHeroes);

export const defaultState: CampaignContextInterface = {
  campaign: {
    allHeroes: origoPrepared,
    boonsAndBurdens: {
      boons: [],
      burdens: [],
    },
  },
  setCampaign: () => {},
};
