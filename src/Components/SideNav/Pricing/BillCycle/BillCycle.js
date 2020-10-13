import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons"

const BillCycle = () => {
    return ( 
        <div>
            <h1 className={`mt-4 mb-5 ${Style.api}`}>Billing Cycle</h1>
            <p className={`mb-5 ${Style.text}`}>Default billing cycle start from the day an API key is generated and billed 29 days from the API generation date. The cycle is changeable according to users convenience.</p>
            <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/pricing-limit'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  What happens when i go over the call limit
                  </h4>
              </Link>
          </div>
            </Col>
            {/* <Col sm={6}>
            <div className={`mb-4 ${LimitStyle.previous}`}>
              <Link to='/pricing-details' className={LimitStyle.next}>
                  <h5 className={LimitStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${LimitStyle.rev}`}>Billing Cycle
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col> */}
          </Row>
        </div>
     );
}
 
export default BillCycle;