import logo from './logo.svg';
import r10 from './r10.svg';
import r11 from './r11.svg';
import r12 from './r12.svg';
import r13 from './r13.svg';
import r14 from './r14.svg';
import txt from './txt.svg';
import line from './line.svg';
import lin from './lin.svg';
import bouton from './Bouton.svg';
import bouton1 from './Bouton-1.svg';
import animbo from './animbo.svg';
import './App.css';
import React, { useEffect,useRef, useState} from 'react';
export default App;



function App() {

    useEffect(() => {
    const handleMouseMove = (e) => {
      document.documentElement.style.setProperty('--x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--y', `${e.clientY}px`);
    };

    document.querySelector('.backg').addEventListener('mousemove', handleMouseMove);

    return () => {
      document.querySelector('.backg').removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="logo" alt="logo" />
        <div className='backg'><img src={r10} className="back" alt="back"></img></div>
        <img src={txt} className="txt" alt="txt"/>
        <button className='bouton'><img src={bouton} className='bouton'></img><img className='animbo' src={animbo}></img></button>
        <button className='bouton1'><div class="animboo-container"><img src={bouton1} className='bouton1'></img><img src={animbo} className='animboo'></img><div class="clickable-top"></div></div></button>
        
      </header>
        
      <button className='btn'> <img src={r14}/></button>
      <button className='Button1'> <img src={r11}/></button>
      <button className='Button2'> <img src={r12}/></button>
      <img src={line} className="line" alt="line"/>
      <img src={lin} className="lin" alt="lin"/>
      <footer className="backb" alt="backb"><img src={r13} className="backbb" alt="backbb"/></footer>
    </div>
  );
}