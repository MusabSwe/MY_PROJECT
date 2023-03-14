import axios from "../../../axios";
import Post from '../../../components/Post/Post'
import './Posts.css'
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Route, Routes } from "react-router";
import FullPost from "../FullPost/FullPost";
// import { Link } from "react-router-dom";
const Posts = (props) => {

    const [posts, setPosts] = useState([]);
    const [selectedPostId, setSelectedPostId] = useState(null);
    const [error, setError] = useState(false);

    const Navigate = useNavigate();

    useEffect(() => {
        axios.get('/posts')
            .then(res => {
                // to fetch the first 3 posts since it has huge data and make the 
                // faster by using pagination 
                const posts = res.data.slice(0, 4);
                // 
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: "Max"
                    }
                });
                setPosts(updatePosts);
                console.log(res);
            }).catch(e => {
                console.log(e);
                setError(true)
            });
    }, []);

    // listener handler
    const postSelectedHandler = (id) => {
        // setSelectedPostId(id);
        Navigate('/posts/' + id)
    }

    let posts2 = <p style={{ textAlign: 'center' }}>Something went wrong</p>;
    // console.log(!this.state.error)
    if (!error)
        posts2 = posts.map(post => {
            return (
                // Square posts
                // <Link className="post-card" key={post.id} to={`/post/${post.id}`}>
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    // when we click on the post
                    // event listener invoke & receive id 
                    // and assign it to the state to use it in the differnt location
                    clicked={() => postSelectedHandler(post.id)}
                />
                //{/* </Link> */}
            );
        })
    return (
        <div>
            <section className="Posts">
                {posts2}
            </section>
        </div>
    );
}

export default Posts;