import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Radium from 'radium'
import ApiStyle from '../Api/Api.module.css'

const JsApi = props => {
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
                    <span>JavaScript Library</span>
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
                        <a>Getting started</a>
                        </li>
                    </ul>
                </ul>
                <ul>
                    <li className="subHeader">
                        <a className="textCover">Barikoi.JS</a>
                    </li>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Search</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Geocoding</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Reverse Geocoding</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Nearby</a>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <a>Autocomplete Tutorial</a>
                        </li>
                    </ul>
                </ul>
                
                    </div> : null
                }
            </ul>
        </div>
     );
}
 
export default Radium(JsApi);