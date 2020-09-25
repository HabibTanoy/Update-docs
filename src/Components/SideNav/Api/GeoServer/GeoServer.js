import React from 'react';
import serverStyle from '../GeoServer/server.module.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const GeoServer = props => {
    return ( 
        <div>
            <h1 className={`mt-4 ${serverStyle.api}`}>Reverse Geocoding (Server)</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={serverStyle.get}>GET</code>
              Reverse Geocoding Server API
          </p>
          <pre className={serverStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/reverse/geocode/server/API_KEY/place?longitude=90.1224&latitude=23.7567&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true</span>
                  </div>
                  <button type="button" className={serverStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <p>Returns an address given longitude and latitude.</p>
          <h2 className={`mt-4 mb-3 ${serverStyle.intro}`}>API PARAMS</h2>
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
                  <td>longitude</td>
                  <td>90.3737</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>latitude</td>
                  <td>23.7881</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>district</td>
                  <td>true</td>
                  <td></td>
                </tr>
                <tr>
                  <td>post_code</td>
                  <td>true</td>
                  <td></td>
                </tr>
                <tr>
                  <td>country</td>
                  <td>true</td>
                  <td></td>
                </tr>
                <tr>
                  <td>sub_district</td>
                  <td>true</td>
                  <td></td>
                </tr>
                <tr>
                  <td>union</td>
                  <td>false</td>
                  <td></td>
                </tr>
                <tr>
                  <td>pauroshova</td>
                  <td>false</td>
                  <td></td>
                </tr>
                <tr>
                  <td>location_type</td>
                  <td>true</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <h2 className={`mt-5 mb-3 ${serverStyle.intro}`}>Reverse Geocoding Server API Request Example</h2>
          <pre className={serverStyle.coding}>
              <code>
                  <div>
                      <span className="mr-3">fetch('https://barikoi.xyz/v1/api/search/reverse/geocode/server/API_KEY/place?longitude=90.1224&latitude=23.7567&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true')</span>
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
                      <button type="button" className={serverStyle.copyBtn}>Copy</button>
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${serverStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={serverStyle.coding}>
              <code>
                  <div>
                  <span className={serverStyle.smsColor}>{props.brek}</span>
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
                  <span className={serverStyle.smsColor}>{props.endBrk},</span>
                  </div>
                  <div>
                  <span>"status": 200</span> 
                  </div>
                  </div>
                  <div>
                  <span className={serverStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={serverStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>
          <Row className={serverStyle.testing}>
            <Col sm={6}> 
            <div className={`mb-4 ${serverStyle.previous}`}>
              <Link to='/rev' className={serverStyle.next}>
                  <h5 className={serverStyle.onlyNext}>Previous</h5>
                  <h4 className={`mb-0 ${serverStyle.rev}`}>
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                    Reverse Geocode</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${serverStyle.previous}`}>
              <Link to='/geo-code' className={serverStyle.next}>
                  <h5 className={serverStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${serverStyle.rev}`}>Geocoding
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default GeoServer;