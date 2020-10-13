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

       const routeStyle = {
        padding:"4px 13px",
        margin:"0",
        borderRadius:".25rem"
       }
       
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
                        <a className="textCover">Getting started</a>
                    </li>
                    <ul>
                        <li className={ApiStyle.linked} >
                        <NavLink exact to='/intro'>Barikoi Places API</NavLink>
                        </li>
                    </ul>
                </ul>
                <ul>
                    <li className="subHeader">
                        <a className="textCover">Barikoi Places API</a>
                    </li>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/rev-geo'>Reverse Geocode</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/geo-server'>Reverse Geocoding (Server)</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/geo-code'>Geocoding</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/autocomplete'>Autocomplete</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/nearby'>Nearby</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/distance'>Distance</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/rupantor'>Rupantor Geocoder</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/route-api'>Routing Api</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/add-place'>Add Place</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/district'>District Api</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/sub-district'>Sub-District Api</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/city-api'>City Api</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/union-api'>Union Api</Link>
                        </li>
                    </ul>
                    
                </ul>
                <ul>
                    <li className="subHeader">
                        <a className="textCover">City Corporation API</a>
                    </li>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/ward-by-location'>Ward by Geo location</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to='/zone-by-location'>Zone by Geo location</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to="/ward-zone-by-location">Ward {"&"} Zone by Geolocation</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link exact to="/city-corp-by-location">City Corporation by Geolocation</Link>
                        </li>
                    </ul>
                    
                </ul>
                    </div> : null
                }
            </ul>
        </div>
     );
}
 
export default Radium(Api);