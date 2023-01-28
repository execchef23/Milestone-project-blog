import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
// import { Link } from "react-router-dom";
// import ShowComments from "./ShowComments";
// import NewComment from "./NewComment";

function ViewsShow() {

  const navigate = useNavigate();

  const { id } = useParams();

    useEffect(()=> {
      const getData = async () => {
          const data = await fetch("/blogs/" + id);
          const jsonData = await data.json();
          console.log("from db", jsonData);
          editTitle(jsonData.title)
          editImage(jsonData.image)
          editDescription(jsonData.description)
        };
        getData();
  }, [id])


  const [title, editTitle] = useState('')
  // console.log('title!!!', title)

  const [image, editImage] = useState('')
  // console.log('image!!!', image)

  const [description, editDescription] = useState('')
  // console.log('description!!!', description)


  const editBlog = (id) => {
    navigate("/edit/" + id);
  };

  const deleteBlog = async () => {
    console.log("Hello from delete click");
    const requestOptions = {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    }
      // fetch !!
      const data = await fetch("/blogs/" + id, requestOptions);
      // const cleanData = await data.json();
      // setState(cleanData);
      console.log("Data!!! from delte", data);
      navigate("/blog");
    };


  return (
    <div>
      <div key={id} className="blog-container">
        <div className="blog-details">
          <h1>{title}</h1>
        <img className="placeimg2" src={image} alt={title} />
        <h3> {description} </h3>
        <hr />
        </div>
        <h2>
          Comments:
        </h2>
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
