// Hook
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState(null);
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
        fetch('http://localhost:8000/blogs')
            .then(res => {
                return res.json()
            }).then(data => {
                setBlogs(data)
                setIsPending(false);
            },);

    }, []);

    return (
        <div className="home">
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
