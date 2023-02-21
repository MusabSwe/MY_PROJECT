// Hook
import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: "Welcome party!", body: "lorem ipsum...", author: "Yoshi", id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);
    const [name, setName] = useState('mario');

    const handleDelete = (id) => {
        // console.log(id);
        const newBlogs = blogs.filter(b => b.id !== id);
        setBlogs(newBlogs);
    };

    useEffect(() => {
        // used with authenticate data
        // or with fetching data
        console.log('use effect ran')
    }, []);
    // the 2nd param called dependency it works at triger if the value change
    //  then useEffect rerender 
    // is used to determine how mant times 
    // the function is rerender, so the [] empty array symbol means
    //  run at the launch of application, but when update the DOM 
    // does not run

    return (
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            {/* <BlogList blogs={blogs.filter(a => a.author == "mario")} title="Mario's Blogs!"/> */}
            <button onClick={() => { setName('Ahmed') }}>change Name</button>
            <p>{name}</p>
        </div>
    );
}

export default Home;
