import React from 'react';
import WardStyle from '../WardApi/Ward.module.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const WardApi = props => {
    return ( 
        <div>
            <h1 className={`mt-4 ${WardStyle.api}`}>Ward by Geo location</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={WardStyle.get}>GET</code>
              Ward by Geolocation
            </p>
            <pre className={WardStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode</span>
                  </div>
                  <button type="button" className={WardStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <p>Returns the ward of given longitude and latitude.</p>

          <h2 className={`mt-4 mb-3 ${WardStyle.intro}`}>API PARAMS</h2>

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

          <h2 className={`mt-3 mb-3 ${WardStyle.intro}`}>Ward by Geolocation API Request Example</h2>
          <div className="mt-3">
          <pre className={WardStyle.coding}>
              <code>
                  <div>
                  <span className={WardStyle.smsColor}>{props.brek}</span>
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
                  <span className={WardStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={WardStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div> 

          <h2 className={`mt-3 mb-3 ${WardStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={WardStyle.coding}>
              <code>
                  <div>
                  <span className={WardStyle.smsColor}>{props.brek}</span>
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
                  <span className={WardStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={WardStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${WardStyle.previous}`}>
              <Link to='/union-api' className={WardStyle.next}>
                  <h5 className={WardStyle.onlyNext}>Previous</h5>
                  <h4 className={`mb-0 ${WardStyle.rev}`}>
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Union Api</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${WardStyle.previous}`}>
              <Link to='/zone-by-location' className={WardStyle.next}>
                  <h5 className={WardStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${WardStyle.rev}`}>Zone By Geo location
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default WardApi;