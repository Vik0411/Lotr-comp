import { SectionHeader } from "./atoms/typography";
import { ButtonShadow } from "./atoms/ButtonShadow";
import { LotrContext } from "../context";
import React, { useEffect, useState } from "react";

import { filterScenarios } from "../utils";
import { Scenario } from "../types";
import { SelectFfgHero } from "./atoms/SelectFfgHero";
import { styled } from "styled-components";

export const ButtonShadowGreen = styled(ButtonShadow)`
  opacity: 1;
  &:not([disabled]):active {
    box-shadow: #90ee90 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;

function CampaignScenario() {
  const { campaign, setCampaign } = React.useContext(LotrContext);
  let notCurrentAndNotWon = filterScenarios(
    { won: false, current: false },
    campaign.scenarios
  );
  let chosenCurrentScenario = campaign.scenarios.find(
    (chosen) => chosen.current === true
  );

  const [currentScenario, setCurrentScenario] = useState(
    notCurrentAndNotWon[0]
  );

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedScenario = campaign.scenarios.find(
      (scenario) => scenario.name === e.target.value
    );
    if (selectedScenario) {
      setCurrentScenario(selectedScenario);
    }
  }

  function addScenarioToCurrent(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // confirmation when one scneario is already current
    if (chosenCurrentScenario) {
      if (chosenCurrentScenario !== currentScenario) {
        alert(
          "There is already a scenario being played. Let us first battle that through!"
        );
        return;
      }
    }

    setCampaign({
      ...campaign,
      scenarios: campaign.scenarios.map((scenario: Scenario) => {
        if (scenario === currentScenario) {
          scenario.current = true;
          return scenario;
        } else {
          return scenario;
        }
      }),
    });
  }

  useEffect(() => {
    let notCurrentAndNotWon = filterScenarios(
      { won: false, current: false },
      campaign.scenarios
    );
    setCurrentScenario(notCurrentAndNotWon[0]);
    localStorage.setItem("campaign", JSON.stringify(campaign));
  }, [campaign]);

  return (
    <div
      style={{
        marginLeft: "30px",
        marginRight: "30px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexFlow: "row",
          justifyContent: "center",
        }}
      >
        <div
          style={{
            margin: "50px 20px",
            display: "flex",
            flexFlow: "column",
          }}
        >
          <SectionHeader style={{ textAlign: "center" }}>
            Specify Current Campaign Scennario
          </SectionHeader>
          <form onSubmit={addScenarioToCurrent} style={{ textAlign: "center" }}>
            <SelectFfgHero value={currentScenario.name} onChange={handleChange}>
              {notCurrentAndNotWon.map((notCurrent) => (
                <option key={notCurrent.name} value={notCurrent.name}>
                  {notCurrent.name}
                </option>
              ))}
            </SelectFfgHero>
            <ButtonShadowGreen type="submit">Add Scenario</ButtonShadowGreen>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CampaignScenario;
