import { LotrContext } from "../context";
import React from "react";
import { Input } from "./atoms/Input";
import styled from "styled-components";
import { Button } from "./atoms/Button";
import { onlyHeroesFFG } from "../onlyHeroes";
import {
  changedNameMultiples,
  onlyMultiples,
  onlyMultiplesOtherwise,
} from "../dataHelpers";
import { FallenHero } from "./FallenHero";
import { filterHeroes } from "../utils";

const InputFallen = styled(Input)`
  background-color: ${({ theme }) => theme.colors.basicBlack};
  color: ${({ theme }) => theme.colors.basicWhite};
`;

const SendToCoffinBtn = styled(Button)`
  margin-top: 5px;
  background-color: ${({ theme }) => theme.colors.vanSaarGrey};

  &:hover {
    color: ${({ theme }) => theme.colors.basicWhite};
    background-color: ${({ theme }) => theme.colors.vanSaarGrey};
  }
`;

function FallenHeroes() {
  const { campaign, setCampaign } = React.useContext(LotrContext);

  let fallen = filterHeroes(
    { alive: false, current: false },
    campaign.allHeroes
  );

  //temporary
  console.log("dead", fallen);
  function filterFallen() {
    return campaign.allHeroes.filter((hero) => hero.alive === false);
  }

  let current = filterHeroes(
    { alive: true, current: true },
    campaign.allHeroes
  );
  console.log("current", current);
  function killHero(heroName) {
    let allOtherHeroes = campaign.allHeroes.filter(
      (hero) => hero.name !== heroName
    );

    let killedHeroAsObject = campaign.allHeroes.find(
      (hero) => hero.name === heroName
    );

    //for removing also otherduplicates during kill of a duplicate
    let killedHeroAsObjectOldName = onlyMultiplesOtherwise.find(
      (hero) => hero.code === killedHeroAsObject.code
    );

    let nameOfDupl = killedHeroAsObjectOldName.name;
    let mults = onlyMultiplesOtherwise.filter(
      (hero) => hero.name === nameOfDupl
    );
    let codes = mults.map((hero) => hero.code);
    console.log("kod", codes);

    let names = changedNameMultiples.map((hero) => hero.name);
    if (names.includes(killedHeroAsObject.name)) {
      allOtherHeroes = allOtherHeroes.filter(
        (hero) => !codes.includes(hero.code)
      );
    }

    setCampaign({
      allHeroes: [
        ...allOtherHeroes,
        {
          ...killedHeroAsObject,
          alive: false,
          current: false,
        },
      ],
    });
  }

  // refactor return below into styled components as well
  return (
    <div>
      <div>
        <h2>Current heroes</h2>
        <div style={{ display: "flex", gap: "5px" }}>
          {current.map(
            (current): JSX.Element => (
              <div key={current.code} style={{ border: "2px black solid" }}>
                <p>{current.name}</p>
                <button onClick={() => killHero(current.name)}>
                  Send to coffin
                </button>
              </div>
            )
          )}
        </div>
        <h3>The Fallen:</h3>
        <ul>
          {fallen.map(
            (fallenHero): JSX.Element => (
              <FallenHero key={fallenHero.code} name={fallenHero.name} />
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default FallenHeroes;
