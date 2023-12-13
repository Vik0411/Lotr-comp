import FallenHeroes from "./components/FallenHeroes";
import { LotrProvider } from "./context";
import AllMightyHeroes from "./components/AllMightyHeroes";
import { Container, ContainerGrid } from "./components/atoms/Container";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./themes";
import CurrentHeroes from "./components/CurrentHeroes";
import BoonsAndBurdens from "./components/BoonsAndBurdens";

const ContainerHeroManagement = styled(Container)`
  margin: 0 auto;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContainerHeroManagement>
        <LotrProvider>
          <ContainerGrid>
            <AllMightyHeroes />
            <BoonsAndBurdens />
            <div>LORE</div>
          </ContainerGrid>
          <CurrentHeroes />
          <FallenHeroes />
        </LotrProvider>
      </ContainerHeroManagement>
    </ThemeProvider>
  );
}

export default App;
