import { Header, Subheader } from "./atoms/typography";
import { Button } from "./atoms/Button";
import { LotrContext } from "../context";
import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { onlyHeroesFFG } from "../onlyHeroes";

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

  const [preparedHeroCode, setPreparedHeroCode] = useState(
    notCurrentAndAlive[0]?.code
  );

  function filterAlive() {
    return campaign.allHeroes.filter((hero) => hero.alive === true);
  }
  function filterNotCurrentAlive() {
    return alive.filter((hero) => hero.current !== true);
  }

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const desiredCode = onlyHeroesFFG.find(
      (hero) => hero.name === e.target.value
    ).code;
    setPreparedHeroCode(desiredCode);
  }

  function prepareHero(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let allOtherHeroes = campaign.allHeroes.filter(
      (hero) => hero.code !== preparedHeroCode
    );

    let preparedHeroAsObject = onlyHeroesFFG.find(
      (hero) => hero.code === preparedHeroCode
    );
    setCampaign({
      allHeroes: [
        ...allOtherHeroes,
        {
          ...preparedHeroAsObject,
          alive: true,
          current: true,
        },
      ],
    });
  }

  useEffect(() => {
    let notCurrentAndAlive = filterNotCurrentAlive();
    setPreparedHeroCode(notCurrentAndAlive[0].code);
    localStorage.setItem("campaign", JSON.stringify(campaign));
  }, [campaign]);

  return (
    <div>
      <form onSubmit={prepareHero}>
        <select value={preparedHeroCode} onChange={handleChange}>
          {notCurrentAndAlive.map((notCurrent) => (
            <option key={notCurrent.code}>{notCurrent.name}</option>
          ))}
        </select>
        <button type="submit">Prepare</button>
      </form>
    </div>
  );
}

export default AllMightyHeroes;
