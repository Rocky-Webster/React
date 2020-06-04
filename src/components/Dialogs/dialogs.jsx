import React from 'react';

import Username from "./username/username";
import Messages from "./messages/messages";
import {NavLink} from "react-router-dom";

import './dialogs.css'

const Dialogs = (props) => {


    let users = [
        {id: 1, name: "Nikita Chelyshev"},
        {id: 2, name: "Egor Gerasimov"},
        {id: 3, name: "Nikita Vinnichenko"},
        {id: 4, name: "Khezret Sukhanguliev"},
        {id: 5, name: "Daria Valts"},
        {id: 6, name: "Vladimir Baryshev"},
        {id: 7, name: "Nikita Chelyshev 1"},
        {id: 8, name: "Nikita Chelyshev 2"},
        {id: 9, name: "Nikita Chelyshev 3"},
        {id: 10, name: "Nikita Chelyshev 4"}
    ]

    let usersElements = users
        .map( user => <Username name={user.name} id={user.id} /> )


    return (
        <div className="display">
            <div className="dialogs">
                { usersElements }
            </div>
            <div className="Messages">
                <Messages name={users[0].name}/>
            </div>
        </div>
    )
}

export default Dialogs