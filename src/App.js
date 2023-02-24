import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Project from './pages/Projects';

function App() {
  return (
    
    <Router>
    <div>
      <Routes>
        <Route 
          path="/" 
          element={<Home />}
        />
        <Route 
          path="/about" 
          element={<About />}
        />
        <Route 
          path="/projects" 
          element={<Project />}
        />
      </Routes>
    </div>
  </Router>
  
  
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    // <div>hello</div>
  );
}

export default App;
