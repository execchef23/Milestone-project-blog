import NavBar from './NavBar';
import ViewBlogs from './ViewBlogs';
// import kitty from "../assets/images/kitty.jpeg"
import { useState } from 'react';
// import ReactDOM from 'react-dom/client';

const Home = () => {
    return(
      <>
        <NavBar />
        {/* <div class="card">
          <a href="">
            <div class="container">
              <h4><b>John Doe</b></h4>
              <p>Architect & Engineer</p>
            </div>
          </a>
        </div> */}
        <div className='blogs-container'>
          <ViewBlogs />
        </div>
      </>
    );
};

export default Home;