import { LotrContext } from "../context";
import React, { useState } from "react";
import { FallenHero } from "./FallenHero";

function FallenHeroes() {
  const { campaign, setCampaign } = React.useContext(LotrContext);
  function filterFallen() {
    return campaign.allHeroes.filter((hero) => hero.alive === false);
  }

  function filterAlive() {
    return campaign.allHeroes.filter((hero) => hero.alive === true);
  }
  let fallen = filterFallen();
  let alive = filterAlive();

  const [fallenHero, setFallenHero] = useState(alive[0]?.name);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setFallenHero(e.target.value);
  }

  function addFallenHero(e: React.FormEvent<HTMLFormElement>) {
    const fallenToBeAdded = campaign.allHeroes.find(
      (hero) => hero.name === fallenHero
    );
    e.preventDefault();
    const namesOfFallen = fallen.map((hero) => hero.name);

    if (alive[1] === undefined) {
      alert("Your heroes list is empty. Do you want to add new?");
    }
    if (alive[0] !== undefined && namesOfFallen.includes(fallenHero)) {
      setFallenHero(alive[0].name);
      alive[0].alive = false;
      setCampaign({ ...campaign });
    } else {
      fallenToBeAdded!.alive = false;
      setCampaign({ ...campaign });
    }
  }

  return (
    <div>
      <form onSubmit={addFallenHero}>
        <select value={fallenHero} onChange={handleChange}>
          {alive.map((aliveHero) => (
            <option key={aliveHero.name}>{aliveHero.name}</option>
          ))}
        </select>
        <button type="submit">Send to the coffin</button>
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
