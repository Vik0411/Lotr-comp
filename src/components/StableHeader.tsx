import { Link } from "react-router-dom";
import { ButtonTransparent } from "./atoms/Button";
import { SectionHeader } from "./atoms/typography";
import { ListItemHeader } from "./atoms/ListItemWithWhiteText";
import { filterHeroes } from "../utils";
import React from "react";
import { LotrContext } from "../context";
import { Hero } from "../types";
import { Container } from "./atoms/Container";

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
                marginBottom: "10px",
                color: "red",
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
              height: "80px",
              width: "auto",
            }}
          >
            <Link to="/" style={{ marginRight: "100px" }}>
              <SectionHeader
                style={{
                  color: "red",
                }}
              >
                Campaign management
              </SectionHeader>
            </Link>
            <Link to="/hero" style={{ marginLeft: "100px" }}>
              <SectionHeader
                style={{
                  color: "red",
                }}
              >
                Hero management
              </SectionHeader>
            </Link>
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
