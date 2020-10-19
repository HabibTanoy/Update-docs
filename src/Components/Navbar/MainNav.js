import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import NavStyle from '../Navbar/Nav.module.css'



class MainNav extends Component {
    state = { 
        offical_address:'https://barikoi.com/'
     }

    
    render() { 
        return ( 
            <div>
                <Navbar collapseOnSelect expand="lg" fixed="top" className={NavStyle.bgChange}>
                    <Navbar.Brand href={this.state.offical_address}>
                    <div className="pl-5">
                       <span className={NavStyle.bari}>Bari</span><span className={`pr-3 ${NavStyle.koi}`}>koi</span>
                    </div>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                        <Link to="/" className={`${NavStyle.docs} pl-0`}>docs</Link>
                        </Nav>
                        <Nav>
                        <Link to="/intro" className={NavStyle.navTag}>API</Link>
                        <Link to="/library-intro" className={NavStyle.navTag}>JavaScript Library</Link>
                        <Link to="/android-intro" className={NavStyle.navTag}>Android Location Library</Link>
                        <Link to="/pricing-intro" className={NavStyle.navTag}>Pricing</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
         );
    }
}
 
export default MainNav;