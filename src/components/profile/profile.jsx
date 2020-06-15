import React from 'react';
import './profile.css'

import Information from './user-info/information';
import Myposts from './myposts/myposts';

function Profile(props) {
    return (
        <div>
            <div className="wrapper">
                <div className="profileBg">
                    <Information/>
                    <Myposts posts={props.profilePage.posts}
                             newPostText={props.profilePage.newPostText}
                             addPost={props.addPost}
                             updateNewPostText={props.updateNewPostText}
                    />
                </div>
            </div>
        </div>
    );
}

export default Profile;
  