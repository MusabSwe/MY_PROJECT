import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    // default value mario in select input
    const [author, setauthor] = useState('mario');
    const [isLoading, setIsLoading] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        // store written data in the form 
        // after we submit
        const blog = { title, body, author };
        setIsLoading(true)
        setTimeout(() => {
            fetch('http://localhost:8000/blogs', {
                method: 'POST',
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(blog)
            }).then(() => {
                console.log("New Blog added");
                setIsLoading(false);
            })
        }, 1000);
        //To redirect you to the home 
        // after submit form 
        history.push('/');
    }
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
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
                {/*
                 To display Add blog since the default isLoading = true and when we click disappear
                and the disabled button appears
                */}
                {!isLoading && <button>Add Blog</button>}
                {/* we process with your POST request */}
                {isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
    );
}

export default Create;