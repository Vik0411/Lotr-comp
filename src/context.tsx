import React, { SetStateAction, useState, Dispatch, ReactNode } from "react";
import { Campaign } from "./types";
// Here the first working version with local browser storage was only in javascript
// and will have to be adjusted to react and useState() hooks probably
// This page should work as mainly as the data handling place

/*
export const persistData = function () {
    // I believe we could simply use this browser local storage for our purposes
    localStorage.setItem('fallenHeroes', JSON.stringify(state.fallenHeroes))
}

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


const init = function(){
    const storage = localStorage.getItem('fallenHeroes')
    if (storage) state.fallenHeroes= JSON.parse(storage)
}
init()
console.log(state.fallenHeroes, state.restOfAliveHeroes)

*/

export interface CampaignContextInterface {
  campaign: Campaign;
  setCampaign: Dispatch<SetStateAction<Campaign>>;
}

const defaultState = {
  campaign: {
    fallenHeroes: [],
    restOfAliveHeroes: ["Aragorn", "Eowyn", "Beravor"],
    allHeroes: ["Aragorn", "Eowyn", "Beravor"],
  },
  setCampaign: (campaign: Campaign) => {},
} as CampaignContextInterface;

const LOTRContext = React.createContext(defaultState);

type CampaignProvideProps = {
  children: ReactNode;
};
const LOTRProvider = ({ children }: CampaignProvideProps) => {
  const [campaign, setCampaign] = useState<Campaign>({
    fallenHeroes: [],
    restOfAliveHeroes: ["Aragorn", "Eowyn", "Beravor"],
    allHeroes: ["Aragorn", "Eowyn", "Beravor"],
  });

  // error
  const [error, setError] = useState({ show: false, msg: "" });
  return (
    <LOTRContext.Provider
      value={{
        campaign,
        setCampaign,
      }}
    >
      {children}
    </LOTRContext.Provider>
  );
};

export { LOTRContext, LOTRProvider };
