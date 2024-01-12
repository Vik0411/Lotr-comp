import React from "react";
import { Scenario } from "../types";
import { CancelBtn } from "./atoms/Button";
import { CancelImage } from "./atoms/CancelImage";
import { ListItemWithWhiteText } from "./atoms/ListItemWithWhiteText";
import { LotrContext } from "../context";

export function WonScenario({ name }: Scenario) {
  const { campaign, setCampaign } = React.useContext(LotrContext);

  function returnScenario(scenarioName: string) {
    setCampaign({
      ...campaign,
      scenarios: campaign.scenarios.map((scenario) => {
        if (scenario.name === scenarioName) {
          scenario.won = false;
          return scenario;
        } else {
          return scenario;
        }
      }),
    });
  }
  return (
    <ListItemWithWhiteText>
      {name}
      <CancelBtn onClick={() => returnScenario(name)}>
        <CancelImage alt="" src="images/cancel-1.png"></CancelImage>
      </CancelBtn>
    </ListItemWithWhiteText>
  );
}
