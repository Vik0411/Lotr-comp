import { Header, Subheader } from "./atoms/typography";
import { Button } from "./atoms/Button";
import { LotrContext } from "../context";
import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { filterHeroes } from "../utils";

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
  let notCurrentAndAlive = filterHeroes(
    { alive: true, current: false },
    campaign.allHeroes
  );

  const [preparedHero, setPreparedHero] = useState(notCurrentAndAlive[0]);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    //all commented code below is for alt solution with non-unique names, and a workaroud therefore

    const selectedHero = campaign.allHeroes.find(
      (hero) => hero.code === e.target.value
    );
    setPreparedHero(selectedHero);
  }

  function prepareHero(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(preparedHero.code, "lazar");

    // before preparing hero, alert user if there is already the same hero in current

    setCampaign({
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

  /* old alt version for select when names were not unique
  <option key={notCurrent.code}>
    {notCurrent.name + " (" + notCurrent.code + ")"}
  </option>
))}
*/
  return (
    <div>
      <form onSubmit={prepareHero}>
        <select value={preparedHero.code} onChange={handleChange}>
          {notCurrentAndAlive.map((notCurrent) => (
            <option key={notCurrent.code} value={notCurrent.code}>
              {notCurrent.name}
            </option>
          ))}
        </select>
        {/* <h1>hellooo</h1> */}
        <button type="submit">Prepare</button>
      </form>
    </div>
  );
}

export default AllMightyHeroes;
