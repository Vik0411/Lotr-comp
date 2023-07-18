import React from 'react';
import logo from './logo.svg';
import './App.css';
import FallenHeroes from './components/FallenHeroes';

function App() {
  return (
    <div className="App">
     <header className="App-header">
        <header className="header">
            <button className="btn list_all">List all the mighty heroes</button>
                <div className="all__heroes__panel">
                    <ul className="all_heroes__list">  
                  all heroes list
                    </ul>
                </div>
        </header>
          <FallenHeroes/>
            <header className="header">
                <button className="btn list_survivors">List survivors</button>
                <div className="rest__panel">
                    <ul className="rest__heroes__list">  
                       rest of heroes
                    </ul>
                </div>
            </header>  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code></code>
        </p>
        <a>
        </a>
      </header>
    </div>
  );
}

export default App;
