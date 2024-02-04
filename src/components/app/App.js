import './App.css';
import React from 'react';
import  star from './star.jpeg';
import start from './start.png';
import { useState } from 'react';

function App() {
  const [modal, setModal] = useState("modal-closed")
  //2 things - animated start here button that once clicked, brings up modal with about me page
  //need modal component
  //need content to put in modal 

  function modalClick () {
    setModal(state => "modal-open");
  }
  return (
    <div className="App">
      <div className='body'>
        <header>Jashan Brar</header>
        <div className='start-div'>
          <img src={start} className='start-here' alt="my-star" onClick={() => modalClick()}></img>
        </div>
      </div>
      <div className={modal}></div>
    </div>
  );
}

export default App;
