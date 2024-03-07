import { useState } from "react";
import { Input } from "./atoms/Input";
import { SectionHeader } from "./atoms/typography";
import { LotrContext } from "../context";
import React from "react";
import { ButtonShadowGreen } from "./AllMightyHeroes";
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
    const newHeroes = [...campaign.allHeroes, newHero];
    setCampaign({ ...campaign, allHeroes: newHeroes });
    setHeroName("");
  }

  return (
    <div style={{ textAlign: "center" }}>
      <SectionHeader
        style={{
          fontSize: "25px",
          fontWeight: "300",
          textAlign: "center",
          marginBottom: "0px",
        }}
      >
        Create Custom Hero
      </SectionHeader>
      <form onSubmit={submitCustomHero}>
        <Input
          as={motion.input}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          name="custom hero"
          type="text"
          value={heroName}
          onChange={handleChange}
          placeholder="hero name"
        />
        <ButtonShadowGreen
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          as={motion.button}
          value="sumbit"
          type="submit"
        >
          Create
        </ButtonShadowGreen>
      </form>
    </div>
  );
}

export default AddCustomHero;
