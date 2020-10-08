import React from 'react';
import DistStyle from '../Distance/Distance.module.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const Distance = props => {
    return ( 
        <div>
            <h1 className={`mt-4 ${DistStyle.api}`}>Distance</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={DistStyle.get}>GET</code>
              Distance API
            </p>

            <pre className={DistStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/distance/API_KEY/SOURCE_LONGITUDE,SOURCE_LATITUDE/TARGET_LONGITUDE,TARGET_LATITUDE</span>
                  </div>
                  <button type="button" className={DistStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <p>Distance API for Developers. This returns the distance between of a two place.</p>

          <h2 className={`mt-4 mb-3 ${DistStyle.intro}`}>API PARAMS</h2>

          <div className="w-50">
            <Table striped bordered hover>
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Value</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SOURCE_LONGITUDE</td>
                  <td>90.39534587</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>SOURCE_LATITUDE</td>
                  <td>23.86448886</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>TARGET_LONGITUDE</td>
                  <td>90.3673</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>TARGET_LATITUDE</td>
                  <td>23.8340</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-5 mb-3 ${DistStyle.intro}`}>Distance API Request Example</h2>

          <pre className={DistStyle.coding}>
              <code>
                  <div>
                      <span className="mr-3">fetch('https://barikoi.xyz/v1/api/distance/API_KEY/90.39534587,23.86448886/90.3673,23.8340')</span>
                      </div>
                      <div>
                      <span>.then(response ={'>'} response.json())</span>
                      </div>
                      <div>
                      <span>.catch(error ={'>'} console.error('Error:', error))</span>
                      </div>
                      <div>
                      <span>.then(response ={'>'} console.log('Success:', response))</span>
                      </div>
                      <button type="button" className={DistStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <h2 className={`mt-3 mb-3 ${DistStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={DistStyle.coding}>
              <code>
                  <div>
                  <span className={DistStyle.smsColor}>{props.brek}</span>
                  </div>
                  <div className="ml-4">
                  <div>
                  <span>"Distance": "7.8473 KM",</span>
                  </div>
                  <div>
                  <span>"status": 200</span> 
                  </div>
                  </div>
                  <div>
                  <span className={DistStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={DistStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>
          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${DistStyle.previous}`}>
              <Link to='/nearby' className={DistStyle.next}>
                  <h5 className={DistStyle.onlyNext}>Previous</h5>
                  <h4 className={`mb-0 ${DistStyle.rev}`}>
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Nearby</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${DistStyle.previous}`}>
              <Link to='/rupantor' className={DistStyle.next}>
                  <h5 className={DistStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${DistStyle.rev}`}>Rupantor Geocoder
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default Distance;