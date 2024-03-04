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

  function submitCustomScenario(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

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
      <SectionHeader style={{ fontWeight: "450", fontSize: "30px" }}>
        Add Missing Scenario
      </SectionHeader>
      <motion.form
        name="addcscen"
        onSubmit={submitCustomScenario}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
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
      </motion.form>
    </div>
  );
}

export default AddCustomScenario;
