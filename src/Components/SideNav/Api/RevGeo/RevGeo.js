import React  from 'react';
import geoStyle from '../RevGeo/Geo.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const RevGeo = (props) => {
  return ( 
      <div>
          <h1 className={`mt-4 ${geoStyle.api}`}>Reverse Geocode</h1>
          <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={geoStyle.get}>GET</code>
              Reverse Geocoding API
          </p>
          <pre className={geoStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/reverse/API_KEY/geocode?longitude=90.3737&latitude=23.7881&district=true&post_code=true&country=true&sub_district=true&union=false&pauroshova=false&location_type=true</span>
                  </div>
                  <button type="button" className={geoStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <p>Returns an address given longitude and latitude.</p>
          <h2 className={`mt-4 mb-3 ${geoStyle.intro}`}>API PARAMS</h2>
          <div>
          <table className="table table-striped w-50">
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
            </table>
          </div>
          <div>
          <h2 className={`mt-3 mb-3 ${geoStyle.intro}`}>Rate Limit</h2>
          <p className="mt-3">2000 Requests per minute</p>
          </div>
          <h2 className={`mt-3 mb-3 ${geoStyle.intro}`}>Reverse Geocoding API Request Example</h2>
          <pre className={geoStyle.coding}>
              <code>
                  <div>
                      <span className="mr-3">fetch('https://barikoi.xyz/v1/api/search/reverse/API_KEY/geocode?longitude=90.3737&latitude=23.7881&district=true&post_code=true&country=true&sub_district=true&union=false&pauroshova=false&location_type=true')</span>
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
                      <button type="button" className={geoStyle.copyBtn}>Copy</button>
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${geoStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={geoStyle.coding}>
              <code>
                  <div>
                  <span className={geoStyle.smsColor}>{props.brek}</span>
                  </div>
                  <div className="ml-4">
                  <div>
                  <span>"place": {props.brek}</span>
                  </div>
                  <div>
                  <span>"id": 177936,</span>
                  </div>
                  <div>
                  <span>"distance_within_meters": 1.167,</span> 
                  </div>
                  <div>
                  <span>"address": "Mohosin Uddin, House 462, West Shewrapara",</span> 
                  </div>
                  <div>
                  <span>"area": "Mirpur",</span> 
                  </div>
                  <div>
                  <span>"city": "Dhaka",</span> 
                  </div>
                  <div>
                  <span>"postCode": 1216,</span> 
                  </div>
                  <div>
                  <span>"location_type": "Urban",</span> 
                  </div>
                  <div>
                  <span>"district": "Dhaka",</span> 
                  </div>
                  <div>
                  <span>"country": "Bangladesh"</span> 
                  </div> 
                  <div>
                  <span>"sub_district": "Kafrul"</span> 
                  </div>
                  <div>
                  <span className={geoStyle.smsColor}>{props.endBrk},</span>
                  </div>
                  <div>
                  <span>"status": 200</span> 
                  </div>
                  </div>
                  <div>
                  <span className={geoStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={geoStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>
          <Row className={geoStyle.testing}>
            <Col sm={6}> 
            <div className={`mb-4 ${geoStyle.previous}`}>
              <Link to='/intro' className={geoStyle.next}>
                  <h5 className={geoStyle.onlyNext}>Previous</h5>
                  <h4 className={`mb-0 ${geoStyle.rev}`}>Barikoi Places API</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${geoStyle.previous}`}>
              <Link to='/JS' className={geoStyle.next}>
                  <h5 className={geoStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${geoStyle.rev}`}>Reverse Geocoding (Server)</h4>
              </Link>
          </div>
            </Col>
          </Row>
      </div>
   );
}

export default RevGeo;