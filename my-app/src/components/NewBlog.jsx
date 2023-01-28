import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

const NewBlog = () => {
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  // console.log('title!!!', title)

  const [image, setImage] = useState("");
  // console.log('image!!!', image)

  const [description, setDescription] = useState("");
  // console.log('description!!!', description)

  const submitBlog = async () => {
    console.log("We are about to save!!!!!");

    navigate("/")

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: title,
        image: image,
        description: description,
      }),
    };

    const data = await fetch("/blogs", requestOptions);
    console.log("time to save blog!!", data)
  };

  return (
    <div>
      <div className="Form">
        <h2>Add A New Blog: </h2>
        <form>
          <label>Title: </label>
          <input
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
          />
          <label>Image URL (optional): </label>
          <input
            type="url"
            onChange={(e) => {
              setImage(e.target.value);
            }}
          />
          <label>Description: </label>
          <textarea
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            value={description}
          />
                  <Button
          onClick={submitBlog}
          type="submit"
          disabled={!title || !description }
          variant="secondary"
          size="lg"
        >
          Submit
        </Button>
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
