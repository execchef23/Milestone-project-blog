import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";

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
    };

    // fetch !!
    const data = await fetch(
      "http://localhost:3001/blogs/" + id,
      requestOptions
    );
    const cleanData = await data.json();
    setState(cleanData);
    // console.log("Data!!! from delte", data);
    navigate("/");
  };

  return (
    <div>
      <div key={id} className="container">
        <h1>{state.title}</h1>
        <img className="placeimg2" src={state.image} alt={state.title} />
        <p> {state.description}</p>
        <div className="buttons">
          {/* <form className="edit" id="btn" method="POST">
            <Link
              type="click"
              to={`http://localhost:3001//blogs/${state.id}/edit`}
              className="btn btn-warning"
            >
              Edit
            </Link>
          </form> */}
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
