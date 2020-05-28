import React from 'react';
import './header.css';

function Header(){
    return(
        <div className="header">
            <ul>
                <li>
                    <a href="#!">HTML</a>
                </li>
                <li>
                    <a href="#!">CSS</a>
                </li>
                <li>
                    <a href="#!">JS</a>
                </li>
                <li>
                    <a href="#!">React</a>
                </li>
            </ul>
        </div>
    );
}

export default Header;