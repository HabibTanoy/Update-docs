import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'
import Radium from 'radium'
import ApiStyle from '../Api/Api.module.css'

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
                    <span>Pricing</span>
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
                        <Link to="/pricing-intro">Getting started</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link to="/pricing-general">General information about our pricing</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link to="/pricing-call">API usage and pricing clearification</Link>
                        </li>
                    </ul>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link to="/pricing-limit">What happens when i go over the call limit</Link>
                        </li>
                    </ul>
                </ul>
                <ul>
                    <li className="subHeader">
                        <a className="textCover">Billing Cycle</a>
                    </li>
                    <ul>
                        <li className={ApiStyle.linked}>
                        <Link to="/pricing-details">Billing Cycle</Link>
                        </li>
                    </ul> 
                </ul>
                
                    </div> : null
                }
            </ul>
        </div>
     );
}
 
export default Radium(Pricing);