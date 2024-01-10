import { LotrContext } from "../context";
import React from "react";
import styled from "styled-components";
import { ButtonShadow, CancelBtn } from "./atoms/Button";
import { onlyMultiples } from "../dataHelpers";
import { filterHeroes } from "../utils";
import { Hero } from "../types";
import { Paragraph, SectionHeader } from "./atoms/typography";
import { ContainerCurrentCard, ContainerFlex } from "./atoms/Container";
import { HeroCard } from "./atoms/HeroCard";
import { CancelImage } from "./atoms/CancelImage";

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

  let current: Hero[] = filterHeroes(
    { alive: true, current: true },
    campaign.allHeroes
  );

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

    function killClone() {
      const text =
        "At least one hero with the same name is already dead. Are you sure you want to procede?";
      // eslint-disable-next-line no-restricted-globals
      if (confirm(text) === true) {
        return true;
      } else {
        return false;
      }
    }

    if (codes.includes(heroCode) && isOneDuplicateDead) {
      if (!killClone()) {
        return;
      }
    }

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

  // refactor return below into styled components as well
  return (
    <div style={{ minHeight: "300px" }}>
      <div>
        <TopHeader>Current heroes:</TopHeader>
        <ContainerCurrentHeroes>
          {current.map(
            (current: Hero): JSX.Element => (
              <ContainerCurrentCard
                key={current.code}
                style={{ width: "250px" }}
              >
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
                    Kill Hero
                  </ButtonBlack>
                </div>
              </ContainerCurrentCard>
            )
          )}
        </ContainerCurrentHeroes>
      </div>
    </div>
  );
}

export default CurrentHeroes;
