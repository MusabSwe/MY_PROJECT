import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
// import axios from 'axios';
import axios from '../../axios';

class Blog extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    }
    // to communicate with a server in a class component 
    componentDidMount() {
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
                this.setState({ posts: updatePosts });
                console.log(res);
            }).catch(e => {
                console.log(e);
                this.setState({ error: true })
            });
    }

    postSelectedHandler = (id) => {
        this.setState({ selectedPostId: id });
    }

    render() {
        const posts = this.state.posts.map(post => {
            return (
                // Square posts
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    // when we click on the post
                    // event listener invoke & receive id 
                    // and assign it to the state to use it in the differnt location
                    clicked={() => this.postSelectedHandler(post.id)}
                />
            );
        })
        return (
            <div>

                <section className="Posts">
                    {this.state.error ? <p>something went wrong</p> :  posts}
                </section>
                <section>
                    {/* To pass the selected id in the FullPost component */}
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;