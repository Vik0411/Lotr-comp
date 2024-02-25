import { Link, useLocation } from "react-router-dom";
import { ButtonTransparent } from "./atoms/ButtonTransparent";
import { SectionHeader } from "./atoms/typography";

import { filterHeroes } from "../utils";
import React from "react";
import { LotrContext } from "../context";
import { Hero } from "../types";
import { Container, ContainerFlex } from "./atoms/Containers";
import { styled } from "styled-components";
import { ListItemHeader } from "./atoms/ListeItemHeader";

const StyledLink = styled(Link)`
  color: grey;
  text-decoration: none;

  &:hover {
    color: #ba55d3;
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
    top: 60px;
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
    gap: 10px;
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
    top: 60px;
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

  return (
    <Container
      style={{
        backgroundPosition: "bottom",
        position: "relative",
        backgroundImage: `url("images/background.jpg")`,
        borderBottom: "3px solid #452c63",
      }}
    >
      {chosenCurrentScenario && (
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
      )}
      <ContainerFlexWholeHeader style={{ height: "120px" }}>
        <ContainerFlexHeader>
          <div
            className="heroes"
            style={{
              width: "100px",
            }}
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
                <ListItemHeader key={hero.code}>{hero.name}</ListItemHeader>
              ))}
            </ButtonTransparent>
          </div>
        </ContainerFlexHeader>
        <BorBShorthand>
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
              <ListItemHeader key={boon.index}>{boon.name}</ListItemHeader>
            ))}
            {campaign.boonsAndBurdens.burdens.map((burden) => (
              <ListItemHeader key={burden.index}>{burden.name}</ListItemHeader>
            ))}
          </ButtonTransparent>
        </BorBShorthand>
        {inHeroMgnt ? (
          <h2>
            <StyledLink to="/">Campaign management</StyledLink>
          </h2>
        ) : (
          <h2>
            <StyledLink style={{ color: "#ba55d3" }} to="/">
              Campaign management
            </StyledLink>
          </h2>
        )}
        {inHeroMgnt ? (
          <h2>
            <StyledLink to="/hero" style={{ color: "#ba55d3", width: "100px" }}>
              Hero management
            </StyledLink>
          </h2>
        ) : (
          <h2>
            <StyledLink to="/hero" style={{ width: "100px" }}>
              Hero management
            </StyledLink>
          </h2>
        )}
      </ContainerFlexWholeHeader>
    </Container>
  );
}

export default StableHeader;
