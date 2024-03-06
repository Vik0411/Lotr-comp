import React, { useState, ReactNode, Dispatch, SetStateAction } from "react";
import { defaultState } from "./data/dataAdjustments";
import { Campaign } from "./types";
import { adjustMotk, sortedItems } from "./utils";

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
    if (local) {
      const js = JSON.parse(local);
      const adjM = adjustMotk(js.allHeroes);
      const sorted = sortedItems(adjM, "(MotK)");
      return { ...js, AllHeroes: sorted };
    }
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
