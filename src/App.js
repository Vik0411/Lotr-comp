import logo from './logo.svg';
import './App.css';
import FallenHeroes from './components/FallenHeores';

function App() {
  return (
    <div className="App">
     <header className="App-header">
        <header class="header">
            <button class="btn list_all">List all the mighty heroes</button>
                <div class="all__heroes__panel">
                    <ul class="all_heroes__list">  
                  all heroes list
                    </ul>
                </div>
        </header>
          <FallenHeroes/>
            <header class="header">
                <button class="btn list_survivors">List survivors</button>
                <div class="rest__panel">
                    <ul class="rest__heroes__list">  
                       rest of heroes
                    </ul>
                </div>
            </header>  
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code></code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
