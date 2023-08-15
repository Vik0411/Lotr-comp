import { LotrContext } from "../context";
import React, { useState } from "react";

function FallenHeroes() {
  // the FallenHero component should be rendered in this component in a loop or so
  // to show all the fallen heroes, via forEach() or so

  // addFallenHero() - unfinished function for the send to coffin button
  // to get the hero from the input text and if correct, that is
  // matching hero from the set of totalHeroes,
  // and is included in rest of heroes alive, update the state accordingly
  const { campaign, setCampaign } = React.useContext(LotrContext);
  const [fallenHero, setFallenHero] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFallenHero(e.target.value);
  }

  function addFallenHero() {
    //add hero to the list if it isnt there yet
    if (!campaign.restOfAliveHeroes.includes(fallenHero)) {
      throw Error("Sorry, your hero is not among the living!");
    }
    if (campaign.restOfAliveHeroes.includes(fallenHero)) {
      const updatedFallen = [...campaign.fallenHeroes, fallenHero];
      const updatedRestOfAlive = campaign.restOfAliveHeroes.filter(
        (hero) => hero !== fallenHero
      );
      setCampaign({
        ...campaign,
        fallenHeroes: updatedFallen,
        restOfAliveHeroes: updatedRestOfAlive,
      });
    }
  }

  console.log(campaign);
  return (
    <div>
      <input
        type="text"
        className="input_fallen"
        value={fallenHero}
        placeholder="Input your fallen hero..."
        onChange={handleChange}
      />
      <button className="btn input_fallen" onClick={addFallenHero}>
        Send to the coffin
      </button>
      <header className="header">
        <button className="btn list_fallen">List fallen heroes</button>
        <div className="fallen__heroes__panel">
          <ul className="fallen_heroes__list">{campaign.fallenHeroes}</ul>
        </div>
      </header>
    </div>
  );
}

export default FallenHeroes;
