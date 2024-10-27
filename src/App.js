import logo from './logo.svg';
import d4 from './d4.svg'
import d5 from './d5.svg'
import d6 from './d6.svg'
import d10 from './d10.svg'

import './App.css';
export default App;



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='div1'>
        <img src={logo} className="App-logo" alt="logo" />
        <button className='dR4'> <img src={d4} className="d4" alt="d4"/> </button>
        <button className='dR3'> <img src={d4} className="d3" alt="d2"/> </button>
        <button className='dR2'> <img src={d5} className="d2" alt="d3"/> </button>
        </div>
        <div className='divider'><img src={d6} className="d6" alt="d6"/> </div>
        <img src={d10} className="d10" alt="d10"/>
        <div className='splash'></div>

        <p>
          <code>Bienvenue</code>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React 
        </a>
      </header>
    </div>
  );
}