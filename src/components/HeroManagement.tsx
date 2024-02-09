import { Container, ContainerFlex } from "./atoms/Containers";
import AllMightyHeroes from "./AllMightyHeroes";
import AddCustomHero from "./AddCustomHero";
import CurrentHeroes from "./CurrentHeroes";
import FallenHeroes from "./FallenHeroes";
import { styled } from "styled-components";

const ContainerHeroManagement = styled(Container)`
  font-size: 20px;
`;
function HeroManagement() {
  return (
    <ContainerHeroManagement>
      <ContainerFlex style={{ margin: "30px 30px" }}>
        <div style={{ display: "flex", flexFlow: "column" }}>
          <AllMightyHeroes />
          <AddCustomHero />
        </div>
      </ContainerFlex>
      <div style={{ display: "flex", flexFlow: "column", marginLeft: "40px" }}>
        <CurrentHeroes />
      </div>
      <FallenHeroes style={{ margin: "30px 30px" }} />
    </ContainerHeroManagement>
  );
}

export default HeroManagement;
