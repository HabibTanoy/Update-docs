import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const CreateApp = () => {
    document.title = "Create Application . Barikoi Documentation";
    return(
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Create Application</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>POST</code>
              Create Application
            </p>
            
            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://admin.barikoi.xyz:8090/request/verification</span>
                  </div>
                  {/* <button type="button" className={CityStyle.copyBtn}>Copy</button> */}
              </code>
            </pre>

            <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>

          <div className="w-75">
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
                  <td>name</td>
                  <td>Tanjed Atono</td>
                  <td>Requied</td>
                </tr>
                <tr>
                  <td>application_id</td>
                  <td>SU-3110202004</td>
                  <td>Requied</td>
                </tr>
                <tr>
                  <td>application_type</td>
                  <td>3</td>
                  <td>Requied</td>
                </tr>
                <tr>
                  <td>home_address</td>
                  <td>House 115, Road 1, Block F, Banani, Dhaka</td>
                  <td>Requied</td>
                </tr>
                <tr>
                  <td>home_place_name</td>
                  <td>Bhai Bhai Store</td>
                  <td>Requied</td>
                </tr>
                <tr>
                  <td>home_mobile</td>
                  <td>01629535307</td>
                  <td>Requied</td>
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
              <span>"message": </span>
              <span>"Application requested successfully",</span>
              <div>
              <span>"application": {"{"}</span>
              {/* <span>"distance_within_meters": 0,</span><br /> */}
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"id": </span>
                <span className="url">"263"</span>
              </div>
              <div>
                <span className="txtColor">"application_id": </span>
                <span className="url">"SU-3110202002",</span>
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
              <Link to='/city-corp-by-location'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  City Corporation by Geolocation
                  </h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/app-list'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Application List
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
    )
}

export default CreateApp;