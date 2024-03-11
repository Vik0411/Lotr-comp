import { useState } from "react";
import { Input } from "./atoms/Input";
import { SectionHeader } from "./atoms/typography";
import { LotrContext } from "../context";
import React from "react";
import { ButtonShadowGreen } from "./AllMightyHeroes";
import { motion } from "framer-motion";

function AddCustomScenario() {
  const { campaign, setCampaign } = React.useContext(LotrContext);
  const [scenarioName, setScenarioName] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setScenarioName(e.target.value);
  }

  function submitCustomScenario() {
    const newScenario = {
      ...campaign.scenarios[0],
      name: `${scenarioName} (custom addition)`,
      index: Number(Date.now().toFixed()),
      won: false,
      current: false,
      campaign: "",
    };

    const newScenarios = [...campaign.scenarios, newScenario];
    setCampaign({ ...campaign, scenarios: newScenarios });
    setScenarioName("");
  }

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <SectionHeader
        style={{ fontWeight: "300", fontSize: "25px", marginBottom: "0px" }}
      >
        Create new Scenario
      </SectionHeader>
      <div>
        <Input
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          as={motion.input}
          type="text"
          name="custom scenario"
          value={scenarioName}
          onChange={handleChange}
          placeholder="custom scenario name"
        />
        <ButtonShadowGreen
          onClick={submitCustomScenario}
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Add Scenario
        </ButtonShadowGreen>
      </div>
    </div>
  );
}

export default AddCustomScenario;
