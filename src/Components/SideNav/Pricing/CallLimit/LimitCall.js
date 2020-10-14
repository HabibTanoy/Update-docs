import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const LimitCall = () => {
  document.title = "What happens when i go over the call limit . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>What happens when i go over the call limit</h1>
            <p className={`mb-3 mt-4 ${Style.text}`}>If you go over the daily/monthly call limit your API key will not stop working immediately and you'll get an Email. If this happens frequently, we'll contact you to discuss this. If you go far beyond this daily limit then there is a hard limit to protect our platform from abuse.</p>
            <p className={`mb-5 ${Style.text}`}>Please note that there is also a (permissive) minutely call limit specified in our documentation, which is not reported via Email. If that limit is exceeded you get a bad request (http code 429) and need to delay you requests or buy a bigger package. Currently, this is also a soft limit and we block requests only if you go too much beyond it.</p>

            <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/pricing-call'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  API usage and pricing clearification</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/pricing-details'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Billing Cycle
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default LimitCall;