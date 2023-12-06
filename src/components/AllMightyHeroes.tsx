import { Header, Subheader } from "./atoms/typography";
import { Button } from "./atoms/Button";
import { LotrContext } from "../context";
import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { onlyHeroesFFG } from "../onlyHeroes";
import { onlyMultiples } from "../dataHelpers";
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

  const [preparedHeroName, setPreparedHeroName] = useState(
    notCurrentAndAlive[0]?.name
  );

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    //all commented code below is for alt solution with non-unique names, and a workaroud therefore

    /*
    function myGeeks(string) {
      // Using match with regEx
      let matches = string.match(/(\d+)/);

      // Display output if number extracted
      if (matches) {
        return matches[0];
      }
    }

    let num = myGeeks(e.target.value);
    setPreparedHeroCode(num);
    console.log("preparedHero", preparedHeroCode);
    */

    /*
    const desiredCode = onlyHeroesFFG.find(
      (hero) => hero.name === e.target.value
    ).code;
    setPreparedHeroName(desiredCode);
    */

    setPreparedHeroName(e.target.value);
  }

  function prepareHero(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let allOtherHeroes = campaign.allHeroes.filter(
      (hero) => hero.name !== preparedHeroName
    );

    let preparedHeroAsObject = campaign.allHeroes.find(
      (hero) => hero.name === preparedHeroName
    );

    /* code for disabling possibility of "preparing" more than one "duplicate"
    if (onlyMultiples.includes(preparedHeroAsObject.code)) {
      let mltps = campaign.allHeroes.filter(
        (hero) => hero.name === preparedHeroAsObject.name
      );
      mltps.forEach((hero) => (hero.current = true));
    }
*/
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
    let notCurrentAndAlive = filterHeroes(
      { alive: true, current: false },
      campaign.allHeroes
    );
    setPreparedHeroName(notCurrentAndAlive[0].name);
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
        <select value={preparedHeroName} onChange={handleChange}>
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
