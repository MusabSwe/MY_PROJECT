// Hook
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                if (!res.ok) {
                    throw Error('could not fetch the data for that resource');
                }
                return res.json();
            })
            .then(data => {
                setBlogs(data)
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                setIsPending(false);
                setError(err.message);
            });
    }, []);

    return (
        <div className="home">
            {error && <div>{error}</div>}
            {/* conditional optional 
            since the data we retrieve it using fetch and need some time to retrieve 
            so we make this conditdion until the DB be ready to retrieve 
            */}
            {isPending && <div>loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!" />}

        </div>
    );
}

export default Home;
