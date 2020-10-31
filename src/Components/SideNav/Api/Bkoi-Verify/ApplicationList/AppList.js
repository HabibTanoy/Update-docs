import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const AppList = () => {
    document.title = "Application List . Barikoi Documentation";
    return(
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Application List</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Application List
            </p>
            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://admin.barikoi.xyz:8090/applications?dateFrom=2020-07-31&dateTill=2020-10-31&status=0&paginate=20</span>
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
        <td>dateFrom</td>
        <td>2020-07-31</td>
        <td>Requied</td>
      </tr>
      <tr>
        <td>dateTill</td>
        <td>2020-10-31</td>
        <td>Requied</td>
      </tr>
      <tr>
        <td>status</td>
        <td>0</td>
        <td>Requied</td>
      </tr>
      <tr>
        <td>paginate</td>
        <td>20</td>
        <td></td>
      </tr>
    </tbody>
  </Table>
</div>  
<h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3 mb-5">
          <pre className={Style.coding}>
          <code>
              <div>
              <div className="txtColor">
              <span> {"{"} </span><br />
              <div className="ml-4">
              <span>"applications": {"{"}</span><br />
              <div className="ml-3">
              <span className="txtColor">"current_page": <span className="url">1,</span></span><br/>
              <span>"date": [</span>
              </div>
              <div className="ml-5">
              <span>"id": <span className="url">265</span>,</span>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"application_id": </span>
                <span className="url">"SU-3110202004"</span>
              </div>
              <div>
                <span className="txtColor">"application_type": </span>
                <span className="url">"3",</span>
              </div>
              <div>
                <span className="txtColor">"applicant_name": </span>
                <span className="url">"Tanjed Atono",</span><br />
                {/* <span className="txtColor">"postCode": 1820,</span> */}
              </div>
              <div>
                <span className="txtColor">"task_ids": </span>
                <span className="url">"563",</span>
              </div>
              <div>
                <span className="txtColor">"start_date": </span>
                <span className="url">"2020-10-31 14:20:25",</span>
              </div>
              <div>
                <span className="txtColor">"sla": </span>
                <span className="url">"2020-11-01 14:20:25",</span>
              </div>
              <div>
                <span className="txtColor">"end_date": </span>
                <span className="txt">"null",</span>
              </div>
              <div>
                <span className="txtColor">"is_finished": </span>
                <span className="url">"0",</span>
              </div>
              <div>
                <span className="txtColor">"is_verified": </span>
                <span className="url">"0</span>
              </div>
              <div>
                <span className="txtColor">"agents": </span>
                <span className="txt">"null",</span>
              </div>
              <div>
                <span className="txtColor">"report_file": </span>
                <span className="txt">"null",</span>
              </div>
              <div>
                <span className="txtColor">"issues": </span>
                <span className="txt">[]</span>
              </div>
              </div>
              <div className="txtColor ml-4">
              <span> {"},"} </span><br />
              <span> "status": 200</span><br />
              
              </div>
              <span> {"}"} </span><br />
              </div>
                  {/* <button type="button" className={geoStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
          </div>
            <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/app-create'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Create Application
                  </h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/app-details'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Application Details
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
    )
}

export default AppList;