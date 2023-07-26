import React from "react";
import FallenHeroes from "./components/FallenHeroes";
import { LOTRProvider } from "./context";
import AllMightyHeroes from "./components/AllMightyHeroes";
import Survivors from "./components/Survivors";

function App() {
  return (
    <LOTRProvider>
      <AllMightyHeroes />
      <FallenHeroes />
      <Survivors />
    </LOTRProvider>
  );
}

export default App;
