import React, { useState, ReactNode, Dispatch, SetStateAction } from "react";
import { defaultState } from "./data/dataAdjustments";
import { Campaign } from "./types";
import { adjustMotk, retrieveCampaign, sortedItems } from "./utils";

export interface CampaignContextInterface {
  campaign: Campaign;
  setCampaign: Dispatch<SetStateAction<Campaign>>;
}

const LotrContext = React.createContext(defaultState);
type LotrProviderProps = {
  children: ReactNode;
};

function getCampaign() {
  const local = retrieveCampaign();
  if (local) {
    const js = JSON.parse(local);
    const adjM = adjustMotk(js.allHeroes);
    const sorted = sortedItems(adjM, "(MotK)");
    return { ...js, AllHeroes: sorted };
  }
  return defaultState.campaign;
}

function LotrProvider({ children }: LotrProviderProps) {
  const [campaign, setCampaign] = useState(getCampaign());

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
