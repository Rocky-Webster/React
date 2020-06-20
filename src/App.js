import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './App.css';

import Header from './components/header/header.js';
import Sidebar from './components/sidebar/sidebar';
import Profile from './components/profile/profile.jsx';
import Feed from "./components/feed/feed";
import Dialogs from "./components/Dialogs/dialogs";


const App = (props) => {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Sidebar/>
                <div className="content">
                    <div className="wrapper">
                        <Route path="/profile" render={() => <Profile
                            profilePage={props.state.profilePage}
                            dispatch={props.dispatch}/>}
                        />
                        <Route path="/feed" render={() => <Feed/>}/>
                        <Route path="/dialogs" render={() => <Dialogs users={props.state.dialogsPage.users}
                                                                      dispatch={props.dispatch}
                                                                      dialogsPage={props.state.dialogsPage}/>}/>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
