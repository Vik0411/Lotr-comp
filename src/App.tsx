import FallenHeroes from "./components/FallenHeroes";
import { LotrProvider } from "./context";
import AllMightyHeroes from "./components/AllMightyHeroes";
import Survivors from "./components/Survivors";
import { Container } from "./components/atoms/Container";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./themes";

function App() {
  const ContainerHeroManagement = styled(Container)`
    margin: 0 auto;
  `;

  return (
    <ThemeProvider theme={theme}>
      <ContainerHeroManagement>
        <LotrProvider>
          <AllMightyHeroes />
          <FallenHeroes />
          <Survivors />
        </LotrProvider>
      </ContainerHeroManagement>
    </ThemeProvider>
  );
}

export default App;
