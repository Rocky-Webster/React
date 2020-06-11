import React from 'react';
import './myposts.css'
import Post from './post/mypost'


function Myposts(props) {
    let postsElements = props.posts
        .map(post => <Post message={post.message} age={post.age} /> )

    let newPostElement = React.createRef()

    let addPost = () => {
        let text = newPostElement.current.value
        alert(text)
    }

    return(
        <div className='myposts'>
            <div className='myposts__add'>
                <textarea className="myposts__add-texarea" ref={newPostElement}></textarea>
                <button className="myposts__add-button" onClick={ addPost }>Add new post</button>
            </div>
            { postsElements }
        </div>
    );
}

export default Myposts;