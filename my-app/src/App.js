// addins
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
import EditBlog from "./components/EditBlog";
import NavBar from './components/NavBar';
import Error404 from "./components/Error404";
// context imports
import CurrentUserContextProvider from "./contexts/CurrentUser";



function App() {
  return (
    <CurrentUserContextProvider>
      <main>
        <div>
          <Router>
          <NavBar />
          <p className="main"></p>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<LogIn />} />
              <Route path="/new" element={<NewBlog />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:id" element={<ShowBlog />} />
              <Route path="/edit/:id" element={<EditBlog />} />
              <Route path="*" element={<Error404 />} />
            </Routes>
          </Router>
        </div>
        <footer className="footer">
          <h3>
            Site created by: <br />
            Philip Bowman <a href="https://github.com/AriesRedWar">
              GitHub,
            </a>{" "}
            <br />
            Jeremiah Reid <a href="https://github.com/JeremiahR2002">
              GitHub,
            </a>{" "}
            <br />
            Amanda Remo <a href="https://github.com/asremo">
              GitHub,
            </a>{" "}
            <br />
            Michael Manley <a href="https://github.com/execchef23">
              GitHub,
            </a>{" "}
          </h3>
        </footer>
      </main>
    </CurrentUserContextProvider>
  );
}

export default App;
