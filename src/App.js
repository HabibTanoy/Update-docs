import React, { Component } from 'react';
import './App.css';
import MainNav from './Components/Navbar/MainNav'
import SideNav from './Components/SideNav/Sidebar/Sidebar'
import Radium from 'radium'

// function App() {
class App extends Component {
  state = { 
    toggle: false,
    jsToggle: false,
    AndApi: false,
    pricing: false
 }

toggleHandle = (flag, current_value) => {
    const tempObj = this.state
    Object.keys(tempObj).forEach(key => {
        tempObj[key] = false
    })

    this.setState({
        ...tempObj,
      [flag]: !current_value
    });
    // console.log("Clicked")
  };

  render() { 
    return ( 
      <div>
        <MainNav 
        toggleHandle={this.toggleHandle}
        toggle={this.state.toggle} 
        jsToggle={this.state.jsToggle}
        AndApi={this.state.AndApi}
        pricing={this.state.pricing}
        />
        <SideNav 
        toggleHandle={this.toggleHandle} 
        toggle={this.state.toggle} 
        jsToggle={this.state.jsToggle}
        AndApi={this.state.AndApi}
        pricing={this.state.pricing}
        />
      </div>
     );
  }
}
 
export default Radium(App);

