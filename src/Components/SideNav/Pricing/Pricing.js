import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons'

const Pricing = props => {
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
                    <span>Pricing</span>
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
                    <ul>
                        <li>
                        <a>General information about our pricing</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>What is one call</a>
                        </li>
                    </ul>
                    <ul>
                        <li>
                        <a>What happens when i go over the call limit</a>
                        </li>
                    </ul>
                </ul>
                <ul>
                    <li>
                        <a>Billing Cycle</a>
                    </li>
                    <ul>
                        <li>
                        <a>Billing Cycle</a>
                        </li>
                    </ul> 
                </ul>
                
                    </div> : null
                }
            </ul>
        </div>
     );
}
 
export default Pricing;