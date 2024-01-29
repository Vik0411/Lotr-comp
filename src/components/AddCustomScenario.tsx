import { useState } from "react";
import { Input } from "./atoms/Input";
import { SectionHeader } from "./atoms/typography";
import { LotrContext } from "../context";
import React from "react";
import { ButtonShadowGreen } from "./AllMightyHeroes";

function AddCustomScenario() {
  const { campaign, setCampaign } = React.useContext(LotrContext);
  const [scenarioName, setScenarioName] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setScenarioName(e.target.value);
  }

  function submitCustomScenario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let lastIndex;
    campaign.scenarios.lastIndexOf = lastIndex;
    let newScenario = {
      ...campaign.scenarios[0],
      name: `${scenarioName} (custom addition)`,
      index: lastIndex + 1,
      won: false,
      current: false,
      campaign: "",
    };

    let newScenarios = [...campaign.scenarios, newScenario];
    setCampaign({ ...campaign, scenarios: newScenarios });
  }

  return (
    <div style={{ margin: "-40px 100px", marginBottom: "10px" }}>
      <SectionHeader style={{ fontSize: "15px", fontWeight: "450" }}>
        Add Missing Scenario
      </SectionHeader>
      <form onSubmit={submitCustomScenario}>
        <Input
          type="text"
          value={scenarioName}
          onChange={handleChange}
          placeholder="custom scenario name"
        />
        <ButtonShadowGreen value="sumbit" type="submit">
          Add
        </ButtonShadowGreen>
      </form>
    </div>
  );
}

export default AddCustomScenario;
