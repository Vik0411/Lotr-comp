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

    let newScenario = {
      ...campaign.scenarios[0],
      name: `${scenarioName} (custom addition)`,
      index: Number(Date.now().toFixed()),
      won: false,
      current: false,
      campaign: "",
    };

    let newScenarios = [...campaign.scenarios, newScenario];
    setCampaign({ ...campaign, scenarios: newScenarios });
  }

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <SectionHeader style={{ fontWeight: "450", fontSize: "30px" }}>
        Add Missing Scenario
      </SectionHeader>
      <form name="addcscen" onSubmit={submitCustomScenario}>
        <Input
          type="text"
          name="custom scenario"
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
