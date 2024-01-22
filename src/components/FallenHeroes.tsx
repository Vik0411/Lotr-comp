import React from "react";
import { LotrContext } from "../context";
import { Hero } from "../types";
import { filterHeroes } from "../utils";
import { FallenHero } from "./FallenHero";
import { SectionHeader } from "./atoms/typography";
import { styled } from "styled-components";
import { ContainerFallenHeroes } from "./atoms/Containers";

const BottomSectionHeader = styled(SectionHeader)`
  margin-top: -30px;
  margin-bottom: 10px;
`;

function FallenHeroes() {
  const { campaign } = React.useContext(LotrContext);

  let fallen: Hero[] = filterHeroes(
    { alive: false, current: false },
    campaign.allHeroes
  );

  return (
    <ContainerFallenHeroes>
      <BottomSectionHeader>The Fallen:</BottomSectionHeader>
      <ul>
        {fallen.map(
          (fallenHero: Hero): JSX.Element => (
            <FallenHero key={fallenHero.code} {...fallenHero} />
          )
        )}
      </ul>
    </ContainerFallenHeroes>
  );
}

export default FallenHeroes;
