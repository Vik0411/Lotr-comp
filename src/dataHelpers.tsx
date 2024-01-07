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
    let dupls = state.unique.find((element: Hero) => {
      return element.name == arr[i].name;
    });
    console.log(dupls);
    if (!dupls) {
      state.unique.push(arr[i]);
    } else {
      state.rest.push(arr[i]);
      state.unique = state.unique.filter((hero) => hero.name !== dupls.name);
      // let multiple: Hero | undefined = state.unique.find(
      //   (hero) => hero.name === dupls?.name
      // );
      // if (multiple) state.rest.push(multiple);
    }
  }
  console.log(state);

  return state;
}

console.log(onlyHeroesFFG);
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

export const changedNameMultipless = removeDuplicates(
  onlyHeroesForCampaign
).rest.map((hero) => {
  let name = hero.name;
  let sphere = hero.sphere_name;
  let namewhole = name.concat(" (", sphere, ")");
  return { ...hero, name: namewhole };
});

const changedNamesAll = onlyHeroesForCampaign.map((hero) => {
  let name = hero.name;
  let sphere = hero.sphere_name;
  let namewhole = name.concat(" (", sphere, ")");
  return { ...hero, name: namewhole };
});
export const origoPrepared = changedNameMultiples.concat(onlyUniqueHeroes);
const all = changedNameMultipless.concat(
  removeDuplicates(onlyHeroesForCampaign).unique
);

export const defaultState: CampaignContextInterface = {
  campaign: {
    allHeroes: changedNamesAll,
    boonsAndBurdens: {
      boons: [],
      burdens: [],
    },
  },
  setCampaign: () => {},
};
