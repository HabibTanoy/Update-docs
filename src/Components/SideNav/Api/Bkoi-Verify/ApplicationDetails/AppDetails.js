import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const AppDetails = () => {
    document.title = "Application Details . Barikoi Documentation";
    return(
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Application Details</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Application Details
            </p>
            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://admin.barikoi.xyz:8090/application/265</span>
                  </div>
                  {/* <button type="button" className={CityStyle.copyBtn}>Copy</button> */}
              </code>
            </pre>

            <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>

<div className="w-50">
  <Table striped bordered>
  <thead>
      <tr>
        <th scope="col">Parameter</th>
        <th scope="col">Value</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>application_id</td>
        <td>265</td>
        <td>Requied</td>
      </tr>
    </tbody>
  </Table>
</div>  
            <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/app-list'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Application List
                  </h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/app-request'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Request Revision
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
    )
}

export default AppDetails;