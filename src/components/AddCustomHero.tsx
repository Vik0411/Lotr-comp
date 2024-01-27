import { useState } from "react";
import { Input } from "./atoms/Input";
import { SectionHeader } from "./atoms/typography";
import { LotrContext } from "../context";
import React from "react";
import { ButtonShadowGreen } from "./AllMightyHeroes";

function AddCustomHero() {
  const { campaign, setCampaign } = React.useContext(LotrContext);
  const [heroName, setHeroName] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setHeroName(e.target.value);
  }

  function submitCustomHero(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let newHero = {
      ...campaign.allHeroes[0],
      name: `${heroName} (non-FFG custom hero)`,
      code: `${heroName} (non-FFG custom hero) ${Date.now().toString()}`,
      imagesrc: "nonffg.jpg",
      alive: true,
      current: false,
      flavor: "",
    };
    console.log(newHero);
    let newHeroes = [...campaign.allHeroes, newHero];
    console.log(newHeroes);
    setCampaign({ ...campaign, allHeroes: newHeroes });
  }

  return (
    <div>
      <SectionHeader style={{ fontSize: "15px", fontWeight: "450" }}>
        Create Custom Hero
      </SectionHeader>
      <form onSubmit={submitCustomHero}>
        <Input
          type="text"
          value={heroName}
          onChange={handleChange}
          placeholder="hero name"
        />
        <ButtonShadowGreen value="sumbit" type="submit">
          Create
        </ButtonShadowGreen>
      </form>
    </div>
  );
}

export default AddCustomHero;
