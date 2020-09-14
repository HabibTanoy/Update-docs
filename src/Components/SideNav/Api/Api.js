import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

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
    return ( 
        <div>
            <ul>
                <li>
                    <a onClick={props.isToggle} >
                    <span>API</span>
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
                        <a>Barikoi Places API</a>
                    </li>
                    <ul>
                        <li>
                        <a>Reverse Geocode</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Reverse Geocoding (Server)</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Geocoding</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Autocomplete</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Nearby</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Distance</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Rupantor Geocoder</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Routing Api</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Add Place</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>District Api</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Sub-District Api</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>City Api</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Union Api</a>
                        </li>
                    </ul>
                    
                </ul>
                <ul>
                    <li>
                        <a>City Corporation API</a>
                    </li>
                    <ul>
                        <li>
                        <a>Ward by Geo location</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Zone by Geo location</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>Ward & Zone by Geolocation</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
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
 
export default Api;