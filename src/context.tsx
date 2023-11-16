import React, { SetStateAction, useState, Dispatch, ReactNode } from "react";
import { Campaign } from "./types";
// This page should work as mainly as the data handling place

/*
// unfinished function for potentianlly new feature of also keeping count
// of individual deaths for the heroes
export const addFallenHeroCount = function(hero:string){
    //add hero to the list if it isnt there yet
    if(state.restOfAliveHeroes.includes(hero)){
        throw Error
    } else {
        state.fallenHeroes.push(hero);
        persistData();
    }   
}

// function preparation for reseting those heroes remaining alive
export const resetRestOfHeroes = function(hero:string){
    //add hero to the list if it isnt there yet
    if(state.restOfAliveHeroes.includes(hero)){
        throw Error
    } else {
        state.fallenHeroes.push(hero);
        persistData();
    }   
}
*/

export interface CampaignContextInterface {
  campaign: Campaign;
  setCampaign: Dispatch<SetStateAction<Campaign>>;
}

export const defaultState: CampaignContextInterface = {
  campaign: {
    allHeroes: [
      { name: "Fingolfin", alive: true },
      { name: "Faenor", alive: true },
      { name: "Beravor", alive: true },
      { name: "Finarfin", alive: true },
      { name: "Faenor", alive: true },
      { name: "Finarfin", alive: true },
      { name: "Arwen", alive: false },
      { name: "Elladan", alive: false },
      { name: "Elrohir", alive: false },
      { name: "Rossiel", alive: false },
      { name: "Gollum", alive: false },
      { name: "Mirlonde", alive: false },
      { name: "Prince Imrahil", alive: false },
      { name: "Hirluin the Fair", alive: false },
      { name: "Denethor", alive: false },
      { name: "Eowyn", alive: false },
      { name: "Aragorn", alive: false },
      { name: "Elfhelm", alive: false },
      { name: "Galadriel", alive: false },
      { name: "Haldir", alive: false },
      { name: "Celeborn", alive: false },
      { name: "Cirdan", alive: false },
      { name: "Beorn", alive: false },
      { name: "Beregond", alive: false },
    ],
  },
  setCampaign: () => {},
};

const LotrContext = React.createContext(defaultState);

type LotrProviderProps = {
  children: ReactNode;
};

function LotrProvider({ children }: LotrProviderProps) {
  const local = localStorage.getItem("campaign");
  function getStorageCampaign() {
    if (local) return JSON.parse(local);
  }
  const [campaign, setCampaign] = useState(
    getStorageCampaign() || defaultState.campaign
  );

  return (
    <LotrContext.Provider
      value={{
        campaign,
        setCampaign,
      }}
    >
      {children}
    </LotrContext.Provider>
  );
}

export { LotrContext, LotrProvider };
