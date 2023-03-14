import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Routes, Route } from 'react-router-dom'
import NewPost from './NewPost/NewPost'

class Blog extends Component {

    // to communicate with a server in a class component 
    render() {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><a href='/'>Home</a></li>
                            <li><a href='/new-post'>New Post</a></li>
                        </ul>
                    </nav>
                </header>
                <Routes>
                    <Route path='/' element={<Posts />} />
                    <Route path='/new-post' element={<NewPost />} />
                </Routes>
                {/* <Posts /> */}
            </div>
        );
    }
}

export default Blog;