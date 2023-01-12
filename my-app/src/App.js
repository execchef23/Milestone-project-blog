import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import React from "react";
function App() {
  return (
    <>
  <nav>
      <h1>Test</h1>
  </nav>
  <body>
    
  </body>
  <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
