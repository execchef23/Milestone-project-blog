import React from "react";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom"

const EditBlog = () => {

    const navigate = useNavigate()

    const {id} = useParams()
    // console.log('This is the id we need to get out of the DB!', id)
     
        useEffect(()=> {
            const getData = async () => {
                const data = await fetch("http://localhost:3001/blogs/" + id);
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

    const updateBlog = async () => {
        // console.log('We are about to update!!!!!')
        const requestOptions = {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              title: title,
              image: image,
              description: description
            })
          };
        const data = await fetch("http://localhost:3001/blogs/"+ id , requestOptions).then(
        navigate("/")
        );
        console.log('time to save blog!!', data)

    }

    return (

        <div>
            <div className="Form">
            <h2>Edit Blog: </h2>
            <form >
                <label>Title: </label>
                <input 
                    id="title"
                    name="title"
                    value={title}
                    required
                    onChange={(e)=> {editTitle(e.target.value)}}
                />
                <label>Image URL (optional): </label>
                <input 
                    type="url"
                    id="image"
                    name="image"
                    value={image}
                    onChange={(e)=> {editImage(e.target.value)}}
                />
                <label>Description: </label>
                <textarea
                    id="description"
                    name="description"
                    value={description} 
                    required
                    onChange={(e)=> {editDescription(e.target.value)}}
                />
                <input 
                    onClick={updateBlog}
                    className="btn"
                    value="Update Blog"
                />
            </form>
        </div>
        </div>
    );
};

export default EditBlog;
