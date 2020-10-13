import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const PricingStart = () => {
    return ( 
        <div>
            <h1 className={`mt-4 mb-5 ${Style.api}`}>Getting Started</h1>
            <p className={`mb-5 ${Style.text}`}>Welcome to Barikoi pricing explanation documentation.</p>

            <Row>
            <Col sm={6}> 
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/pricing-general'>
                  <h5>Next</h5>
                  <h4 className="mb-0">General information about our pricing
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default PricingStart;