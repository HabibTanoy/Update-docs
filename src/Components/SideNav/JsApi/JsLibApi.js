import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

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
    return ( 
        <div>
             <ul>
                <li>
                    <a onClick={props.isToggle} >
                    <span>JavaScript Library</span>
                        <span>{Font}</span>
                        </a>
                </li>
                {
                    props.toggle === true ? 
                    <div>
                        <ul>
                    <li>
                        <a>Getting started</a>
                    </li>
                    <ul>
                        <li>
                        <a>Getting started</a>
                        </li>
                    </ul>
                </ul>
                <ul>
                    <li>
                        <a>Barikoi.JS</a>
                    </li>
                    <ul>
                        <li>
                        <a>Search</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Geocoding</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Reverse Geocoding</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Nearby</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
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
 
export default JsApi;