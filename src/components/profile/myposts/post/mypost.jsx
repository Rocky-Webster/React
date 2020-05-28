import React from 'react';
import './mypost.css'

function Post(props) {

    return(
        <div className="Post">
            { props.message }     
            { props.age }   
        </div>
    );
}

export default Post;