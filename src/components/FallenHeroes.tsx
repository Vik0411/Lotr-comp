import { LotrContext } from "../context";
import React, { useState } from "react";
import { FallenHero } from "./FallenHero";

function FallenHeroes() {
  function filterFallen() {
    return campaign.allHeroes.filter((hero) => hero.alive === false);
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFallenHero(e.target.value);
  }

  const { campaign, setCampaign } = React.useContext(LotrContext);
  const [fallenHero, setFallenHero] = useState("");
  const fallen = filterFallen();

  function addFallenHero(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fall = campaign.allHeroes.find((hero) => hero.name === fallenHero);
    const isAlive = fall?.alive === true;
    const names = campaign.allHeroes.map((hero) => hero.name);

    //add hero to the list if it isnt there yet
    if (!names.includes(fallenHero)) {
      throw Error("Sorry, your hero is an unknown!");
    }

    if (names.includes(fallenHero) && !isAlive) {
      throw Error("Sorry, your hero is not among the living!");
    }

    if (names.includes(fallenHero) && isAlive) {
      fall.alive = false;
      setCampaign({ ...campaign });
    }
  }

  return (
    <div>
      <form onSubmit={addFallenHero}>
        <input
          type="text"
          className="input_fallen"
          value={fallenHero}
          placeholder="Input your fallen hero..."
          onChange={handleChange}
        />
        <button type="submit" className="btn input_fallen">
          Send to the coffin
        </button>
        <h3>The Fallen:</h3>
        <ul className="fallen_heroes__list">
          {fallen.map(
            (fallenHero): JSX.Element => (
              <FallenHero fallenHero={fallenHero.name} key={fallenHero.name} />
            )
          )}
        </ul>
      </form>
    </div>
  );
}

export default FallenHeroes;
