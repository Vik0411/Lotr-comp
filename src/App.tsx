import React, { useState } from "react";
import FallenHeroes from "./components/FallenHeroes";
import { LOTRProvider } from "./context";

function App() {
  return (
    <LOTRProvider>
      <div className="App">
        <header className="App-header">
          <header className="header">
            <button className="btn list_all">List all the mighty heroes</button>
            <div className="all__heroes__panel">
              <ul className="all_heroes__list">all heroes list</ul>
            </div>
          </header>
          <FallenHeroes />
          <header className="header">
            <button className="btn list_survivors">List survivors</button>
            <div className="rest__panel">
              <ul className="rest__heroes__list">{}</ul>
            </div>
          </header>
          <img />
          <p>
            <code></code>
          </p>
          <a></a>
        </header>
      </div>
    </LOTRProvider>
  );
}

export default App;
