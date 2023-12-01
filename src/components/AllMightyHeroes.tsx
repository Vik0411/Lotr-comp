import { Header, Subheader } from "./atoms/typography";
import { Button } from "./atoms/Button";
import { LotrContext } from "../context";
import React, { useEffect, useState } from "react";

import styled from "styled-components";

const SubheaderListAll = styled(Subheader)`
  background-color: ${({ theme }) => theme.colors.basicBlack};
  color: ${({ theme }) => theme.colors.vanSaarGrey};
  margin-top: 20px;
`;

const HeaderListAll = styled(Header)`
  background-color: ${({ theme }) => theme.colors.basicBlack};
`;

const ListAllBtn = styled(Button)`
  background-color: ${({ theme }) => theme.colors.basicWhite};
  // positioning because I want the button to be displayed on top and up
  position: absolute;
`;

function AllMightyHeroes() {
  const { campaign, setCampaign } = React.useContext(LotrContext);
  let alive = filterAlive();
  let notCurrentAndAlive = filterNotCurrentAlive();
  const [preparedHero, setPreparedHero] = useState(notCurrentAndAlive[0]?.name);

  function filterAlive() {
    return campaign.allHeroes.filter((hero) => hero.alive === true);
  }
  function filterNotCurrentAlive() {
    return alive.filter((hero) => hero.current !== true);
  }

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setPreparedHero(e.target.value);
  }
  function prepareHero(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let allOtherHeroes = campaign.allHeroes.filter(
      (hero) => hero.name !== preparedHero
    );

    setCampaign({
      allHeroes: [
        ...allOtherHeroes,
        { name: preparedHero, alive: true, current: true },
      ],
    });
    localStorage.setItem("campaign", JSON.stringify(campaign));
  }

  useEffect(() => {
    let notCurrentAndAlive = filterNotCurrentAlive();
    setPreparedHero(notCurrentAndAlive[0].name);
  }, [campaign]);

  return (
    <div>
      <form onSubmit={prepareHero}>
        <select value={preparedHero} onChange={handleChange}>
          {notCurrentAndAlive.map((notCurrent) => (
            <option key={notCurrent.name}>{notCurrent.name}</option>
          ))}
        </select>
        <button type="submit">Prepare</button>
      </form>
    </div>
  );
}

export default AllMightyHeroes;
