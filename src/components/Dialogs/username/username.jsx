import React from 'react';

import {NavLink} from "react-router-dom";

import './username.css'

const Username = (props) => {

    let path = "/dialogs/" + props.id

    return (
        <div className="border">

            <div className="username">
                <img
                    src="https://c7.uihere.com/files/831/88/865/user-profile-computer-icons-user-interface-mystique.jpg"
                    className="username__pic">
                </img>
                <NavLink to={path} className="username__links">
                    <div className="username__text">
                        <p className="username__name">
                            {props.name}
                        </p>
                        <p className="username__message">
                            Your message for user
                        </p>
                    </div>
                </NavLink>
            </div>

        </div>

    )
}

export default Username