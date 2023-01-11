import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import './App.css';

import Home  from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import NewBlog from "./components/NewBlog";


function App() {

  <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

  return (

    <>
      
      <body>
        
      </body>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/New" element={<NewBlog />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;