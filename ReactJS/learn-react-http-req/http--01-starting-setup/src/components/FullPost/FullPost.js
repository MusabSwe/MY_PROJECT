import React, { Component } from 'react';
import axios from 'axios';
import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null, // defualt null
    }

    componentDidUpdate() {
        // this.props.id is the received id when we click on the post
        // on the home page
        if (this.props.id) {
            // To avoid infine loop in network section dev tools
            if (!this.state.loadedPost || (this.state.loadedPost && this.props.id !== this.state.loadedPost.id)) {
                axios.get(`/posts/` + this.props.id)
                    .then(res => {
                        // console.log(res);
                        this.setState({ loadedPost: res.data })
                    });
            }
        }
    }

    deleteHandler = () => {
        axios.delete(`/posts/` + this.props.id)
            .then(res => {
                console.log(res);
            })
    }

    render() {
        let post = <p style={{ textAlign: "center" }}>Please select a Post!</p>;
        // we recieve the id, but we can not access the post 
        // until we fetch the data
        if (this.props.id) {
            post = <p style={{ textAlign: "center" }}>Loading...</p>;
        }
        // if the data fetched then display content of the post
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost">
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button onClick={this.deleteHandler} className="Delete">Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;