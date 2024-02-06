import './App.css';
import React from 'react';
import star from './star.jpeg';
import start from './start.png';
import { useState, useEffect } from 'react';
import nav from "./nav";
import Nav from './nav';

function App() {
  // const [navItemClass, setNavItemClass] = useState("nav-item-normal");
  // const [hoveredNav, setHoveredNav] = useState(null);
  const [smallScreen, setSmallScreen] = useState(false);
  
  useEffect(() => {
    function handleResize () {
      setSmallScreen(state => window.innerWidth >= 1024);
    }
    handleResize();
    //add event listener when component mounts
    window.addEventListener('resize', handleResize);
     // Clean up event listener when the component unmounts
     return () => window.removeEventListener('resize', handleResize);
  }, [])

  return (
    <div className="App">
      <div className='body'>
        <header className='header'>
          <div className='header-text'>
            <h1>Jashan Brar</h1>
            <h2>Full Stack Developer</h2>
            <p>I build efficient and scaleable digital experiences</p>
          </div>
          {/* Classname for nav to be changed depending on media dimensions - erase at below certain threshold*/}
          <Nav/>
          <ul className='external-links'>
            <li><a href='https://github.com/jashanb'><svg></svg></a></li>
            <li><a href='https://www.linkedin.com/in/jashan-brar/'><svg></svg></a></li>
          </ul>
        </header>
        <main className='content'>
        <section id="about">
          {/*only show div with media dimensions <1024 - opacity to 0*/}
        <div >
          <h2>About</h2>
        </div>
        <div>
          <p>About para 1</p>
          <p>About para 2</p>
          <p>About para 3</p>
        </div>
        </section>
        </main>
      </div>
    </div>
  );
  // return (
  //   <div className="App">
  //     <div className='body'>
  //       <header>Jashan Brar</header>
  //       <div className='start-div'>
  //         <img src={start} className='start-here' alt="my-star" onClick={() => modalClick()}></img>
  //       </div>
  //     </div>
  //     <div className={modal}>
  //       <div className='modal-body'></div>
  //     </div>
  //   </div>
  // );
}

export default App;
