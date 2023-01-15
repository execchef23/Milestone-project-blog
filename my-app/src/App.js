import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// jsx imports
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import NewBlog from "./components/NewBlog";
import Blog from "./components/ViewBlogs";
import ShowBlog from "./components/ShowBlog";
import NavBar from './components/NavBar';
import EditBlog from "./components/EditBlog";

function App() {
  return (
    <>

      <div>
      {/* <NavBar /> */}
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/New" element={<NewBlog />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blogs/:id" element={<ShowBlog />} />
            <Route path="/edit/:id" element={<EditBlog />} />
          </Routes>
        </Router>
      </div>
      <footer className="footer">
        <h4>
          Site created by: <br />
          Philip Bowman <a href="https://github.com/AriesRedWar">
            GitHub,
          </a>{" "}
          <br />
          Jeremiah Reid <a href="https://github.com/shetara2022">
            GitHub,
          </a>{" "}
          <br />
          Michael Manley <a href="https://github.com/execchef23">GitHub</a>
        </h4>
      </footer>
    </>
  );
}

export default App;
