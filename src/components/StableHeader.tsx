import { Link, useLocation } from "react-router-dom";
import { AppDescription } from "./atoms/typography";

import { filterHeroes } from "../utils";
import React, { useCallback } from "react";
import { LotrContext } from "../context";
import { Hero } from "../types";
import { Container, ContainerFlex } from "./atoms/Containers";
import { styled } from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import ScenarioTitle from "./ScenarioTitle";
import HeroesShorthand from "./HeroesShorthand";
import BBShorthand from "./BBShorthand";

const StyledLink = styled(Link)`
  color: grey;
  text-decoration: none;

  &:hover {
    color: #5c3366;
  }

  @media (max-width: 1024px) {
    margin: 0px 20px;
  }

  @media (min-width: 1500px) {
    font-size: 40px;
  }
`;

const ContainerFlexWholeHeader = styled(ContainerFlex)`
  justify-content: center;
  gap: 150px;

  @media (max-width: 1300px) {
    gap: 50px;
    justify-content: right;
    margin-right: 20px;
  }

  @media (max-width: 768px) {
    justify-content: center;
    gap: 0px;
  }
`;

function StableHeader() {
  const { campaign } = React.useContext(LotrContext);
  const current: Hero[] = filterHeroes(
    { alive: true, current: true },
    campaign.allHeroes
  );

  const isHeroMngt = useLocation().pathname.includes("hero");
  const chosenCurrentScenario = campaign.scenarios.find(
    (chosen) => chosen.current
  );

  const getBoons = useCallback(() => {
    return campaign.boonsAndBurdens.boons;
  }, [campaign.boonsAndBurdens.boons]);

  const burdens = campaign.boonsAndBurdens.burdens;

  const appNamePxs = chosenCurrentScenario ? "175px" : "100px";
  const colorsHeroMngt = isHeroMngt ? "#5c3366" : "grey";
  const colorsCampMngt = isHeroMngt ? "grey" : "#5c3366";

  const hasCampaignBoons = campaign.boonsAndBurdens.boons.length !== 0;
  const hasCampaignBurdens = campaign.boonsAndBurdens.burdens.length !== 0;
  const hasCampaignBoonsAndBurdens = hasCampaignBoons || hasCampaignBurdens;

  return (
    <Container
      style={{
        backgroundAttachment: "revert",
        backgroundPosition: "bottom",
        position: "relative",
        backgroundImage: `url("images/background.jpg")`,
        borderBottom: "3px solid #452c63",
      }}
    >
      <AnimatePresence>
        {chosenCurrentScenario && <ScenarioTitle {...chosenCurrentScenario} />}
      </AnimatePresence>
      <ContainerFlexWholeHeader style={{ height: "130px" }}>
        {current.length !== 0 && <HeroesShorthand current={current} />}
        {hasCampaignBoonsAndBurdens && (
          <BBShorthand getBoons={getBoons} burdens={burdens} />
        )}
        <h2>
          <motion.div whileHover={{ scale: 1.2 }}>
            <StyledLink style={{ color: colorsCampMngt }} to="/">
              Campaign management
            </StyledLink>
          </motion.div>
        </h2>
        <h2>
          <motion.div whileHover={{ scale: 1.2 }}>
            <StyledLink
              to="/hero"
              style={{
                color: colorsHeroMngt,
                width: "100px",
              }}
            >
              Hero management
            </StyledLink>
          </motion.div>
        </h2>
        <AppDescription style={{ top: appNamePxs, textAlign: "center" }}>
          tool for The Lord of the Rings, LCG
        </AppDescription>
      </ContainerFlexWholeHeader>
    </Container>
  );
}

export default StableHeader;
