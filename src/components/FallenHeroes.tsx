import React from "react";
import { LotrContext } from "../context";
import { Hero } from "../types";
import { filterHeroes } from "../utils";
import { FallenHero } from "./FallenHero";

function FallenHeroes() {
  const { campaign } = React.useContext(LotrContext);

  let fallen: Hero[] = filterHeroes(
    { alive: false, current: false },
    campaign.allHeroes
  );

  return (
    <div
      style={{
        border: "20px solid white",
      }}
    >
      <h3
        style={{
          color: "white",
        }}
      >
        The Fallen:
      </h3>
      <ul>
        {fallen.map(
          (fallenHero: Hero): JSX.Element => (
            <FallenHero key={fallenHero.code} {...fallenHero} />
          )
        )}
      </ul>
    </div>
  );
}

export default FallenHeroes;
