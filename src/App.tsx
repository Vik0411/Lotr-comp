import React from "react";
import FallenHeroes from "./components/FallenHeroes";
import { LotrProvider } from "./context";
import AllMightyHeroes from "./components/AllMightyHeroes";
import Survivors from "./components/Survivors";

function App() {
  return (
    <LotrProvider>
      <AllMightyHeroes />
      <FallenHeroes />
      <Survivors />
    </LotrProvider>
  );
}

export default App;
