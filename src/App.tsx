import FallenHeroes from "./components/FallenHeroes";
import { LotrProvider } from "./context";
import AllMightyHeroes from "./components/AllMightyHeroes";
import {
  Container,
  ContainerFlex,
  ContainerWithWhiteText,
} from "./components/atoms/Container";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./themes";
import CurrentHeroes from "./components/CurrentHeroes";
import BoonsAndBurdens from "./components/BoonsAndBurdens";
import BoonsAndBurdensDisplay from "./components/BoonsAndBurdensDisplay";

const ContainerHeroManagement = styled(Container)`
  margin: 0 auto;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ContainerHeroManagement>
        <LotrProvider>
          <ContainerFlex>
            <BoonsAndBurdens />

            <AllMightyHeroes />
            <BoonsAndBurdensDisplay />
          </ContainerFlex>
          <CurrentHeroes />
          <ContainerWithWhiteText>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              officia, quas itaque labore sed distinctio a architecto.
              Recusandae, aliquid modi impedit, maiores nemo a eius dignissimos
              odit numquam praesentium repudiandae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              fugiat vel accusantium porro, ad id voluptates architecto
              consequatur natus earum eum fugit minima deserunt dolorem
              excepturi necessitatibus modi blanditiis amet?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
              tenetur distinctio in sed inventore harum maxime, vitae eligendi
              laborum vel sunt hic voluptas ad aperiam pariatur, fugit, ipsa
              quaerat similique!
            </p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae,
            repellat. Obcaecati, maxime consequatur. Repudiandae tempore tenetur
            illum error, commodi quod, temporibus nobis dolorem iure at, vitae
            facilis molestiae fugiat soluta.
          </ContainerWithWhiteText>
          <FallenHeroes />
        </LotrProvider>
      </ContainerHeroManagement>
    </ThemeProvider>
  );
}

export default App;
