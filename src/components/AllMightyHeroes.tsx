import { ButtonShadow } from "./atoms/ButtonShadow";
import { LotrContext } from "../context";
import React, { useEffect, useState } from "react";

import { filterHeroes, saveCampaign } from "../utils";
import { Hero } from "../types";
import { BlackSelect } from "./atoms/BlackSelect";
import { styled } from "styled-components";
import { onlyMultiples } from "../data/dataAdjustments";
import ConfirmationModal from "./ConfirmModal";
import { motion } from "framer-motion";

export const ButtonShadowGreen = styled(ButtonShadow)`
  opacity: 1;
  &:not([disabled]):active {
    box-shadow: #90ee90 2px 2px 0 0, #000 2px 2px 0 1px;
    transform: translate(2px, 2px);
  }
`;

function AllMightyHeroes() {
  const { campaign, setCampaign } = React.useContext(LotrContext);
  const notCurrentAndAlive = filterHeroes(
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

  function proceed() {
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

    // before preparing a hero with same name as already prepared,
    // get a confirmation to do so
    const selectedHeroAsObjectOldName = onlyMultiples.find(
      (hero) => hero.code === preparedHero.code
    );
    const multiplesWithUnchangedName = onlyMultiples.filter(
      (hero) => hero.name === selectedHeroAsObjectOldName?.name
    );
    const codes = multiplesWithUnchangedName.map((hero) => hero.code);
    const multiplesInCurrentState = campaign.allHeroes.filter((hero) =>
      codes.includes(hero.code)
    );
    const isOneDuplicatePrepared = multiplesInCurrentState.find(
      (hero) => hero.current === true
    );

    if (codes.includes(preparedHero.code) && isOneDuplicatePrepared) {
      setCloneModal(true);
      setCloneModalAction({ hero: preparedHero });
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
    const notCurrentAndAlive = filterHeroes(
      { alive: true, current: false },
      campaign.allHeroes
    );
    setPreparedHero(notCurrentAndAlive[0]);
    saveCampaign({ ...campaign, allHeroes: campaign.allHeroes });
  }, [campaign]);

  const modalText =
    "At least one hero with the same name is already prepared. Are you sure you want to proceed?";

  return (
    <div style={{ position: "relative", textAlign: "center" }}>
      {cloneModal && (
        <ConfirmationModal
          proceed={proceed}
          doNotProceed={doNotProceed}
          modalText={modalText}
        />
      )}
      <form name="heroprep" onSubmit={prepareHero}>
        <BlackSelect
          as={motion.select}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          value={preparedHero.code}
          onChange={handleChange}
          name="hero"
        >
          {notCurrentAndAlive.map((notCurrent: Hero) => (
            <option key={notCurrent.code} value={notCurrent.code}>
              {notCurrent.name}
            </option>
          ))}
        </BlackSelect>
        <ButtonShadowGreen
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
          type="submit"
        >
          Prepare
        </ButtonShadowGreen>
      </form>
    </div>
  );
}

export default AllMightyHeroes;
