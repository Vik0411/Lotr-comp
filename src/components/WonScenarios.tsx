import React from "react";
import { WonScenario } from "./WonScenario";
import { filterScenarios } from "../utils";
import { LotrContext } from "../context";
import { SectionHeader } from "./atoms/typography";
import { Scenario } from "../types";

function WonScenarios() {
  const { campaign } = React.useContext(LotrContext);

  const notCurrentAndWon = filterScenarios(
    { won: true, current: false },
    campaign.scenarios
  );

  return (
    <div style={{ margin: "30px 30px", textAlign: "center" }}>
      <SectionHeader>Won Scenarios:</SectionHeader>
      <ul style={{ paddingLeft: "20px" }}>
        {notCurrentAndWon.map(
          (wonScenario: Scenario): JSX.Element => (
            <WonScenario key={wonScenario.id} {...wonScenario}></WonScenario>
          )
        )}
      </ul>
    </div>
  );
}

export default WonScenarios;
