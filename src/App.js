import React from 'react';
import './App.css';
import MainNav from './Components/Navbar/MainNav'
import SideNav from './Components/SideNav/Sidebar/Sidebar'
import Radium from 'radium'

function App() {
  return (
    <div>
      <MainNav />
      <SideNav />
    </div>
  );
}

export default Radium(App);
