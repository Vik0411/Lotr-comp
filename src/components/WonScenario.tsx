import React from "react";
import { Scenario } from "../types";
import { CancelBtn } from "./atoms/CancelBtn";
import { CancelImage } from "./atoms/CancelImage";
import { ListItemWithWhiteText } from "./atoms/ListItemWithWhiteText";
import { LotrContext } from "../context";

export function WonScenario({ name, index }: Scenario) {
  const { campaign, setCampaign } = React.useContext(LotrContext);

  function returnScenario(scenarioIndex) {
    setCampaign({
      ...campaign,
      scenarios: campaign.scenarios.map((scenario) => {
        if (scenario.index === scenarioIndex) {
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
      <CancelBtn onClick={() => returnScenario(index)}>
        <CancelImage alt="" src="images/cancel-1.png"></CancelImage>
      </CancelBtn>
    </ListItemWithWhiteText>
  );
}
