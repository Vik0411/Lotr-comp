import { Header, Subheader } from "./atoms/typography";
import { Button } from "./atoms/Button";
import { LotrContext } from "../context";
import React, { useState } from "react";
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

  function filterAlive() {
    return campaign.allHeroes.filter((hero) => hero.alive === true);
  }
  function filterNotCurrentAlive() {
    return alive.filter((hero) => hero.current !== true);
  }
  function filterCurrentAlive() {
    return alive.filter((hero) => hero.current === true);
  }

  const notCurrentAndAlive = filterNotCurrentAlive();
  const currentAndAlive = filterCurrentAlive();

  const [preparedHero, setPreparedHero] = useState(alive[0]?.name);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    setPreparedHero(e.target.value);
  }

  function prepareHero(e: React.FormEvent<HTMLFormElement>) {
    const preparedToBeAdded = campaign.allHeroes.find(
      (hero) => hero.name === preparedHero
    );
    const namesOfCurrent = currentAndAlive.map((hero) => hero.name);
    if (notCurrentAndAlive[1] === undefined) {
      alert("Your heroes list is empty. Do you want to add new?");
    }
    if (
      notCurrentAndAlive[0] !== undefined &&
      namesOfCurrent.includes(preparedHero)
    ) {
      setPreparedHero(notCurrentAndAlive[0].name);
      notCurrentAndAlive[0].current = true;
      setCampaign({ ...campaign });
    } else {
      preparedToBeAdded!.current = true;
      setCampaign({ ...campaign });
    }
  }

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
