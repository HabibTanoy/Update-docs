import React from 'react';
import WZStyle from '../WardZoneApi/WardZone.module.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const WardZoneApi = props => {
    return ( 
        <div>
            <h1 className={`mt-4 ${WZStyle.api}`}>Ward {"&"} Zone by Geolocation</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={WZStyle.get}>GET</code>
              Ward and Zone by Geolocation
            </p>
            <pre className={WZStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode</span>
                  </div>
                  <button type="button" className={WZStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <p>Returns the ward and zone of given longitude and latitude.</p>

          <h2 className={`mt-4 mb-3 ${WZStyle.intro}`}>API PARAMS</h2>

          <div className="w-50">
            <Table striped bordered>
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Value</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>longitude</td>
                  <td>90.418619474572</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>latitude</td>
                  <td>23.83136348674859</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${WZStyle.intro}`}>Ward and Zone by Geolocation API Request Example</h2>
          <div className="mt-3">
          <pre className={WZStyle.coding}>
              <code>
                  <div>
                  <span className={WZStyle.smsColor}>{props.brek}</span>
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
                  <span className={WZStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={WZStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div> 

          <h2 className={`mt-3 mb-3 ${WZStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={WZStyle.coding}>
              <code>
                  <div>
                  <span className={WZStyle.smsColor}>{props.brek}</span>
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
                  <span className={WZStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={WZStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${WZStyle.previous}`}>
              <Link to='/zone-by-location' className={WZStyle.next}>
                  <h5 className={WZStyle.onlyNext}>Previous</h5>
                  <h4 className={`mb-0 ${WZStyle.rev}`}>
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Zone by Geolocation</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${WZStyle.previous}`}>
              <Link to='/city-corp-by-location' className={WZStyle.next}>
                  <h5 className={WZStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${WZStyle.rev}`}> Ward {"&"} City Corporation by Geolocation
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default WardZoneApi;