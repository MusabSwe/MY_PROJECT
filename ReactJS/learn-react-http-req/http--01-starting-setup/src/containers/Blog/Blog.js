import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Routes, Route, NavLink } from 'react-router-dom'
import NewPost from './NewPost/NewPost'

class Blog extends Component {

    // to communicate with a server in a class component 
    render() {
        return (
            <div className='Blog'>
                <header>
                    <nav>
                        <ul>
                            <li><NavLink className={navData => (navData.isActive ? 'active' : 'link')} to='/'>Home</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}
                            className={navData => (navData.isActive ? 'active' : 'link')}
                            > New Post</NavLink></li>
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