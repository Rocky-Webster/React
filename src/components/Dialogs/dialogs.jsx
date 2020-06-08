import React from 'react';

import Username from "./username/username";
import Messages from "./messages/messages";

import './dialogs.css'

const Dialogs = (props) => {




    let usersElements = props.users
        .map( user => <Username name={user.name} id={user.id} /> )


    return (
        <div className="display">
            <div className="dialogs">
                { usersElements }
            </div>
            <div className="Messages">
                <Messages name={props.users[0].name}/>
            </div>
        </div>
    )
}

export default Dialogs