import React, { Component } from 'react';
import './Blog.css';
import Posts from './Posts/Posts';
import { Routes, Route, NavLink, Navigate } from 'react-router-dom'
import NewPost from './NewPost/NewPost'
// import FullPost from './FullPost/FullPost';
import { withRouter2 } from '../../withRouter2';
import FullPost from './FullPost/FullPost';

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
                    <Route path='/posts/:id' element={<FullPost />} />
                    <Route path='/' element={<Posts />} />
                    <Route path='/new-post' element={<NewPost />} />
                    <Route path='/posts/1' element={<Navigate to='/new-post' />} />
                </Routes>
            </div>
        );
    }
}

export default withRouter2(Blog);