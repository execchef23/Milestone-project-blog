import NavBar from './NavBar';
import ViewBlogs from './ViewBlogs';
import kitty from "../assets/images/kitty.jpg"
import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

const Home = () => {
    return(
      <>
  <NavBar />
  <div class="card">
    <a href="">
  <img src={kitty}
       alt="Blog"  
       />
  <div class="container">
    <h4><b>John Doe</b></h4>
    <p>Architect & Engineer</p>
  </div>
  </a>
  </div>
      <ViewBlogs />
      </>
    );
};

export default Home;