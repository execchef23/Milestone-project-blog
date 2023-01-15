import NavBar from './NavBar';
import ViewBlogs from './ViewBlogs';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import ReactDOM from 'react-dom/client';

const Home = () => {

    return(
      <>
  <NavBar />

      <ViewBlogs />
      </>
    );
};

export default Home;