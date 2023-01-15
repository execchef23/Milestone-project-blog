import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-bootstrap/Container";

function ViewBlogs() {
  const [state, setState] = useState([]);

  const getData = async () => {
    // console.log("We got clicked");
    const data = await fetch("./blogs");
    console.log("DATA inital from backed", data);
    const cleanData = await data.json();
    console.log("STUFF FROM BACKNED!!", cleanData);
    setState(cleanData);
  };
  console.log("State", state);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="row col-md-8">
      <h1>View Blogs</h1>
      {state.map((blogs) => {
        return (
          <div key={blogs._id} className="col-sm-6">
            <div className="container">
              <Link className="link" to={`/blogs/${blogs._id}`}>
                {" "}
                {blogs.title}
              </Link>
              <div className="row">
                <p> Description: {blogs.description}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ViewBlogs;
