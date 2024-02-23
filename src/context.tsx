import React, { useState, ReactNode, Dispatch, SetStateAction } from "react";
import { defaultState } from "./data/dataAdjustments";
import { Campaign } from "./types";

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
