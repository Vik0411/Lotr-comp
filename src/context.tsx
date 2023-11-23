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
      { name: "Fingolfin", alive: true, current: false },
      { name: "Beravor", alive: true, current: false },
      { name: "Faenor", alive: true, current: false },
      { name: "Finarfin", alive: true, current: false },
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
