import FallenHeroes from "./components/FallenHeroes";
import { LotrProvider } from "./context";
import AllMightyHeroes from "./components/AllMightyHeroes";
import Survivors from "./components/Survivors";
import { ContainerHeroManagement } from "./components/atoms/Container";
import { ThemeProvider } from "styled-components";
import { theme } from "./themes";

function App() {
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
