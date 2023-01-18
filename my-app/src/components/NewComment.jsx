import { useState } from "react";

const NewComment = (onSubmit) => {

    const [comment, setComment] = useState({
        content: ''
    })

    function handleSubmit(e) {
        e.preventDefault()
        onSubmit(comment)
        setComment({
            content: ''
        })
    }


    return (
        // <form onSubmit={handleSubmit}>
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="form-group col-sm-12">
                    {/* <label htmlFor="content">Content</label> */}
                    <textarea
                        required
                        value={comment.content}
                        onChange={e => setComment({ ...comment, content: e.target.value })}
                        className="form-control"
                        id="content"
                        name="content"
                    />
                </div>
            </div>
            <input className="btn" type="submit" value="Add Comment" />
        </form>
    )
}

export default NewComment;