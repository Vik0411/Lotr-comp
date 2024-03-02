import { LotrContext } from "../context";
import React, { useState } from "react";
import styled from "styled-components";
import { ButtonShadow } from "./atoms/ButtonShadow";
import { onlyMultiples } from "../data/dataAdjustments";
import { filterHeroes } from "../utils";
import { Hero } from "../types";
import { Paragraph } from "./atoms/typography";
import { ContainerCurrentCard, ContainerFlex } from "./atoms/Containers";
import { HeroCard } from "./atoms/HeroCard";
import { CancelImage } from "./atoms/CancelImage";
import { CancelBtn } from "./atoms/CancelBtn";
import ConfirmationModal from "./ConfirmModal";
import AninamtedPage from "./AnimatedPage";

const ContainerCurrentHeroes = styled(ContainerFlex)`
  display: flex;
  gap: 100px;
  margin: 30px 30px;
  flex-direction: row;
`;

export const ButtonBlack = styled(ButtonShadow)`
  box-shadow: none;
  position: absolute;
  bottom: 10px;
  left: 5px;
  transition: all 0.15s;
`;

function CurrentHeroes() {
  const { campaign, setCampaign } = React.useContext(LotrContext);

  const [cloneModal, setCloneModal] = useState(false);
  const [cloneModalAction, setCloneModalAction] = useState(null);

  const current = filterHeroes(
    { alive: true, current: true },
    campaign.allHeroes
  );

  function procede() {
    setCampaign({
      ...campaign,
      allHeroes: campaign.allHeroes.map((hero) => {
        if (hero.code === cloneModalAction.hero.code) {
          hero.current = false;
          hero.alive = false;
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

  function killHero(heroCode: string) {
    // confirmation when one "duplicate" is already killed
    const killedHeroAsObjectOldName = onlyMultiples.find(
      (hero) => hero.code === heroCode
    );
    const multiplesWithUnchangedName = onlyMultiples.filter(
      (hero) => hero.name === killedHeroAsObjectOldName?.name
    );
    const codes = multiplesWithUnchangedName.map((hero) => hero.code);
    const multiplesInCurrentState = campaign.allHeroes.filter((hero) =>
      codes.includes(hero.code)
    );
    const isOneDuplicateDead = multiplesInCurrentState.find(
      (hero) => hero.alive === false
    );

    if (codes.includes(heroCode) && isOneDuplicateDead) {
      setCloneModal(true);
      setCloneModalAction({
        hero: campaign.allHeroes.find((hero) => hero.code === heroCode),
      });
    } else {
      setCampaign({
        ...campaign,
        allHeroes: campaign.allHeroes.map((hero) => {
          if (hero.code === heroCode) {
            hero.alive = false;
            hero.current = false;
            return hero;
          } else {
            return hero;
          }
        }),
      });
    }
  }

  function returnHero(heroCode: string) {
    setCampaign({
      ...campaign,
      allHeroes: campaign.allHeroes.map((hero) => {
        if (hero.code === heroCode) {
          hero.alive = true;
          hero.current = false;
          return hero;
        } else {
          return hero;
        }
      }),
    });
  }

  const modalText =
    "At least one hero with the same name is already dead. Are you sure you want to proceed?";

  return (
    <div
      style={{
        minHeight: "400px",
        position: "relative",
      }}
    >
      {cloneModal && (
        <ConfirmationModal
          procede={procede}
          doNotProceed={doNotProceed}
          modalText={modalText}
        />
      )}
      <ContainerCurrentHeroes>
        {current.map(
          (current: Hero): JSX.Element => (
            <ContainerCurrentCard key={current.code} style={{ width: "250px" }}>
              <AninamtedPage>
                <div style={{ position: "relative" }}>
                  <Paragraph>
                    {current.name}
                    <CancelBtn onClick={() => returnHero(current.code)}>
                      <CancelImage
                        alt=""
                        src="images/cancel-1.png"
                      ></CancelImage>
                    </CancelBtn>
                  </Paragraph>
                  <HeroCard alt="" src={`images/${current.imagesrc}`} />
                  <ButtonBlack onClick={() => killHero(current.code)}>
                    Kill
                  </ButtonBlack>
                </div>
              </AninamtedPage>
            </ContainerCurrentCard>
          )
        )}
      </ContainerCurrentHeroes>
    </div>
  );
}

export default CurrentHeroes;
