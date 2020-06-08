import React from 'react';

import Information from './user-info/information';
import Myposts from './myposts/myposts';

function Profile(props) {
    return (
      <div>
        <div className="wrapper">
          <Information />
          <Myposts posts={props.posts} />
        </div>
      </div>
    );
  }
  
  export default Profile;
  