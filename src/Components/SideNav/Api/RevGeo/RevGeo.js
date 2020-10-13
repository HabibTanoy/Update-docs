import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const RevGeo = (props) => {
  return ( 
      <div>
          <h1 className={`mt-4 ${Style.api}`}>Reverse Geocode</h1>
          <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Reverse Geocoding API
          </p>
          <pre className={Style.coding}>
              <code>
                  <div>
                      <span className="txtColor">https://barikoi.xyz/v1/api/search/reverse/API_KEY/geocode?longitude=90.3737&latitude=23.7881&district=true&post_code=true&country=true&sub_district=true&union=false&pauroshova=false&location_type=true   </span>
                  </div>
                  {/* <button type="button" className={geoStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <p className={Style.text}>Returns an address given longitude and latitude.</p>
          <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>
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
          <div>
          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Rate Limit</h2>
          <p className={`mt-3 ${Style.text}`}>2000 Requests per minute</p>
          </div>
          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Reverse Geocoding API Request Example</h2>
          <pre className={Style.coding}>
              <code>
                  <div>
                      <span className="mr-3">
                        <span className="txtColor">fetch(</span>
                        <span className="url">'https://barikoi.xyz/v1/api/search/reverse/API_KEY/geocode?longitude=90.3737&latitude=23.7881&district=true&post_code=true&country=true&sub_district=true&union=false&pauroshova=false&location_type=true'</span>
                        <span className="txtColor">)</span>
                        </span> <br />
                        <div className="ml-3">
                        <span className="txtColor">.then(response ={'>'} response.json())</span><br />
                        <span className="txtColor">.catch(error ={'>'} console.error(<span className="url">'Error:'</span>, error))</span><br />
                        <span className="txtColor">.then(response ={'>'} console.log(<span className="url">'Success:'</span>, response))</span>
                      </div>
                      </div>
                      {/* <button type="button" className={geoStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3 mb-5">
          <pre className={Style.coding}>
              <code>
                  <div>
                  <div className="txtColor">
                  <span> {"{"} </span><br />
                  <div className="ml-4">
                  <span>"place": {"{"}</span><br />
                  <div className="ml-5">
                  <span>"id": 177936,</span><br/>
                  <span>"distance_within_meters": 1.167,</span><br />
                  </div>
                  </div>
                  </div>
                  <div className="ml-5 pl-4">
                  <div>
                    <span className="txtColor">"address": </span>
                    <span className="url">"Mohosin Uddin, House 462, West Shewrapara",</span>
                  </div>
                  <div>
                    <span className="txtColor">"area": </span>
                    <span className="url">"Mirpur",</span>
                  </div>
                  <div>
                    <span className="txtColor">"city": </span>
                    <span className="url">"Dhaka",</span><br />
                    <span className="txtColor">"postCode": 1216,</span>
                  </div>
                  <div>
                    <span className="txtColor">"location_type": </span>
                    <span className="url">"Urban",</span>
                  </div>
                  <div>
                    <span className="txtColor">"district": </span>
                    <span className="url">"Dhaka",</span>
                  </div>
                  <div>
                    <span className="txtColor">"country": </span>
                    <span className="url">"Bangladesh",</span>
                  </div>
                  <div>
                    <span className="txtColor">"sub_district": </span>
                    <span className="url">"Kafrul"</span>
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
          <Row className={Style.testing}>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/intro'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                    Barikoi Places API</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/geo-server'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Reverse Geocoding (Server)
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
      </div>
   );
}

export default RevGeo;