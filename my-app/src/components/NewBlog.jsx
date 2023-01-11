import NavBar from "./NavBar";
import {useState} from 'react'

const NewBlog = () => {

    const [title, setTitle] = useState('')
    console.log('title!!!', title)

    const [image, setImage] = useState('')
    console.log('image!!!', image)

    const [description, setDescription] = useState('')
    console.log('description!!!', description)



    const submitBlog = async ()=> {
        console.log('We are about to save!!!!!')
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: title,
              image: image,
              description: description
            })
          };

        const data = await fetch('/blog', requestOptions)
         console.log('time to save blog!!', data)
    }

    return (
        <div>
            <NavBar />
            <div className="Form">
            <h2>Add A New Blog: </h2>
            <form >
                <label>Title: </label>
                <input 
                    id="title"
                    name="title"
                    required
                    onChange={(e) => {setTitle(e.target.value)}}
                />
                <label>Image URL (optional): </label>
                <input 
                    type="url"
                    id="image"
                    name="image"
                    onChange={(e) => {setImage(e.target.value)}}
                />
                <label>Description: </label>
                <textarea
                    id="description"
                    name="description" 
                    required
                    onChange={(e) => {setDescription(e.target.value)}}
                />
                <input 
                    onClick={submitBlog}
                    className="btn"
                    value="Submit"
                />
            </form>
        </div>
        </div>
    );
};

export default NewBlog;