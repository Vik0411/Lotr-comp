import React from "react";
import { LotrContext } from "../context";
import { Hero } from "../types";
import { filterHeroes } from "../utils";
import { FallenHero } from "./FallenHero";
import AninamtedPage from "./AnimatedPage";

function FallenHeroes() {
  const { campaign } = React.useContext(LotrContext);

  const fallen = filterHeroes(
    { alive: false, current: false },
    campaign.allHeroes
  );

  return (
    // <ContainerFallenHeroes>
    // variant for more columns
    <ul style={{ textAlign: "center" }}>
      {fallen.map(
        (fallenHero: Hero): JSX.Element => (
          <AninamtedPage>
            <FallenHero key={fallenHero.code} {...fallenHero} />
          </AninamtedPage>
        )
      )}
    </ul>
    // </ContainerFallenHeroes>
  );
}

export default FallenHeroes;
