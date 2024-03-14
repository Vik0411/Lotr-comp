import React from "react";
import { Scenario } from "../types";
import { CancelBtn } from "./atoms/CancelBtn";
import { CancelImage } from "./atoms/CancelImage";
import { ListItemWithWhiteText } from "./atoms/ListItemWithWhiteText";
import { LotrContext } from "../context";
import { motion } from "framer-motion";

export function WonScenario({ name, id }: Scenario) {
  const { campaign, setCampaign } = React.useContext(LotrContext);

  function returnScenario(scenarioId: string) {
    setCampaign({
      ...campaign,
      scenarios: campaign.scenarios.map((scenario) => {
        if (scenario.id === scenarioId) {
          scenario.won = false;
          return scenario;
        } else {
          return scenario;
        }
      }),
    });
  }
  return (
    <ListItemWithWhiteText
      style={{ textAlign: "center" }}
      as={motion.li}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {name}
      <CancelBtn
        style={{ padding: "0px 0px" }}
        onClick={() => returnScenario(id)}
      >
        <CancelImage alt="" src="images/cancel-1.png"></CancelImage>
      </CancelBtn>
    </ListItemWithWhiteText>
  );
}
