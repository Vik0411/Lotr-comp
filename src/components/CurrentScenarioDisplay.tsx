import { LotrContext } from "../context";
import React from "react";
import styled from "styled-components";
import { ButtonShadow, CancelBtn } from "./atoms/Button";
import { Paragraph, SectionHeader } from "./atoms/typography";
import { ContainerCurrentCard, ContainerFlex } from "./atoms/Container";
import { CancelImage } from "./atoms/CancelImage";
import { BorBCard } from "./atoms/BorBCard";
import { Scenario } from "../types";
import { filterScenarios } from "../utils";
import { WonScenario } from "./WonScenario";

const TopHeader = styled(SectionHeader)`
  margin: 30px 30px;
`;

const ContainerCurrentHeroes = styled(ContainerFlex)`
  display: flex;
  gap: 15px;
  margin: 30px 30px;
  flex-direction: row;
`;

export const ButtonBlack = styled(ButtonShadow)`
  box-shadow: none;
  position: absolute;
  bottom: 10px;
  left: 5px;
  transition: all 0.15s;
`;

function CurrentScenarioDisplay() {
  const { campaign, setCampaign } = React.useContext(LotrContext);
  let chosenCurrentScenario = campaign.scenarios.find(
    (chosen) => chosen.current === true
  );

  let pic;
  if (chosenCurrentScenario) {
    pic = chosenCurrentScenario.name.replaceAll(" ", "-");
  }

  let notCurrentAndWon = filterScenarios(
    { won: true, current: false },
    campaign.scenarios
  );

  function winScenario(scenarioIndex: string) {
    setCampaign({
      ...campaign,
      scenarios: campaign.scenarios.map((scenario: Scenario) => {
        if (scenario.name === scenarioIndex) {
          scenario.won = true;
          scenario.current = false;
          return scenario;
        } else {
          return scenario;
        }
      }),
    });
  }

  function returnScenario(scenarioIndex: string) {
    setCampaign({
      ...campaign,
      scenarios: campaign.scenarios.map((scenario: Scenario) => {
        if (scenario.name === scenarioIndex) {
          scenario.won = false;
          scenario.current = false;
          return scenario;
        } else {
          return scenario;
        }
      }),
    });
  }

  return (
    <div style={{ minHeight: "300px" }}>
      <div>
        <SectionHeader style={{ textAlign: "center" }}>
          Current Campaign Scenario:
        </SectionHeader>
        {chosenCurrentScenario && (
          <ContainerCurrentHeroes>
            <ContainerCurrentCard
              key={chosenCurrentScenario.index}
              style={{ width: "250px" }}
            >
              <div style={{ position: "relative" }}>
                <Paragraph>
                  {" " +
                    (chosenCurrentScenario ? chosenCurrentScenario.name : "")}
                  <CancelBtn
                    onClick={() => {
                      if (chosenCurrentScenario) {
                        returnScenario(chosenCurrentScenario.name);
                      }
                    }}
                  >
                    <CancelImage alt="" src="images/cancel-1.png"></CancelImage>
                  </CancelBtn>
                </Paragraph>
                <BorBCard
                  style={{ borderRadius: "10px" }}
                  alt=""
                  src={`images/scenarios/${pic}.webp`}
                />
                <ButtonBlack
                  onClick={() => {
                    if (chosenCurrentScenario) {
                      winScenario(chosenCurrentScenario.name);
                    }
                  }}
                >
                  Win Scenario
                </ButtonBlack>
              </div>
            </ContainerCurrentCard>
          </ContainerCurrentHeroes>
        )}
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "0px",
          top: "0px",
          right: "0px",
          marginRight: "400px",
          marginTop: "30px",
        }}
      >
        <TopHeader>Won Scenarios:</TopHeader>
        <ul>
          {notCurrentAndWon.map(
            (wonScenario: Scenario): JSX.Element => (
              <WonScenario
                key={wonScenario.name}
                {...wonScenario}
              ></WonScenario>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default CurrentScenarioDisplay;
