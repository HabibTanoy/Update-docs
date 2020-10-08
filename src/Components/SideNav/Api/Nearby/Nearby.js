import React from 'react';
import NearStyle from '../Nearby/Nearby.module.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const Nearby = props => {
    return ( 
        <div>
            <h1 className={`mt-4 ${NearStyle.api}`}>Nearby</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={NearStyle.get}>GET</code>
              Nearby API
            </p>

            <pre className={NearStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v2/api/search/nearby/API_KEY/DISTANCE/LIMIT?longitude=TARGET_LONGITUDE&latitude=TARGET_LATITUDE</span>
                  </div>
                  <button type="button" className={NearStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <p>All Nearby API counts according to the limit parameter or number of places returned in response data</p>

          <h2 className={`mt-4 mb-3 ${NearStyle.intro}`}>API PARAMS</h2>

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
                  <td>90.36668110638857</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>latitude</td>
                  <td>23.83723803415923</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>distance</td>
                  <td>0.5 (km)</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>limit</td>
                  <td>10</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-5 mb-3 ${NearStyle.intro}`}>Nearby API Request Example</h2>

          <pre className={NearStyle.coding}>
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
                      <button type="button" className={NearStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <h2 className={`mt-3 mb-3 ${NearStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={NearStyle.coding}>
              <code>
                  <div>
                  <span className={NearStyle.smsColor}>{props.brek}</span>
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
                  <span className={NearStyle.smsColor}>{props.endBrk},</span>
                  </div>
                  <div>
                  <span>"status": 200</span> 
                  </div>
                  </div>
                  <div>
                  <span className={NearStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={NearStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>
          {/* nearby api with Multiple types */}
          <h2 className={`mt-4 mb-3 ${NearStyle.intro}`}>Nearby API with Multiple Types</h2>
          <p style={{fontSize:"25px"}} className="mt-2 mb-3">
              <code className={NearStyle.get}>GET</code>
              Nearby API with Multiple Types
            </p>
            <pre className={NearStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v2/api/search/nearby/multi/type/API_KEY/DISTANCE/LIMIT?q=PLACE_TYPES&longitude=TARGET_LONGITUDE&latitude=TARGET_LATITUDE</span>
                  </div>
                  <button type="button" className={NearStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <p>This returns data with specific place types</p>
          <h2 className={`mt-4 mb-3 ${NearStyle.intro}`}>API PARAMS</h2>

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
                  <td>90.36668110638857	</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>latitude</td>
                  <td>23.83723803415923</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>q</td>
                  <td>atm,school</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>distance	</td>
                  <td>5 (km)</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>limit</td>
                  <td>5	</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <h2 className={`mt-5 mb-3 ${NearStyle.intro}`}>Nearby API with Multiple Types Request Example</h2>

          <pre className={NearStyle.coding}>
              <code>
                  <div>
                      <span className="mr-3">fetch('https://barikoi.xyz/v2/api/search/nearby/multi/type/API_KEY/5/5?q=atm,school&longitude=90.41634254157543&latitude=23.832393074088362')</span>
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
                      <button type="button" className={NearStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <h2 className={`mt-3 mb-3 ${NearStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={NearStyle.coding}>
              <code>
                  <div>
                  <span className={NearStyle.smsColor}>{props.brek}</span>
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
                  <span className={NearStyle.smsColor}>{props.endBrk},</span>
                  </div>
                  <div>
                  <span>"status": 200</span> 
                  </div>
                  </div>
                  <div>
                  <span className={NearStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={NearStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>
          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${NearStyle.previous}`}>
              <Link to='/autocomplete' className={NearStyle.next}>
                  <h5 className={NearStyle.onlyNext}>Previous</h5>
                  <h4 className={`mb-0 ${NearStyle.rev}`}>
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Autocomplete</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${NearStyle.previous}`}>
              <Link to='/distance' className={NearStyle.next}>
                  <h5 className={NearStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${NearStyle.rev}`}>Distance
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default Nearby;