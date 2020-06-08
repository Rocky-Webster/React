import React from 'react';
import './myposts.css'
import Post from './post/mypost'


function Myposts(props) {


    let postsElements = props.posts
        .map(post => <Post message={post.message} age={post.age} /> )


    return(
        <div >
            { postsElements }
        </div>
    );
}

export default Myposts;