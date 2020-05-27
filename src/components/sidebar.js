import React from 'react';

function Sidebar() {
    return(
        <div className="sidebar">
            <div className="sidebar__inner">
                <div className="sidebar__items">
                    <div className="sidebar__item">
                        <a href="#!" className="sidebar__link">
                            Profile
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a href="#!" className="sidebar__link">
                            Feed
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a href="#!" className="sidebar__link">
                            Messages
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a href="#!" className="sidebar__link">
                            Friends
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a href="#!" className="sidebar__link">
                            Photos
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a href="#!" className="sidebar__link">
                            Music
                        </a>
                    </div>
                    <div className="sidebar__item">
                        <a href="#!" className="sidebar__link">
                            Videos
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;