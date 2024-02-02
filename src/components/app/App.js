import './App.css';
import React from 'react';
import  star from './star.jpeg';

function App() {

  //2 things - animated start here button that once clicked, brings up modal with about me page
  //need modal component
  //need content to put in modal 

  function modalClick () {

  }
  return (
    <div className="App">
      <div className='top-div'>
        <div className='start-div'>
          <header>Start here</header>
          <img src={star} className='star-tail' alt="my-star"></img>
        </div>
      </div>
      <div className='middle-div'>
        <header>Jashan Brar</header>
      </div>
      <div></div>
      <div className="modal-div"></div>
    </div>
  );
}

export default App;
