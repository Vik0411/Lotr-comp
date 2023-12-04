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
  let unique = [];
  arr.forEach((element) => {
    if (!unique.includes(element)) {
      unique.push(element);
    }
  });
  return unique;
}

const allUniqueHeroes = removeDuplicates(heroesNames).map((hero) => ({
  name: hero,
  alive: true,
  current: false,
}));

const onlyHeroesForCampaign = onlyHeroesFFG.map((hero) => ({
  ...hero,
  alive: true,
  current: false,
}));

console.log("restr", onlyHeroesForCampaign);

console.log(
  "hero",
  removeDuplicates(heroesNames).map((hero) => ({
    name: hero,
    alive: true,
    current: false,
  }))
);

export const defaultState: CampaignContextInterface = {
  campaign: {
    allHeroes: onlyHeroesForCampaign,
  },
  setCampaign: () => {},
};
