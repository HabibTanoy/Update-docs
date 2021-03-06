import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Radium from 'radium'
import ApiStyle from '../Api/Api.module.css'
import { Link, NavLink } from 'react-router-dom';

const Api = props => {
    const toggler = props.toggle;
    let Font;
    if(toggler) {
        Font = (
            <FontAwesomeIcon icon={faChevronUp} />
        )
    } else {
        Font = (
            <FontAwesomeIcon icon={faChevronDown} />
        )
    }
    const style={
        color: "#606770",
        cursor: "pointer",
        display: "flex",
        justifyContent: "space-between",
        fontSize: "21px",
        padding:'4px 13px',
        margin:'0',
        borderRadius:'.25rem',
        ':hover': {
            backgroundColor:"rgba(0,0,0,.05)"
        }
       }

    //    const routeStyle = {
    //     padding:"4px 13px",
    //     margin:"0",
    //     ':active': {
    //         color: "#2ddbac",
    //         backgroundColor: "rgba(0,0,0,.05)"
    //     }
    //    }
       
    return ( 
        <div className="textCover">
            <ul className="lefting">
                <li >
                    <a style={style} onClick={props.isToggle} >
                    <span>API</span>
                        <span>{Font}</span>
                        </a>
                </li>
                {
                    props.toggle === true ? 
                    <div className={ApiStyle.subUl}>
                        <ul>
                    <li className="subHeader">
                        <span className="textCover">Getting started</span>
                    </li>
                    <ul>
                        <li className={ApiStyle.linked} >
                        <NavLink exact to='/intro'>Barikoi Places API</NavLink>
                        </li>
                    </ul>
                </ul>
                <ul>
                    <li className="subHeader">
                        <span className="textCover">Barikoi Places API</span>
                    </li>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/rev-geo'>Reverse Geocode</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/geo-server'>Reverse Geocoding (Server)</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/geo-code'>Geocoding</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/autocomplete'>Autocomplete</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/nearby'>Nearby</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/distance'>Distance</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/rupantor'>Rupantor Geocoder</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/route-api'>Routing Api</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/add-place'>Add Place</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/district'>District Api</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/sub-district'>Sub-District Api</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/city-api'>City Api</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/union-api'>Union Api</NavLink>
                        </li>
                    </ul>
                    
                </ul>
                
                <ul>
                    <li className="subHeader">
                        <span className="textCover">City Corporation API</span>
                    </li>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/ward-by-location'>Ward by Geo location</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/zone-by-location'>Zone by Geo location</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to="/ward-zone-by-location">Ward {"&"} Zone by Geolocation</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to="/city-corp-by-location">City Corporation by Geolocation</NavLink>
                        </li>
                    </ul>
                    
                </ul>
                {/* <ul>
                <li className="subHeader">
                        <span className="textCover">Barikoi Verify API</span>
                </li>
                <li className="subHeader" id="sub">
                        <span className="textCover">Authentication API</span>
                </li>
                <ul>
                    <li className={ApiStyle.linked}>
                    <NavLink exact to='/verify-login'>Authenticate</NavLink>
                    </li>
                </ul>
                <ul>
                    <li className={ApiStyle.linked}>
                    <NavLink exact to='/verify-logout'>Log Out</NavLink>
                    </li>
                </ul>

                <li className="subHeader" id="sub">
                        <span className="textCover">Verify API</span>
                </li>
                <ul>
                    <li className={ApiStyle.linked}>
                     <NavLink exact to='/app-create'>Create Application</NavLink>
                    </li>
                </ul>
                <ul>
                    <li className={ApiStyle.linked}>
                     <NavLink exact to='/app-list'>Application List</NavLink>
                    </li>
                </ul>
                <ul>
                    <li className={ApiStyle.linked}>
                     <NavLink exact to='/app-details'>Application Details</NavLink>
                    </li>
                </ul>
                <ul>
                    <li className={ApiStyle.linked}>
                     <NavLink exact to='/app-request'>Request Revision</NavLink>
                    </li>
                </ul>
                <ul>
                    <li className={ApiStyle.linked}>
                     <NavLink exact to='/ward-by-location'></NavLink>
                    </li>
                </ul>
                </ul> */}
                    </div> : null
                }
            </ul>
        </div>
     );
}
 
export default Radium(Api);