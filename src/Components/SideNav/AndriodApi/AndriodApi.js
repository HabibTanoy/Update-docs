import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Radium from 'radium'
import ApiStyle from '../Api/Api.module.css'
import { Link } from 'react-router-dom';

const AndriodApi = props => {
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
            backgroundColor:"rgba(0,0,0,.05)",
        }
       }
    return ( 
        <div className="textCover">
             <ul className="lefting">
                <li>
                    <a style={style} onClick={props.isToggle} >
                    <span>Android Location Library</span>
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
                        <li className={ApiStyle.linked}>
                        <Link to="/android-intro">Getting started</Link>
                        </li>
                    </ul>
                </ul>
                <ul>
                    <li className="subHeader">
                        <a className="textCover">Location Library for Android</a>
                    </li>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link to="/android-project">Create an Android Studio project</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link to="/android-location">Barikoi Location Library</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link to="/android-token">Get an access token</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link to="/android-search">Search</Link> 
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}> 
                        <Link to="/android-geocoding">Geocoding</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link to="/android-rev-geocoding">Reverse Geocoding</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link to="/android-nearby">Nearby</Link>
                        </li>
                    </ul>
                </ul>
                
                    </div> : null
                }
            </ul>
        </div>
     );
}
 
export default Radium(AndriodApi);