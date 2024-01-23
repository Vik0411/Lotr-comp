import { Link } from "react-router-dom";
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

export const ContainerFlexHeader = styled(ContainerFlex)`
  width: 200px;
  position: absolute;
  left: 20px;
  top: 5px;
  flex-flow: row;

  @media (max-width: 768px) {
    display: none;
  }
`;

function StableHeader() {
  const { campaign } = React.useContext(LotrContext);
  let current: Hero[] = filterHeroes(
    { alive: true, current: true },
    campaign.allHeroes
  );

  let chosenCurrentScenario = campaign.scenarios.find(
    (chosen) => chosen.current === true
  );

  return (
    <Container
      style={{
        backgroundPosition: "bottom",
        position: "relative",
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
      <ContainerFlex style={{ height: "90px" }}>
        <ContainerFlexHeader>
          <div
            className="heroes"
            style={{
              width: "100px",
            }}
          >
            <ButtonTransparent style={{ color: "grey", borderBottom: "10px" }}>
              <SectionHeader style={{ color: "grey", borderBottom: "10px" }}>
                Current Heroes
              </SectionHeader>
              {current.map((hero) => (
                <ListItemHeader key={hero.name}>{hero.name}</ListItemHeader>
              ))}
            </ButtonTransparent>
          </div>
          <div
            className="bandb"
            style={{
              width: "100px",
            }}
          >
            <ButtonTransparent style={{ color: "grey" }}>
              <SectionHeader style={{ color: "grey" }}>
                Boons & Burdens
              </SectionHeader>
              {campaign.boonsAndBurdens.boons.map((boon) => (
                <ListItemHeader key={boon.name}>{boon.name}</ListItemHeader>
              ))}
              {campaign.boonsAndBurdens.burdens.map((burden) => (
                <ListItemHeader key={burden.name}>{burden.name}</ListItemHeader>
              ))}
            </ButtonTransparent>
          </div>
        </ContainerFlexHeader>
        <div
          style={{
            color: "white",
            display: "flex",
            justifyContent: "space-between",
            gap: "50px",
            marginLeft: "10px",
            marginRight: "10px",
            height: "100px",
          }}
        >
          <h2>
            <StyledLink to="/" style={{ width: "100px" }}>
              Campaign management
            </StyledLink>
          </h2>
          <h2>
            <StyledLink to="/hero" style={{ width: "100px" }}>
              Hero management
            </StyledLink>
          </h2>
        </div>
      </ContainerFlex>
    </Container>
  );
}

export default StableHeader;
