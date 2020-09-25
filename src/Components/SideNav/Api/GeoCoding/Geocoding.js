import React from 'react';
import GeoStyle from '../GeoCoding/Geocode.module.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const GeoCoding = (props) => {
    return ( 
        <div>
            <h1 className={`mt-4 ${GeoStyle.api}`}>Geocoding</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={GeoStyle.get}>GET</code>
              Geocoding API
          </p>

          <pre className={GeoStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/geocode/API_KEY/place/place_id</span>
                  </div>
                  <button type="button" className={GeoStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <p>Geocode API for Developers. This returns location data of a specific place.</p>
          <h2 className={`mt-4 mb-3 ${GeoStyle.intro}`}>URL PARAM</h2>

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
                  <td>place_id</td>
                  <td>3354</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-5 mb-3 ${GeoStyle.intro}`}>Geocoding API Request Example</h2>
          <pre className={GeoStyle.coding}>
              <code>
                  <div>
                      <span className="mr-3">fetch('https://barikoi.xyz/v1/api/search/geocode/API_KEY/place/3354')</span>
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
                      <button type="button" className={GeoStyle.copyBtn}>Copy</button>
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${GeoStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={GeoStyle.coding}>
              <code>
                  <div>
                  <span className={GeoStyle.smsColor}>{props.brek}</span>
                  </div>
                  <div className="ml-4">
                  <div>
                  <span>"place": {props.brek}</span>
                  </div>
                  <div>
                  <span>"id": 394605,</span>
                  </div>
                  <div>
                  <span>"distance_within_meters": 0,</span> 
                  </div>
                  <div>
                  <span>"address": "Charigram",</span> 
                  </div>
                  <div>
                  <span>"area": " Singair",</span> 
                  </div>
                  <div>
                  <span>"city": " Manikganj",</span> 
                  </div>
                  <div>
                  <span>"postCode": 1820,</span> 
                  </div>
                  <div>
                  <span>"location_type": "Rural",</span> 
                  </div>
                  <div>
                  <span>"district": "Manikganj",</span> 
                  </div>
                  <div>
                  <span>"country": "Bangladesh",</span> 
                  </div> 
                  <div>
                  <span>"sub_district": "Singair",</span> 
                  </div>
                  <div>
                  <span>"union": "Charigram",</span> 
                  </div>
                  <div>
                  <span>"pauroshova": null</span> 
                  </div>
                  <div>
                  <span className={GeoStyle.smsColor}>{props.endBrk},</span>
                  </div>
                  <div>
                  <span>"status": 200</span> 
                  </div>
                  </div>
                  <div>
                  <span className={GeoStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={GeoStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>
          <Row className={GeoStyle.testing}>
            <Col sm={6}> 
            <div className={`mb-4 ${GeoStyle.previous}`}>
              <Link to='/geo-server' className={GeoStyle.next}>
                  <h5 className={GeoStyle.onlyNext}>Previous</h5>
                  <h4 className={`mb-0 ${GeoStyle.rev}`}>
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                    Reverse Geocoding (Server)</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${GeoStyle.previous}`}>
              <Link to='/geo-code' className={GeoStyle.next}>
                  <h5 className={GeoStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${GeoStyle.rev}`}>Autocomplete
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default GeoCoding;