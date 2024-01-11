import FallenHeroes from "./components/FallenHeroes";
import { LotrProvider } from "./context";
import AllMightyHeroes from "./components/AllMightyHeroes";
import {
  GlobalStyle,
  Container,
  ContainerFlex,
  ContainerWithWhiteText,
} from "./components/atoms/Container";
import styled from "styled-components";
import CurrentHeroes from "./components/CurrentHeroes";
import BoonsAndBurdens from "./components/BoonsAndBurdens";
import BoonsAndBurdensDisplay from "./components/BoonsAndBurdensDisplay";
import { DynamicLore } from "./components/DynamicLore";
import AddCustomHero from "./components/AddCustomHero";
import CampaignScenario from "./components/CampaignScenario";
import CurrentScenarioDisplay from "./components/CurrentScenarioDisplay";

const ContainerHeroManagement = styled(Container)`
  margin: 0 auto;
`;

function App() {
  return (
    <ContainerHeroManagement>
      <head>
        <link href="https://fonts.cdnfonts.com/css/tolkien" rel="stylesheet" />
      </head>
      <GlobalStyle />
      <LotrProvider>
        <div style={{ position: "relative" }}>
          <CampaignScenario />
          <CurrentScenarioDisplay />
        </div>
        <ContainerFlex style={{ margin: "30px 30px" }}>
          <div style={{ display: "flex", flexFlow: "column" }}>
            <AllMightyHeroes />
            <AddCustomHero />
          </div>
          <BoonsAndBurdens />
          <BoonsAndBurdensDisplay />
        </ContainerFlex>
        <CurrentHeroes />
        <ContainerWithWhiteText>
          <DynamicLore />
        </ContainerWithWhiteText>
        <FallenHeroes />
      </LotrProvider>
    </ContainerHeroManagement>
  );
}

export default App;
