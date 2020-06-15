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
                             dispatch={props.dispatch}/>
                </div>
            </div>
        </div>
    );
}

export default Profile;
  