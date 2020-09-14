import React, { Component } from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"
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
                        <Nav.Link href="#features" className={`${NavStyle.docs} pl-0`}>docs</Nav.Link>
                        </Nav>
                        <Nav>
                        {/* <Nav.Link className={NavStyle.login}>Android Location Library</Nav.Link>
                        <Nav.Link className={NavStyle.login}>Pricing</Nav.Link> */}
                        <Nav.Link className={NavStyle.login}>Log in</Nav.Link>
                        <Nav.Link className={NavStyle.signup}>Sign up
                        <FontAwesomeIcon className="pl-1" icon={faLongArrowAltRight} />
                        </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
         );
    }
}
 
export default MainNav;