import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './FullPost.css';
import { useParams } from 'react-router';

const FullPost = (props) => {

    const [loadedPost, setLoadedPost] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        // To avoid infine loop in network section dev tools
        axios.get(`/posts/` + id)
            .then(res => {
                console.log(res);
                setLoadedPost(res.data);
            });
    }, []);


    const deleteHandler = () => {
        axios.delete(`/posts/` + id)
            .then(res => {
                console.log(res);
            })
    }

    let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
    // we recieve the id, but we can not access the post 
    // until we fetch the data
    if (id) {
        post = <p style={{ textAlign: "center" }}>Loading...</p>;
    }
    // if the data fetched then display content of the post
    if (loadedPost) {
        post = (
            <div className="FullPost">
                <h1>{loadedPost.title}</h1>
                <p>{loadedPost.body}</p>
                <div className="Edit">
                    <button onClick={deleteHandler} className="Delete">Delete</button>
                </div>
            </div>
        );
    }
    return post;
}

export default FullPost;