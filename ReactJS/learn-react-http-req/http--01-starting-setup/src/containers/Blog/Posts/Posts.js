import axios from "../../../axios";
import Post from '../../../components/Post/Post'
import './Posts.css'
import React ,{ Component } from "react";
class Posts extends Component {
    state = {
        posts: [],
        selectedPostId: null,
        error: false,
    }

    componentDidMount() {
        console.log(this.props);
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
        let posts = <p style={{ textAlign: 'center' }}>Something went wrong</p>;
        // console.log(!this.state.error)
        if (!this.state.error)
            posts = this.state.posts.map(post => {
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
            <section className="Posts">
                {posts}
            </section>
        );
    }
}

export default Posts;