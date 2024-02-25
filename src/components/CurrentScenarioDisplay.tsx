import { LotrContext } from "../context";
import React from "react";
import styled from "styled-components";
import { ButtonShadow } from "./atoms/ButtonShadow";
import { Paragraph, SectionHeader } from "./atoms/typography";
import { ContainerCurrentCard, ContainerFlex } from "./atoms/Containers";
import { CancelImage } from "./atoms/CancelImage";
import { BorBCard } from "./atoms/BorBCard";
import { Scenario } from "../types";
import { CancelBtn } from "./atoms/CancelBtn";
import { doesScenarioHaveImage } from "../utils";
import { ButtonShadowYellow } from "./BoonsAndBurdens";

export const ButtonBlack = styled(ButtonShadow)`
  box-shadow: none;
  position: absolute;
  bottom: 10px;
  left: 5px;
  transition: all 0.15s;
`;

function CurrentScenarioDisplay() {
  const { campaign, setCampaign } = React.useContext(LotrContext);
  const chosenCurrentScenario = campaign.scenarios.find(
    (chosen) => chosen.current === true
  );

  let pic: string;
  if (chosenCurrentScenario) {
    pic = chosenCurrentScenario.name.replaceAll(" ", "-");
  }

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
    <div style={{ margin: "30px 30px" }}>
      {chosenCurrentScenario && (
        <div>
          <SectionHeader style={{ textAlign: "center" }}>
            Current Scenario:
          </SectionHeader>
          <ContainerFlex>
            <ContainerCurrentCard
              key={chosenCurrentScenario.index}
              style={{ width: "250px" }}
            >
              <Paragraph>
                {chosenCurrentScenario ? chosenCurrentScenario.name : ""}
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
              {doesScenarioHaveImage(
                chosenCurrentScenario.name.toLowerCase()
              ) ? (
                <BorBCard
                  style={{ borderRadius: "10px" }}
                  alt=""
                  src={`images/scenarios/${pic}.webp`}
                />
              ) : (
                <BorBCard
                  style={{ borderRadius: "10px" }}
                  alt=""
                  src="images/burden.jpg"
                />
              )}
              <ButtonShadowYellow
                style={{ position: "absolute", bottom: "10px", left: "5px" }}
                onClick={() => {
                  if (chosenCurrentScenario) {
                    winScenario(chosenCurrentScenario.name);
                  }
                }}
              >
                Win
              </ButtonShadowYellow>
            </ContainerCurrentCard>
          </ContainerFlex>
        </div>
      )}
    </div>
  );
}

export default CurrentScenarioDisplay;
