import React from 'react';

import Information from './user-info/information';
import Myposts from './myposts/myposts';

function Profile() {
    return (
      <div>
        <div className="wrapper">
          <Information />
          <Myposts />
        </div>
      </div>
    );
  }
  
  export default Profile;
  