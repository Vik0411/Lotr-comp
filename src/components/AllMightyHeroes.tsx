import { SectionHeader } from "./atoms/typography";
import { ButtonShadow } from "./atoms/Button";
import { LotrContext } from "../context";
import React, { useEffect, useState } from "react";

import { filterHeroes } from "../utils";
import { Hero } from "../types";
import { SelectFfgHero } from "./atoms/SelectFfgHero";
import { styled } from "styled-components";

export const ButtonShadowGreen = styled(ButtonShadow)`
  &:not([disabled]):active {
    box-shadow: #90ee90 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;

function AllMightyHeroes() {
  const { campaign, setCampaign } = React.useContext(LotrContext);
  let notCurrentAndAlive = filterHeroes(
    { alive: true, current: false },
    campaign.allHeroes
  );

  const [preparedHero, setPreparedHero] = useState(notCurrentAndAlive[0]);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedHero = campaign.allHeroes.find(
      (hero) => hero.code === e.target.value
    );
    if (selectedHero) {
      setPreparedHero(selectedHero);
    }
  }

  function prepareHero(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // before preparing hero, alert user if there is already the same hero in current

    setCampaign({
      ...campaign,
      allHeroes: campaign.allHeroes.map((hero) => {
        if (hero.code === preparedHero.code) {
          hero.current = true;
          return hero;
        } else {
          return hero;
        }
      }),
    });
  }

  useEffect(() => {
    let notCurrentAndAlive = filterHeroes(
      { alive: true, current: false },
      campaign.allHeroes
    );
    setPreparedHero(notCurrentAndAlive[0]);
    localStorage.setItem("campaign", JSON.stringify(campaign));
  }, [campaign]);

  return (
    <div>
      <SectionHeader>Add to Current Campaign</SectionHeader>
      <form onSubmit={prepareHero}>
        <SelectFfgHero value={preparedHero.code} onChange={handleChange}>
          {notCurrentAndAlive.map((notCurrent: Hero) => (
            <option key={notCurrent.code} value={notCurrent.code}>
              {notCurrent.name}
            </option>
          ))}
        </SelectFfgHero>
        <ButtonShadowGreen type="submit">Prepare</ButtonShadowGreen>
      </form>
    </div>
  );
}

export default AllMightyHeroes;
