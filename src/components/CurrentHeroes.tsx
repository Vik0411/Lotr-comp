import { LotrContext } from "../context";
import React from "react";
import { Input } from "./atoms/Input";
import styled from "styled-components";
import { Button } from "./atoms/Button";
import { onlyMultiplesOtherwise } from "../dataHelpers";
import { filterHeroes } from "../utils";
import { Hero } from "../types";

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

function CurrentHeroes() {
  const { campaign, setCampaign } = React.useContext(LotrContext);

  let current: Hero[] = filterHeroes(
    { alive: true, current: true },
    campaign.allHeroes
  );

  function killHero(heroCode: string) {
    // add alert when one "duplicate" is already killed
    let killedHeroAsObjectOldName = onlyMultiplesOtherwise.find(
      (hero) => hero.code === heroCode
    );
    let multiplesWithUnchangedName = onlyMultiplesOtherwise.filter(
      (hero) => hero.name === killedHeroAsObjectOldName?.name
    );
    let codes = multiplesWithUnchangedName.map((hero) => hero.code);
    let multiplesInCurrentState = campaign.allHeroes.filter((hero) =>
      codes.includes(hero.code)
    );
    let isOneDuplicateDead = multiplesInCurrentState.find(
      (hero) => hero.alive === false
    );

    setCampaign({
      allHeroes: campaign.allHeroes.map((hero) => {
        if (hero.code === heroCode) {
          if (codes.includes(heroCode) && isOneDuplicateDead) {
            alert("The hero comes in clones. Do you want to procede?");
          }
          hero.alive = false;
          hero.current = false;
          return hero;
        } else {
          return hero;
        }
      }),
    });
  }

  // refactor return below into styled components as well
  return (
    <div
      style={{
        color: "white",
        border: "20px solid white",
      }}
    >
      <div>
        <h2
          style={{
            color: "white",
          }}
        >
          Current heroes:
        </h2>
        <div style={{ display: "flex", gap: "5px" }}>
          {current.map(
            (current: Hero): JSX.Element => (
              <div
                key={current.code}
                style={{
                  border: "5px black solid",
                  backgroundSize: "cover",
                  color: "white",
                  width: "25%",
                  minHeight: "400px",
                  backgroundImage: `url(${require(`../images/${current.imagesrc}`)})`,
                }}
              >
                <p>{current.name}</p>
                <button onClick={() => killHero(current.code)}>
                  Send to coffin
                </button>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default CurrentHeroes;
