import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const AboutPricing = () => {
  document.title = "General information about our pricing . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 mb-5 ${Style.api}`}>General information about our pricing</h1>
            <p className={`mb-5 ${Style.text}`}>Our pricing is subscription based. You can purchase a plan that fits your requirements which implies a monthly fee. We offer a number of plans out of the box. You can find an overview about these plan on our pricing page. If none of these plans fit your requirements, you probably need a custom plan that you need to negotiate with us directly. Please contact us in this case. When you purchase a plan, you purchase both request limits (in terms of maximum locations and vehicles) and a number of daily calls. calls are Barikoi's currency, i.e. you can spend these calls for whatever API you like. However, costs for each request are dependent on the API you use. To understand the differences, we recommend you to read "What is one call?"</p>

            <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/pricing-intro'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Getting started</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/pricing-call'>
                  <h5>Next</h5>
                  <h4 className="mb-0">API usage and pricing clearification
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default AboutPricing;