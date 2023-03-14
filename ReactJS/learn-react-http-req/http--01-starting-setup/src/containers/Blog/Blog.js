import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Routes, Route } from 'react-router-dom'

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
                </Routes>
                {/* <Posts /> */}
            </div>
        );
    }
}

export default Blog;