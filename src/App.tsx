import FallenHeroes from "./components/FallenHeroes";
import { LotrProvider } from "./context";
import AllMightyHeroes from "./components/AllMightyHeroes";
import Survivors from "./components/Survivors";
import { Container } from "./components/atoms/Container";
import { ThemeProvider } from "styled-components";
import { theme } from "./components/atoms/themes";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <LotrProvider>
          <AllMightyHeroes />
          <FallenHeroes />
          <Survivors />
        </LotrProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
