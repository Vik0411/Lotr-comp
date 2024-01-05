import React, { useState, ReactNode, Dispatch, SetStateAction } from "react";
import { defaultState } from "./dataHelpers";
import { Campaign } from "./types";

/*
Here the first working version with local browser storage was only in javascript

//function preparation for reseting those heroes remaining alive
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
