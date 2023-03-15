import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'

import asyncComponent from '../../hoc/asyncComponent';
// import NewPost from './NewPost/NewPost'

import FullPost from './FullPost/FullPost';

const AsyncNewPost = asyncComponent(() => {
    return import('./NewPost/NewPost');
})
class Blog extends Component {
    state = {
        auth: true,
    }
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
                    <Route path='/posts/:id' element={<FullPost />} />
                    {this.state.auth ? <Route path='/new-post' element={<AsyncNewPost />} /> : null}
                    {/* <Route path='/posts' element={<Posts />} /> */}
                    <Route path='/' element={<Posts />} />
                    <Route path='/*' element={<h4>Not Found</h4>} />
                </Routes>
            </div>
        );
    }
}

export default Blog;