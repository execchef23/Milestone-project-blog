import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-bootstrap/Container";

function ViewBlogs() {
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

  return (
    <div className="row col-md-8">
      {state.map((blogs) => {
        return (
          <div key={blogs._id} className="col-sm-6">
            <div className="card">
              <a className="link" href={`/blogs/${blogs._id}`}> {blogs.title}
              <div className="row">
              <img
                  type="url"
                    src={blogs.image}
                    className="placeimg"
                    alt={blogs.title}
                  />
                <p> Description: {blogs.description}</p>
              
              </div>
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ViewBlogs;
