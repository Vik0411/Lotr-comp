import { useState } from "react";
import { Input } from "./atoms/Input";
import { SectionHeader } from "./atoms/typography";
import { LotrContext } from "../context";
import React from "react";
import { ButtonShadowGreen } from "./AllMightyHeroes";
import { sortArray } from "../utils";
import { motion } from "framer-motion";

function AddCustomHero() {
  const { campaign, setCampaign } = React.useContext(LotrContext);
  const [heroName, setHeroName] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setHeroName(e.target.value);
  }

  function submitCustomHero(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newHero = {
      ...campaign.allHeroes[0],
      name: `${heroName} (non-FFG custom hero)`,
      code: `${heroName} (non-FFG custom hero) ${Date.now().toString()}`,
      imagesrc: "nonffg.jpg",
      alive: true,
      current: false,
      flavor: "",
    };
    const newHeroes = sortArray([...campaign.allHeroes, newHero]);
    setCampaign({ ...campaign, allHeroes: newHeroes });
    setHeroName("");
  }

  return (
    <div>
      <SectionHeader
        style={{ fontSize: "30px", fontWeight: "450", textAlign: "center" }}
      >
        Create Custom Hero
      </SectionHeader>
      <motion.form
        onSubmit={submitCustomHero}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <Input
          name="custom hero"
          type="text"
          value={heroName}
          onChange={handleChange}
          placeholder="hero name"
        />
        <ButtonShadowGreen value="sumbit" type="submit">
          Create
        </ButtonShadowGreen>
      </motion.form>
    </div>
  );
}

export default AddCustomHero;
