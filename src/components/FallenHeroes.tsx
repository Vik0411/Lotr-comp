import { LotrContext } from "../context";
import React from "react";
import { Input } from "./atoms/Input";
import styled from "styled-components";
import { Button } from "./atoms/Button";

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
  function filterFallen() {
    return campaign.allHeroes.filter((hero) => hero.alive === false);
  }

  function filterAlive() {
    return campaign.allHeroes.filter((hero) => hero.alive === true);
  }
  function killHero(heroName) {
    let allOtherHeroes = campaign.allHeroes.filter(
      (hero) => hero.name !== heroName
    );
    console.log(allOtherHeroes);
    setCampaign({
      allHeroes: [
        ...allOtherHeroes,
        { name: heroName, alive: false, current: false },
      ],
    });

    localStorage.setItem("campaign", JSON.stringify(campaign));
  }
  let fallen = filterFallen();
  let alive = filterAlive();

  return (
    <div>
      <div>
        <h2>Current heroes</h2>
        <div style={{ display: "flex", gap: "5px" }}>
          {alive.map(
            (aliveHero): JSX.Element => (
              <div key={aliveHero.name} style={{ border: "2px black solid" }}>
                <p>{aliveHero.name}</p>
                <button onClick={() => killHero(aliveHero.name)}>
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
              <div key={fallenHero.name}>
                <p>{fallenHero.name}</p>
              </div>
            )
          )}
        </ul>
      </div>
    </div>
  );
}

export default FallenHeroes;
