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

const ContainerHeroManagement = styled(Container)`
  margin: 0 auto;
`;

function App() {
  return (
    <ContainerHeroManagement>
      <GlobalStyle />
      <LotrProvider>
        <ContainerFlex>
          <AllMightyHeroes />
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
