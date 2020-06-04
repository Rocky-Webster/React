import React from 'react';
import './myposts.css'
import Post from './post/mypost'


function Myposts() {

    let posts = [
        {id: 1, message: "Why nobody loves me?"},
        {id: 2, message: "It was a good day."},
        {id: 3, message: "Hi! This is my first post here. ", age: " My age is 18"},

    ]
    let postsElements = posts
        .map(post => <Post message={post.message} age={post.age} /> )


    return(
        <div >
            { postsElements }
        </div>
    );
}

export default Myposts;