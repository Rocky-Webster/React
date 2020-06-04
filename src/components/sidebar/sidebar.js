import React from 'react'
import {NavLink} from 'react-router-dom'

import './sidebar.css'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__inner">
                <div className="sidebar__items">
                    <div className="sidebar__item">
                        <NavLink to="/profile" className="sidebar__link">
                            Profile
                        </NavLink>
                    </div>
                    <div className="sidebar__item">
                        <NavLink to="/feed" className="sidebar__link">
                            Feed
                        </NavLink>
                    </div>
                    <div className="sidebar__item">
                        <NavLink to="/dialogs" className="sidebar__link">
                            Messages
                        </NavLink>
                    </div>
                    <div className="sidebar__item">
                        <NavLink to="#!" className="sidebar__link">
                            Friends
                        </NavLink>
                    </div>
                    <div className="sidebar__item">
                        <NavLink to="#!" className="sidebar__link">
                            Photos
                        </NavLink>
                    </div>
                    <div className="sidebar__item">
                        <NavLink to="#!" className="sidebar__link">
                            Music
                        </NavLink>
                    </div>
                    <div className="sidebar__item">
                        <NavLink to="#!" className="sidebar__link">
                            Videos
                        </NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;