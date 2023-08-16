import { LotrContext } from "../context";
import React, { useState } from "react";
import { FallenHero } from "./FallenHero";

function FallenHeroes() {
  // the FallenHero component should be rendered in this component in a loop or so
  // to show all the fallen heroes, via forEach() or so

  // addFallenHero() - unfinished function for the send to coffin button
  // to get the hero from the input text and if correct, that is
  // matching hero from the set of totalHeroes,
  // and is included in rest of heroes alive, update the state accordingly
  const { campaign, setCampaign } = React.useContext(LotrContext);

  function filterFallen() {
    return campaign.allHeroes.filter((hero) => hero.alive === false);
  }

  const fallen = filterFallen();
  const [fallenHero, setFallenHero] = useState("");
  const [fallenHeroes, setFallenHeroes] = useState(fallen);

  const names = campaign.allHeroes.map((hero) => {
    return hero.name;
  });

  const isAlive =
    campaign.allHeroes.find((hero) => hero.name === fallenHero)?.alive === true;

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFallenHero(e.target.value);
  }

  function addFallenHero(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    //add hero to the list if it isnt there yet
    if (!names.includes(fallenHero)) {
      throw Error("Sorry, your hero is an unknown!");
    }

    if (names.includes(fallenHero) && !isAlive) {
      throw Error("Sorry, your hero is not among the living!");
    }

    if (names.includes(fallenHero) && isAlive) {
      campaign.allHeroes.map((hero) => {
        if (hero.name === fallenHero) {
          hero.alive = false;
          setCampaign(campaign);
          const fallen = filterFallen();
          setFallenHeroes(fallen);
        }
      });
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
          {fallenHeroes.map(
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
