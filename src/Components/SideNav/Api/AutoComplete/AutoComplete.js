import React from 'react';
import AutoStyle from '../AutoComplete/Auto.module.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"


const AutoComplete = props => {
    return ( 
        <div>
            <h1 className={`mt-4 ${AutoStyle.api}`}>Autocomplete</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={AutoStyle.get}>GET</code>
              Autocomplete API
            </p>

            <pre className={AutoStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=shopno&latitude=23.873751&longitude=90.396454&scale=0.5</span>
                  </div>
                  <button type="button" className={AutoStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <p>Barikoi Autocomplete. Returns a place's id, longitude, latitude, address, city, area, postCode, pType & uCode</p>
          <h2 className={`mt-4 mb-3 ${AutoStyle.intro}`}>API PARAMS</h2>

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
                  <td>q</td>
                  <td>shopno</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>longitude</td>
                  <td>90.3964</td>
                  <td></td>
                </tr>
                <tr>
                  <td>latitude</td>
                  <td>23.8737</td>
                  <td></td>
                </tr>
                <tr>
                  <td>scale</td>
                  <td>0.5</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <p>Here, Latitude and Longitude and Scale are optional parameters.When Latitude and Longitude are provided in the request parameter then the search result is returned based on the provided longitude latitude.When Scale is provided system will search inside the particular area (in Kilometer) radius.</p>

          <h2 className={`mt-5 mb-3 ${AutoStyle.intro}`}>Geocoding API Request Example</h2>

          <pre className={AutoStyle.coding}>
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
                      <button type="button" className={AutoStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <h2 className={`mt-3 mb-3 ${AutoStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={AutoStyle.coding}>
              <code>
                  <div>
                  <span className={AutoStyle.smsColor}>{props.brek}</span>
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
                  <span className={AutoStyle.smsColor}>{props.endBrk},</span>
                  </div>
                  <div>
                  <span>"status": 200</span> 
                  </div>
                  </div>
                  <div>
                  <span className={AutoStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={AutoStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>
          <p>To get post office autocomplete just add post_office param to request body with the value true</p>
          {/* post office Api */}
          <h2 className={`mt-4 mb-3 ${AutoStyle.intro}`}>Post Office Autocomplete API</h2>
          <p style={{fontSize:"25px"}} className="mt-2 mb-3">
              <code className={AutoStyle.get}>GET</code>
              Post Office API
            </p>
          <pre className={AutoStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=Mirpur&post_office=true</span>
                  </div>
                  <button type="button" className={AutoStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <p>Barikoi Post Office Autocomplete.This API will return only post offices. Returns a place's id, longitude, latitude, address, city, area, postCode, pType & uCode</p>
          <h2 className={`mt-4 mb-3 ${AutoStyle.intro}`}>API PARAMS</h2>

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
                  <td>q</td>
                  <td>Mirpur</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>post_office</td>
                  <td>true</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <h2 className={`mt-5 mb-3 ${AutoStyle.intro}`}>Autocomplete API Request Example</h2>

          <pre className={AutoStyle.coding}>
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
                      <button type="button" className={AutoStyle.copyBtn}>Copy</button>
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${AutoStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={AutoStyle.coding}>
              <code>
                  <div>
                  <span className={AutoStyle.smsColor}>{props.brek}</span>
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
                  <span className={AutoStyle.smsColor}>{props.endBrk},</span>
                  </div>
                  <div>
                  <span>"status": 200</span> 
                  </div>
                  </div>
                  <div>
                  <span className={AutoStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={AutoStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>
          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${AutoStyle.previous}`}>
              <Link to='/geo-code' className={AutoStyle.next}>
                  <h5 className={AutoStyle.onlyNext}>Previous</h5>
                  <h4 className={`mb-0 ${AutoStyle.rev}`}>
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Geocoding</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${AutoStyle.previous}`}>
              <Link to='/nearby' className={AutoStyle.next}>
                  <h5 className={AutoStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${AutoStyle.rev}`}>Nearby
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default AutoComplete;