// Hook
import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    const handleDelete = (id) => {
        console.log(id);
        const newBlogs = blogs.filter(b => b.id !== id);
        setBlogs(newBlogs);
    };
    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter(a => a.author == "mario")} title="Mario's Blogs!"/> */}
        </div>
    );
}

export default Home;
