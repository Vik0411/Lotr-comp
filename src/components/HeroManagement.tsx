import { LotrProvider } from "../context";
import { Container, ContainerFlex } from "./atoms/Container";
import AllMightyHeroes from "./AllMightyHeroes";
import AddCustomHero from "./AddCustomHero";
import CurrentHeroes from "./CurrentHeroes";
import FallenHeroes from "./FallenHeroes";
import { styled } from "styled-components";

const ContainerHeroManagement = styled(Container)`
  margin: 0 auto;
  font-size: 20px;
`;
function HeroManagement() {
  return (
    <ContainerHeroManagement>
      <LotrProvider>
        <ContainerFlex style={{ margin: "30px 30px" }}>
          <div style={{ display: "flex", flexFlow: "column" }}>
            <AllMightyHeroes />
            <AddCustomHero />
          </div>
        </ContainerFlex>
        <CurrentHeroes />
        <FallenHeroes />
      </LotrProvider>
    </ContainerHeroManagement>
  );
}

export default HeroManagement;
