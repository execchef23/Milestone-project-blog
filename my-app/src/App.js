import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import NewBlog from "./components/NewBlog";
import Blog from "./components/ViewBlogs";
import ShowBlog from "./components/ShowBlog";

function App() {
  return (
    <>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/LogIn" element={<LogIn />} />
            <Route path="/New" element={<NewBlog />} />
            <Route path="/Blog" element={<Blog />} />
            <Route path="/Blogs/:id" element={<ShowBlog />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
