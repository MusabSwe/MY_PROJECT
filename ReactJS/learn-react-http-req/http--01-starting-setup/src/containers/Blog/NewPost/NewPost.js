import axios from 'axios';
import React, { Component } from 'react';
import './NewPost.css';
import { Navigate } from 'react-router';
class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted: false,
    }

    componentDidMount() {
        console.log(this.props);
    }
    postHandler = () => {
        const data = {
            title: this.state.title,
            body: this.state.content,
            author: this.state.author
        }
        axios.post('https://jsonplaceholder.typicode.com/posts', data)
            .then(res => {
                console.log(res);
                this.setState({ submitted: true });
            }).catch(e => console.log(e));
    }
    render() {
        return (
            <div className="NewPost">
                <Navigate to='/posts' replace={true} />
                {/* Instead of <Redirect to='/'/> */}
                {this.state.submitted && <Navigate to='/' replace={true} />}
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" required value={this.state.title} onChange={(event) => this.setState({ title: event.target.value })} />
                <label>Content</label>
                <textarea rows="4" required value={this.state.content} onChange={(event) => this.setState({ content: event.target.value })} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({ author: event.target.value })}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={this.postHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;