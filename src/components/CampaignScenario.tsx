import { SectionHeader } from "./atoms/typography";
import { ButtonShadow } from "./atoms/Button";
import { LotrContext } from "../context";
import React, { useEffect, useState } from "react";

import { filterScenarios } from "../utils";
import { Scenario } from "../types";
import { SelectFfgHero } from "./atoms/SelectFfgHero";
import { styled } from "styled-components";
import { BorBCard } from "./atoms/BorBCard";

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
    // add handling for when current scenario is already there, should on be allowed to add another? Probably not

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

  //rework
  useEffect(() => {
    // let notCurrentAndAlive = filterHeroes(
    //   { alive: true, current: false },
    //   campaign.allHeroes
    // );
    // setPreparedHero(notCurrentAndAlive[0]);
    // localStorage.setItem("campaign", JSON.stringify(campaign));
  }, [campaign]);

  return (
    <div
      style={{ marginLeft: "70px", marginRight: "70px", overflow: "hidden" }}
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
            margin: "50px 50px",
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
          <SectionHeader
            style={{
              textAlign: "center",
              marginTop: "30px",
            }}
          >
            Current Scenario:
            {" " + currentScenario?.name}
          </SectionHeader>
        </div>
        <ul
          style={{
            color: "white",
            margin: "70px 70px",
            listStyle: "none",
            columnWidth: "100px",
            height: "100px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              textDecoration: "bold",
              marginTop: "-5px",
              border: "0px 0px",
            }}
          >
            Scenarios won:
          </h3>
          <li> Angmar Awakened </li>
          <li> Angmar Awakened </li>
          <li> Angmar Awakened </li>
          <li> Angmar Awakened </li>
        </ul>
      </div>
      <div>
        <BorBCard
          src={require("../images/dragon_symbol.jpg")}
          style={{
            borderRadius: "80px",
            marginLeft: "800px",
            marginBottom: "80px",
          }}
        />
      </div>
    </div>
  );
}

export default CampaignScenario;
