import {
  Container,
  ContainerFlex,
  ContainerHeroManagement,
} from "./atoms/Containers";
import AllMightyHeroes from "./AllMightyHeroes";
import AddCustomHero from "./AddCustomHero";
import CurrentHeroes from "./CurrentHeroes";
import FallenHeroes from "./FallenHeroes";
import { SectionHeader } from "./atoms/typography";
import { LotrContext } from "../context";
import { useContext } from "react";
import { filterHeroes } from "../utils";
import AninamtedPage from "./AnimatedPage";

function HeroManagement() {
  const { campaign } = useContext(LotrContext);

  const current = filterHeroes(
    { alive: true, current: true },
    campaign.allHeroes
  );

  const fallen = filterHeroes(
    { alive: false, current: false },
    campaign.allHeroes
  );
  return (
    <ContainerHeroManagement>
      <AninamtedPage>
        <SectionHeader
          style={{
            textAlign: "center",
            margin: "50px 30px",
            marginBottom: "10px",
          }}
        >
          Add to Current Campaign
        </SectionHeader>
        <ContainerFlex style={{ margin: "50px 30px" }}>
          <div style={{ display: "flex", flexFlow: "column" }}>
            <AllMightyHeroes />
            <AddCustomHero />
          </div>
        </ContainerFlex>
        <AninamtedPage>
          {current[0] !== undefined && (
            <div>
              <SectionHeader
                style={{
                  textAlign: "center",
                  margin: "30px 30px",
                  marginTop: "60px",
                }}
              >
                Current heroes:
              </SectionHeader>
              <div
                style={{
                  display: "flex",
                  flexFlow: "column",
                  marginLeft: "40px",
                }}
              >
                <CurrentHeroes />
              </div>
            </div>
          )}
        </AninamtedPage>
        {fallen[0] !== undefined && (
          <div>
            <SectionHeader
              style={{
                textAlign: "center",
                margin: "30px 30px",
                marginTop: "60px",
              }}
            >
              Fallen heroes:
            </SectionHeader>
            <FallenHeroes />
          </div>
        )}
      </AninamtedPage>
    </ContainerHeroManagement>
  );
}

export default HeroManagement;
