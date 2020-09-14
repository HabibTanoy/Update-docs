import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

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
    return ( 
        <div>
             <ul>
                <li>
                    <a onClick={props.isToggle} >
                    <span>Android Location Library</span>
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
                        <a>Location Library for Android</a>
                    </li>
                    <ul>
                        <li>
                        <a>Create an Android Studio project</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Barikoi Location Library</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Get an access token</a>
                        </li>
                    </ul>
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
                </ul>
                
                    </div> : null
                }
            </ul>
        </div>
     );
}
 
export default AndriodApi;