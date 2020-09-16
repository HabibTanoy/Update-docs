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
                        <NavLink exact to='/intro' style={routeStyle}>Barikoi Places API</NavLink>
                        </li>
                    </ul>
                </ul>
                <ul>
                    <li className="subHeader">
                        <a className="textCover">Barikoi Places API</a>
                    </li>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <NavLink exact to='/rev'>Reverse Geocode</NavLink>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link>Reverse Geocoding (Server)</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Geocoding</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Autocomplete</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Nearby</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Distance</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Rupantor Geocoder</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Routing Api</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Add Place</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>District Api</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Sub-District Api</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>City Api</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Union Api</a>
                        </li>
                    </ul>
                    
                </ul>
                <ul>
                    <li className="subHeader">
                        <a className="textCover">City Corporation API</a>
                    </li>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Ward by Geo location</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Zone by Geo location</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Ward & Zone by Geolocation</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>City Corporation by Geolocation</a>
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