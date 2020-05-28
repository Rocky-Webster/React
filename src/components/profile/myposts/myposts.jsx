import React from 'react';
import './myposts.css'
import Post from './post/mypost'


function Myposts() {
    return(
        <div >
            <Post message="Why nobody loves me?" />
            <Post message="It was a good day." />
            <Post message="Hi! This is my first post here." age=" My age is 18" />
        </div>
    );
}

export default Myposts;