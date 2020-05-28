import React from 'react';
import './App.css';
import Header from './components/header/header.js';
import Profile from './components/profile/profile.jsx';
import Sidebar from './components/sidebar/sidebar';


function App() {
  return (
    <div>
        <Header />
        <Sidebar />
        <Profile />
    </div>
  );
}

export default App;
