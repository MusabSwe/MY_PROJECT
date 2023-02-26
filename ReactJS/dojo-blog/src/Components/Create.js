import { useState } from "react";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // default value mario in select input
    const [author, setauthor] = useState('mario');
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea required
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label >Blog author:</label>
                <select value={author} onChange={(e) => setauthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>
                <button>Add Blog</button>
                {/* For Testing to see if it is work */}
                <p>{title}</p>
                <p>{body}</p>
                <p>{author}</p>

            </form>
        </div>
    );
}

export default Create;