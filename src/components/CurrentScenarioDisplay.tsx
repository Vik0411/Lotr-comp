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
import AninamtedPage from "./AnimatedPage";
import { AnimatePresence } from "framer-motion";

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
    (chosen) => chosen.current
  );

  let picture: string;
  if (chosenCurrentScenario) {
    picture = chosenCurrentScenario.name.replaceAll(" ", "-");
  }

  function winScenario(scenarioId: string) {
    setCampaign({
      ...campaign,
      scenarios: campaign.scenarios.map((scenario: Scenario) => {
        if (scenario.name === scenarioId) {
          return {
            ...scenario,
            won: true,
            current: false,
          };
        } else {
          return scenario;
        }
      }),
    });
  }

  function returnScenario(scenarioId: string) {
    setCampaign({
      ...campaign,
      scenarios: campaign.scenarios.map((scenario: Scenario) => {
        if (scenario.name === scenarioId) {
          return { ...scenario, won: false, current: false };
        } else {
          return scenario;
        }
      }),
    });
  }

  const doesCurrentScenarioHaveImage = React.useMemo(() => {
    return (
      chosenCurrentScenario &&
      doesScenarioHaveImage(chosenCurrentScenario.name.toLowerCase())
    );
  }, [chosenCurrentScenario]);

  return (
    <div style={{ margin: "30px 30px" }}>
      <AnimatePresence>
        {chosenCurrentScenario && (
          <div>
            <SectionHeader style={{ textAlign: "center" }}>
              Current Scenario:
            </SectionHeader>
            <ContainerFlex>
              <AninamtedPage>
                <ContainerCurrentCard
                  key={chosenCurrentScenario.id}
                  style={{ width: "250px" }}
                >
                  <Paragraph style={{ marginLeft: "25px", right: "-25px" }}>
                    {chosenCurrentScenario ? chosenCurrentScenario.name : ""}
                    <CancelBtn
                      onClick={() => {
                        if (chosenCurrentScenario) {
                          returnScenario(chosenCurrentScenario.name);
                        }
                      }}
                    >
                      <CancelImage
                        alt=""
                        src="images/cancel-1.png"
                      ></CancelImage>
                    </CancelBtn>
                  </Paragraph>
                  {doesCurrentScenarioHaveImage ? (
                    <BorBCard
                      style={{
                        borderRadius: "10px",
                        marginLeft: "25px",
                      }}
                      alt=""
                      src={`images/scenarios/${picture}.webp`}
                    />
                  ) : (
                    <BorBCard
                      style={{ borderRadius: "10px" }}
                      alt=""
                      src="images/burden.jpg"
                    />
                  )}
                  <ButtonShadowYellow
                    style={{
                      position: "absolute",
                      bottom: "10px",
                      left: "25px",
                    }}
                    onClick={() => {
                      if (chosenCurrentScenario) {
                        winScenario(chosenCurrentScenario.name);
                      }
                    }}
                  >
                    Win
                  </ButtonShadowYellow>
                </ContainerCurrentCard>
              </AninamtedPage>
            </ContainerFlex>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default CurrentScenarioDisplay;
