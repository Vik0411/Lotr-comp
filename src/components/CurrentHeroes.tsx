import { LotrContext } from "../context";
import React, { useState } from "react";
import styled from "styled-components";
import { ButtonShadow } from "./atoms/ButtonShadow";
import { onlyMultiples } from "../dataHelpers";
import { filterHeroes, modalText } from "../utils";
import { Hero } from "../types";
import { Paragraph, SectionHeader } from "./atoms/typography";
import {
  Container,
  ContainerCurrentCard,
  ContainerFlex,
} from "./atoms/Containers";
import { HeroCard } from "./atoms/HeroCard";
import { CancelImage } from "./atoms/CancelImage";
import { CancelBtn } from "./atoms/CancelBtn";

const TopHeader = styled(SectionHeader)`
  margin: 30px 30px;
`;

const ContainerCurrentHeroes = styled(ContainerFlex)`
  display: flex;
  gap: 15px;
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

  let current: Hero[] = filterHeroes(
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
    let killedHeroAsObjectOldName = onlyMultiples.find(
      (hero) => hero.code === heroCode
    );
    let multiplesWithUnchangedName = onlyMultiples.filter(
      (hero) => hero.name === killedHeroAsObjectOldName?.name
    );
    let codes = multiplesWithUnchangedName.map((hero) => hero.code);
    let multiplesInCurrentState = campaign.allHeroes.filter((hero) =>
      codes.includes(hero.code)
    );
    let isOneDuplicateDead = multiplesInCurrentState.find(
      (hero) => hero.alive === false
    );

    if (codes.includes(heroCode) && isOneDuplicateDead) {
      setCloneModal(true);
      setCloneModalAction({
        activity: "kill",
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

  return (
    <div
      style={{
        minHeight: "300px",
        position: "relative",
      }}
    >
      {cloneModal && (
        <Container
          style={{
            boxShadow: "10px 5px 5px  #452c63",
            backgroundImage: `url("images/background.jpg")`,
            height: "200px",
            width: "400px",
            position: "absolute",
            left: "765px",
            zIndex: "50",
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
              bottom: "20px",
              left: "130px",
              justifyItems: "center",
            }}
          >
            <ButtonShadow
              style={{ opacity: 1, height: "10px" }}
              onClick={() => procede()}
            >
              Yes
            </ButtonShadow>
            <ButtonShadow
              style={{ opacity: 1, height: "10px" }}
              onClick={() => doNotProceed()}
            >
              No
            </ButtonShadow>
          </div>
        </Container>
      )}
      <TopHeader>Current heroes:</TopHeader>
      <ContainerCurrentHeroes>
        {current.map(
          (current: Hero): JSX.Element => (
            <ContainerCurrentCard key={current.code} style={{ width: "250px" }}>
              <div style={{ position: "relative" }}>
                <Paragraph>
                  {current.name}
                  <CancelBtn onClick={() => returnHero(current.code)}>
                    <CancelImage alt="" src="images/cancel-1.png"></CancelImage>
                  </CancelBtn>
                </Paragraph>
                <HeroCard alt="" src={`images/${current.imagesrc}`} />
                <ButtonBlack onClick={() => killHero(current.code)}>
                  Kill Hero
                </ButtonBlack>
              </div>
            </ContainerCurrentCard>
          )
        )}
      </ContainerCurrentHeroes>
    </div>
  );
}

export default CurrentHeroes;
