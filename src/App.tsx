import FallenHeroes from "./components/FallenHeroes";
import { LotrProvider } from "./context";
import AllMightyHeroes from "./components/AllMightyHeroes";
import Survivors from "./components/Survivors";
import { Container } from "./components/atoms/Container";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    header: "#000000",
    subheader: "#808080",
    body: "#000000",
    footer: "#000000",
  },
  mobile: "768px",
};

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
