import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Routes, Route, Link } from 'react-router-dom'
import NewPost from './NewPost/NewPost'

class Blog extends Component {

    // to communicate with a server in a class component 
    render() {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><Link to='/'>Home</Link></li>
                            {/* <li><Link to='/new-post'>New Post</Link></li> */}
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link></li>
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