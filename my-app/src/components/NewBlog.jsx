import NavBar from "./NavBar";

const NewBlog = () => {
  return (
    <div>
      <NavBar />
      <div className="Form">
        <h2>Add A New Blog: </h2>
        <form>
          <label>Title: </label>
          <input id="title" name="title" required />
          <label>Image URL (optional): </label>
          <input type="url" id="image" name="image" />
          <label>Description: </label>
          <textarea id="description" name="description" required />
          <input className="btn" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default NewBlog;
