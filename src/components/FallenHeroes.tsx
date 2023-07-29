import { LOTRContext } from "../context";
import React, { useState, Dispatch, SetStateAction } from "react";
import { FallenHero } from "../types";

function FallenHeroes() {
  // the FallenHero component should be rendered in this component in a loop or so
  // to show all the fallen heroes, via forEach() or so

  // addFallenHero() - unfinished function for the send to coffin button
  // to get the hero from the input text and if correct, that is
  // matching hero from the set of totalHeroes,
  // and is included in rest of heroes alive, update the state accordingly
  interface FallenHeroContextInterface {
    fallenHero: FallenHero;
    setFallenHero: Dispatch<SetStateAction<FallenHero>>;
  }

  const { campaign, setCampaign } = React.useContext(LOTRContext);
  const [fallenHero, setFallenHero] = useState("");

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFallenHero(e.target.value);
  };

  function addFallenHero() {
    //add hero to the list if it isnt there yet
    if (!campaign.restOfAliveHeroes.includes(fallenHero)) {
      throw Error;
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
    if (!campaign.allHeroes.includes(fallenHero)) {
      throw Error;
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
