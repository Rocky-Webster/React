import React from 'react';
import './myposts.css'
import Post from './post/mypost'


function Myposts(props) {
    let postsElements = props.posts
        .map(post => <Post message={post.message} age={post.age}/>)

    let newPostElement = React.createRef()

    let addPost = () => {
        props.addPost()
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className='myposts'>
            <div className='myposts__add'>
                <textarea className="myposts__add-texarea" onChange={onPostChange} ref={newPostElement}
                          value={props.newPostText}></textarea>
                <button className="myposts__add-button" onClick={addPost}>Add new post</button>
            </div>
            {postsElements}
        </div>
    );
}

export default Myposts;