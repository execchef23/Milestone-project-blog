import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
import ShowComments from "./ShowComments";
import NewComment from "./NewComment";

function ViewsShow() {
  const { id } = useParams();
  const navigate = useNavigate();
  //   console.log("THIS IS OUR id!~!! beore use effect", id);

  const [state, setState] = useState({});

  const getData = async () => {
    // console.log("This is our id!!!", id);
    // console.log("We got clicked", id);
    const data = await fetch("http://localhost:3001/blogs/" + id);
    // console.log("DATA inital from backed", data);
    const cleanData = await data.json();
    // console.log("STUFF FROM BACKNED!!", cleanData);
    setState(cleanData);
  };
    // console.log("State", state);

  useEffect(() => {
    getData();
  }, []);

  const editBlog = (id) => {
    navigate("/edit/" + id);
  };

  const deleteBlog = async () => {
    // console.log("Hello from delete click");
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
    navigate("/")
    
    // fetch !!
    const data = await fetch(
      "http://localhost:3001/blogs/" + id,
      requestOptions
    );
    const cleanData = await data.json();
    setState(cleanData)
    // console.log("Data!!! from delte", data);

  };

  return (
    <div>
      <div key={id} className="blog-container">
        <div className="blog-details">
          <h1>{state.title}</h1>
        <img className="placeimg2" src={state.image} alt={state.title} />
        <h3> {state.description} </h3>
        <hr />
        </div>
        <h2>
          Comments:
        </h2>
        <div className="row">
          < ShowComments />
        </div>
        <br />
        <hr />
        <h2>Want to submit a comment?</h2>
        <NewComment />
        <hr />
        <div className="buttons">
          <button onClick={() => editBlog(id)} className="btn btn-danger">
            Edit
          </button>
          <button onClick={deleteBlog} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default ViewsShow;
