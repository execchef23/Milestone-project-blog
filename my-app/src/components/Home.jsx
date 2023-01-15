import NavBar from './NavBar';
import ViewBlogs from './ViewBlogs';
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import ReactDOM from 'react-dom/client';

const Home = () => {
  const [state, setState] = useState([]);

  const getData = async () => {
    // console.log("We got clicked");
    const data = await fetch("http://localhost:3001/blogs");
    console.log("DATA inital from backed", data);
    const cleanData = await data.json();
    console.log("STUFF FROM BACKNED!!", cleanData);
    setState(cleanData);
  };
  console.log("State", state);

  useEffect(() => {
    getData();
  }, []);
    return(
      <>
  <NavBar />
  {state.map((blogs) => {
    return(
      <div class="card">
  <a className="link" href={`/blogs/${blogs._id}`} > {blogs.title}
  <div key={blogs._id} className="col-sm-6"> </div>
  <img
         type="url"
          src={blogs.image}
          className="placeimg"
          alt={blogs.title}
        />
    <p> Description: {blogs.description}</p>
  </a>
</div>
 
  );
  })}
      {/* <ViewBlogs /> */}
      </>
    );
};

export default Home;