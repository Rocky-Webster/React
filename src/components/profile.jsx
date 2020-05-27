import React from 'react';

import Information from './information';
import Profile_content from './profile-content';

function Profile() {
    return (
      <div>
        <div className="wrapper">
          <Information />
          <Profile_content />
        </div>
      </div>
    );
  }
  
  export default Profile;
  