import { Link } from "react-router-dom";
import { ButtonTransparent } from "./atoms/ButtonTransparent";
import { SectionHeader } from "./atoms/typography";

import { filterHeroes } from "../utils";
import React from "react";
import { LotrContext } from "../context";
import { Hero } from "../types";
import { Container } from "./atoms/Containers";
import { styled } from "styled-components";
import { ListItemHeader } from "./atoms/ListeItemHeader";

const StyledLink = styled(Link)`
  color: grey;
  text-decoration: none;

  &:hover {
    color: #ba55d3;
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
      }}
    >
      <div style={{ position: "relative" }}>
        <div
          style={{
            display: "flex",
            flexFlow: "column",
            color: "white",
            textAlign: "center",
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
              }}
            >
              Current Scenario: {chosenCurrentScenario.name}
            </SectionHeader>
          )}
          <div
            style={{
              color: "white",
              display: "flex",
              justifyContent: "center",
              height: "70px",
              width: "auto",
            }}
          >
            <h2>
              <StyledLink to="/" style={{ marginRight: "100px" }}>
                Campaign management
              </StyledLink>
            </h2>
            <h2>
              <StyledLink to="/hero" style={{ marginLeft: "100px" }}>
                Hero management
              </StyledLink>
            </h2>
          </div>
        </div>
        <div>
          <div
            style={{
              position: "absolute",
              width: "100px",
              marginLeft: "100px",
              top: "0",
              opacity: "0.5",
            }}
          >
            <ButtonTransparent style={{ color: "white" }}>
              <SectionHeader style={{ color: "white" }}>
                Current Heroes
              </SectionHeader>
              {current.map((hero) => (
                <ListItemHeader key={hero.name}>{hero.name}</ListItemHeader>
              ))}
            </ButtonTransparent>
          </div>
          <div
            style={{
              position: "absolute",
              width: "100px",
              marginRight: "100px",
              top: "0px",
              left: "260px",
              opacity: "0.5",
            }}
          >
            <ButtonTransparent style={{ color: "white" }}>
              <SectionHeader style={{ color: "white" }}>
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
        </div>
      </div>
    </Container>
  );
}

export default StableHeader;
