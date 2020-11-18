import React, { Component } from 'react';
import {Nav, Navbar, Button} from 'react-bootstrap';
import {Link} from 'react-router-dom'
import NavStyle from '../Navbar/Nav.module.css'



class MainNav extends Component {
    state = { 
        offical_address:'https://barikoi.com/',
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
                        <Link to="/intro" onClick={ () => this.props.toggleHandle("toggle", this.props.toggle) } className={`linked ${NavStyle.navTag}`}>API</Link>
                        <Link to="/library-intro" onClick={ () => this.props.toggleHandle("jsToggle", this.props.toggle) } className={`linked ${NavStyle.navTag}`}>JavaScript Library</Link>
                        <Link to="/android-intro" onClick={ () => this.props.toggleHandle("AndApi", this.props.toggle) } className={`linked ${NavStyle.navTag}`}>Android Location Library</Link>
                        <Link to="/pricing-intro" onClick={ () => this.props.toggleHandle("pricing", this.props.toggle) } className={`linked ${NavStyle.navTag}`}>Pricing</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
         );
    }
}
 
export default MainNav;