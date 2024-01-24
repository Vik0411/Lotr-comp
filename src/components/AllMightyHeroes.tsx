import { SectionHeader } from "./atoms/typography";
import { ButtonShadow } from "./atoms/ButtonShadow";
import { LotrContext } from "../context";
import React, { useEffect, useState } from "react";

import { filterHeroes, modalText } from "../utils";
import { Hero } from "../types";
import { SelectFfgHero } from "./atoms/SelectFfgHero";
import { styled } from "styled-components";
import { onlyMultiples } from "../dataHelpers";
import { Container } from "./atoms/Containers";

export const ButtonShadowGreen = styled(ButtonShadow)`
  opacity: 1;
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

  const [cloneModal, setCloneModal] = useState(false);
  const [cloneModalAction, setCloneModalAction] = useState(null);

  const [preparedHero, setPreparedHero] = useState(notCurrentAndAlive[0]);

  function handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const selectedHero = campaign.allHeroes.find(
      (hero) => hero.code === e.target.value
    );
    if (selectedHero) {
      setPreparedHero(selectedHero);
    }
  }

  function procede() {
    setCampaign({
      ...campaign,
      allHeroes: campaign.allHeroes.map((hero) => {
        if (hero.code === cloneModalAction.hero.code) {
          hero.current = true;
          return hero;
        } else {
          return hero;
        }
      }),
    });
    setCloneModal(false);
  }

  function doNotProceed() {
    setCloneModal(false);
  }

  function prepareHero(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // before preparing a hero with same name as already prepared, get a confirmation to do so
    let selectedHeroAsObjectOldName = onlyMultiples.find(
      (hero) => hero.code === preparedHero.code
    );
    let multiplesWithUnchangedName = onlyMultiples.filter(
      (hero) => hero.name === selectedHeroAsObjectOldName?.name
    );
    let codes = multiplesWithUnchangedName.map((hero) => hero.code);
    let multiplesInCurrentState = campaign.allHeroes.filter((hero) =>
      codes.includes(hero.code)
    );
    let isOneDuplicatePrepared = multiplesInCurrentState.find(
      (hero) => hero.current === true
    );

    if (codes.includes(preparedHero.code) && isOneDuplicatePrepared) {
      setCloneModal(true);
      setCloneModalAction({ activity: "prepare", hero: preparedHero });
    } else {
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
    <div style={{ position: "relative" }}>
      {cloneModal && (
        <Container
          style={{
            boxShadow: "10px 5px 5px #452c63",
            height: "200px",
            backgroundImage: `url("images/background.jpg")`,
            width: "400px",
            position: "absolute",
            display: "flex",
            top: "20px",
            border: "1px solid #ba55d3",
            borderRadius: "10px",
          }}
        >
          <p
            style={{
              color: "white",
              opacity: "1",
              justifyContent: "space-around",
              marginTop: "40px",
            }}
          >
            {modalText}
          </p>
          <div
            style={{
              position: "absolute",
              bottom: "5px",
              justifyContent: "space-around",
            }}
          >
            <ButtonShadow
              className="yes-btn"
              style={{ opacity: 1, height: "10px" }}
              onClick={() => procede()}
            >
              Yes
            </ButtonShadow>
            <ButtonShadow
              className="no-btn"
              style={{ opacity: 1, height: "10px" }}
              onClick={() => doNotProceed()}
            >
              No
            </ButtonShadow>
          </div>
        </Container>
      )}
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
