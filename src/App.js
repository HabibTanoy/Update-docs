import React from 'react';
import './App.css';
import MainNav from './Components/Navbar/MainNav'
import SideNav from './Components/SideNav/Sidebar/Sidebar'
import Radium from 'radium'
import { BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <MainNav />
      <SideNav />
      </BrowserRouter>
    </div>
  );
}

export default Radium(App);
