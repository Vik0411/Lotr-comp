import { Link, useLocation } from "react-router-dom";
import { ButtonTransparent } from "./atoms/ButtonTransparent";
import { AppDescription, SectionHeader } from "./atoms/typography";

import { filterHeroes } from "../utils";
import React from "react";
import { LotrContext } from "../context";
import { Hero } from "../types";
import { Container, ContainerFlex } from "./atoms/Containers";
import { styled } from "styled-components";
import { ListItemHeader } from "./atoms/ListeItemHeader";
import { AnimatePresence, motion } from "framer-motion";
import { animations } from "./AnimatedPage";

const StyledLink = styled(Link)`
  color: grey;
  text-decoration: none;

  &:hover {
    color: #5c3366;
  }

  @media (max-width: 1024px) {
    margin: 0px 20px;
  }
`;

const ContainerFlexHeader = styled(ContainerFlex)`
  width: 200px;
  position: absolute;
  left: 0px;
  top: 5px;
  flex-flow: row;

  @media (max-width: 880px) {
    display: none;
  }

  @media (max-width: 1470px) {
    top: 74px;
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

const BorBShorthand = styled.div`
  width: 160px;
  position: absolute;
  left: 160px;
  top: 5px;

  @media (max-width: 880px) {
    display: none;
  }

  @media (max-width: 1470px) {
    top: 74px;
    font-size: 15px;
  }
`;

function StableHeader() {
  const { campaign } = React.useContext(LotrContext);
  const current: Hero[] = filterHeroes(
    { alive: true, current: true },
    campaign.allHeroes
  );

  const inHeroMgnt = useLocation().pathname.includes("hero");
  const chosenCurrentScenario = campaign.scenarios.find(
    (chosen) => chosen.current === true
  );

  const appNamePxs = chosenCurrentScenario ? "100px" : "50px";

  return (
    <Container
      style={{
        // backgroundAttachment: "revert",
        backgroundPosition: "bottom",
        position: "relative",
        backgroundImage: `url("images/background.jpg")`,
        borderBottom: "3px solid #452c63",
      }}
    >
      <AnimatePresence>
        {chosenCurrentScenario && (
          <motion.div
            exit={{ opacity: 0 }}
            variants={animations}
            initial="initial"
            animate="animate"
            transition={{ duration: 0.6 }}
          >
            <SectionHeader
              style={{
                marginBottom: "0px",
                color: "#B8B8B8",
                outlineColor: "purple",
                textDecorationColor: "#FF00FF",
                textDecoration: "underline",
                textAlign: "center",
              }}
            >
              Current Scenario: {chosenCurrentScenario.name}
            </SectionHeader>
          </motion.div>
        )}
      </AnimatePresence>
      <ContainerFlexWholeHeader style={{ height: "130px" }}>
        {current.length !== 0 && (
          <ContainerFlexHeader>
            <AnimatePresence>
              <motion.div
                className="heroes"
                style={{
                  width: "100px",
                }}
                exit={{ opacity: 0 }}
                initial={{ x: -1000 }}
                animate={{ x: 0 }}
              >
                <ButtonTransparent
                  style={{
                    color: "grey",
                    borderBottom: "10px",
                  }}
                >
                  <SectionHeader
                    style={{
                      color: "grey",
                      borderBottom: "10px",
                      fontSize: "30px",
                    }}
                  >
                    Current Heroes
                  </SectionHeader>
                  {current.map((hero) => (
                    <ListItemHeader
                      style={{ margin: "0px 0px" }}
                      key={hero.code}
                    >
                      {hero.name}
                    </ListItemHeader>
                  ))}
                </ButtonTransparent>
              </motion.div>
            </AnimatePresence>
          </ContainerFlexHeader>
        )}
        {(campaign.boonsAndBurdens.boons.length !== 0 ||
          campaign.boonsAndBurdens.burdens.length !== 0) && (
          <BorBShorthand>
            <motion.div initial={{ x: 1000 }} animate={{ x: 0 }}>
              <ButtonTransparent style={{ color: "grey", marginLeft: "40px" }}>
                <SectionHeader
                  style={{
                    color: "grey",
                    fontSize: "30px",
                  }}
                >
                  Boons & Burdens
                </SectionHeader>
                {campaign.boonsAndBurdens.boons.map((boon) => (
                  <ListItemHeader
                    style={{ margin: "0px 0px" }}
                    key={boon.index}
                  >
                    {boon.name}
                  </ListItemHeader>
                ))}
                {campaign.boonsAndBurdens.burdens.map((burden) => (
                  <ListItemHeader
                    style={{ margin: "0px 0px" }}
                    key={burden.index}
                  >
                    {burden.name}
                  </ListItemHeader>
                ))}
              </ButtonTransparent>
            </motion.div>
          </BorBShorthand>
        )}
        {inHeroMgnt ? (
          <h2>
            <motion.div whileHover={{ scale: 1.2 }}>
              <StyledLink to="/">Campaign management</StyledLink>
            </motion.div>
          </h2>
        ) : (
          <h2>
            <motion.div whileHover={{ scale: 1.2 }}>
              <StyledLink style={{ color: "#5c3366" }} to="/">
                Campaign management
              </StyledLink>
            </motion.div>
          </h2>
        )}
        {inHeroMgnt ? (
          <h2>
            <motion.div whileHover={{ scale: 1.2 }}>
              <StyledLink
                to="/hero"
                style={{ color: "#5c3366", width: "100px" }}
              >
                Hero management
              </StyledLink>
            </motion.div>
          </h2>
        ) : (
          <h2>
            <motion.div whileHover={{ scale: 1.2 }}>
              <StyledLink to="/hero" style={{ width: "100px" }}>
                Hero management
              </StyledLink>
            </motion.div>
          </h2>
        )}

        <AppDescription style={{ top: appNamePxs }}>
          tool for The Lord of the Rings, LCG
        </AppDescription>
      </ContainerFlexWholeHeader>
    </Container>
  );
}

export default StableHeader;
