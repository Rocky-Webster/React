import React from 'react';
import './App.css';
import Header from './components/header.js';
import Profile from './components/profile.jsx';
import Sidebar from './components/sidebar';


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
