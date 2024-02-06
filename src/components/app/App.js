import './App.css';
import React from 'react';
import star from './star.jpeg';
import start from './start.png';
import { useState } from 'react';
import nav from "./nav";

function App() {
  // const [modal, setModal] = useState("modal-closed")
  const [navItemClass, setNavItemClass] = useState("nav-item-normal");
  const [hoveredNav, setHoveredNav] = useState(null);
  //2 things - animated start here button that once clicked, brings up modal with about me page
  //need modal component
  //need content to put in modal 
  //Background - Skills - Companies/Role - Projects 
  function modalClick() {
    setModal(state => "modal-open");
  }

  function hoverNav(item) {
    setHoveredNav(state => item);
  }

  function moveOffNav(item) {
    setHoveredNav(state => null);
  }

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
          <nav className=''>
            <ul>
              <li className={hoveredNav === 1 ? "hovered-nav-item" : "nav-item-normal"}
                onMouseEnter={() => hoverNav(1)}
                onMouseLeave={() => moveOffNav(1)}
              >
                <a href="" className='flex-nav-center'>
                  <span></span>
                  <span>About</span>
                </a>
              </li>
              <li className={hoveredNav === 2 ? "hovered-nav-item" : "nav-item-normal"}
                onMouseEnter={() => hoverNav(2)}
                onMouseLeave={() => moveOffNav(2)}
              >
                <a href="">
                  <span></span>
                  <span>Experience</span>
                </a>
              </li>
              <li className={hoveredNav === 3 ? "hovered-nav-item" : "nav-item-normal"}
                onMouseEnter={() => hoverNav(3)}
                onMouseLeave={() => moveOffNav(3)}
              >
                <a href="">
                  <span></span>
                  <span>Projects</span>
                </a>
              </li>
            </ul>
          </nav>
          <ul className='external-links'>
            <li><a href='https://github.com/jashanb'><svg></svg></a></li>
            <li><a href='https://www.linkedin.com/in/jashan-brar/'><svg></svg></a></li>
          </ul>
        </header>
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
