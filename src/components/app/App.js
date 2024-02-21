import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home';
import ResumePage from './resumePage';

function App() {
  return (
    <Router>
      <div>

      <Routes>
        <Route exact path="/" element={Home} />
        <Route path="/resume" element={ResumePage} />
      </Routes>
      </div>
    </Router>
  );

  }
  export default App;
