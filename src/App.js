import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom'

import './App.css';

import Header from './components/header/header.js';
import Sidebar from './components/sidebar/sidebar';
import Profile from './components/profile/profile.jsx';
import Feed from "./components/feed/feed";
import Dialogs from "./components/Dialogs/dialogs";


function App() {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Sidebar/>
                <div className="content">
                    <div className="wrapper">
                        <Route path="/profile" component={Profile}/>
                        <Route path="/feed" component={Feed}/>
                        <Route path="/dialogs" component={Dialogs}/>

                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
