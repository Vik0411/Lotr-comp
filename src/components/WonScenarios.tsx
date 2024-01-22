import React from "react";
import { WonScenario } from "./WonScenario";
import { filterScenarios } from "../utils";
import { LotrContext } from "../context";
import { SectionHeader } from "./atoms/typography";
import { styled } from "styled-components";
import { Scenario } from "../types";

function WonScenarios() {
  const { campaign } = React.useContext(LotrContext);

  let notCurrentAndWon = filterScenarios(
    { won: true, current: false },
    campaign.scenarios
  );

  const TopHeader = styled(SectionHeader)`
    margin: 30px 30px;
  `;
  return (
    <div>
      <TopHeader>Won Scenarios:</TopHeader>
      <ul>
        {notCurrentAndWon.map(
          (wonScenario: Scenario): JSX.Element => (
            <WonScenario key={wonScenario.name} {...wonScenario}></WonScenario>
          )
        )}
      </ul>
    </div>
  );
}

export default WonScenarios;
