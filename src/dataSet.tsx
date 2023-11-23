import { SetStateAction, Dispatch } from "react";
import { Campaign } from "./types";

export interface CampaignContextInterface {
  campaign: Campaign;
  setCampaign: Dispatch<SetStateAction<Campaign>>;
}

export const defaultState: CampaignContextInterface = {
  campaign: {
    allHeroes: [
      { name: "Beravor", alive: true, current: false },
      { name: "Faenor", alive: true, current: false },
      { name: "Finarfin", alive: true, current: false },
      { name: "Elrohir", alive: true, current: false },
      { name: "Elledan", alive: true, current: false },
      { name: "Bilbo", alive: true, current: false },
      { name: "Gandalf", alive: true, current: false },
      { name: "Grima", alive: true, current: false },
      { name: "Saruman", alive: true, current: false },
      { name: "Stromovous", alive: true, current: false },
      { name: "x", alive: true, current: false },
      { name: "y", alive: true, current: false },
      { name: "z", alive: true, current: false },
      { name: "Arwen", alive: false, current: false },
      { name: "Elladan", alive: false, current: false },
      { name: "Elrohir", alive: false, current: false },
      { name: "Rossiel", alive: false, current: false },
      { name: "Gollum", alive: false, current: false },
      { name: "Mirlonde", alive: false, current: false },
      { name: "Prince Imrahil", alive: false, current: false },
      { name: "Hirluin the Fair", alive: false, current: false },
      { name: "Denethor", alive: false, current: false },
      { name: "Eowyn", alive: false, current: false },
      { name: "Aragorn", alive: false, current: false },
      { name: "Elfhelm", alive: false, current: false },
      { name: "Galadriel", alive: false, current: false },
      { name: "Haldir", alive: false, current: false },
      { name: "Celeborn", alive: false, current: false },
      { name: "Cirdan", alive: false, current: false },
      { name: "Beorn", alive: false, current: false },
      { name: "Beregond", alive: false, current: false },
      { name: "Frodo", alive: false, current: false },
      { name: "Merry", alive: false, current: false },
      { name: "Folco", alive: false, current: false },
      { name: "Fingolfin", alive: false, current: false },
      { name: "x", alive: false, current: false },
      { name: "Ecthelion", alive: false, current: false },
    ],
  },
  setCampaign: () => {},
};
