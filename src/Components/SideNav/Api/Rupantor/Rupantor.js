import React from 'react';
import RupStyle from '../Rupantor/Rupantor.module.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const Rupantor = props => {
    return ( 
        <div>
            <h1 className={`mt-4 ${RupStyle.api}`}>Rupantor Geocoder</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={RupStyle.get}>POST</code>
              Rupantor Geocoder
            </p>
            <pre className={RupStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode</span>
                  </div>
                  <button type="button" className={RupStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <p>Rupantor Geocoder API for Developers. It formats the given address and searches for the address and gives a status if the address is complete of not.</p>
          <p>Rupantor Geocoder only supports FormData. So use FormData object to send your data.</p>
          <p>Rupantor also has a Address Matching API. Details can be found here.</p>
          <p>Rupantor Geocoder needs Geocode API to fucntion properly. One Rupantor Geocoder request requires two Geocode API requests.</p>
          <h2 className={`mt-4 mb-3 ${RupStyle.intro}`}>FormData Key and Value</h2>
          <div className="w-75">
            <Table striped bordered hover>
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col" className="text-center">Value</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>q</td>
                  <td className="text-center">ave#3 barikoi office house no# 192 rd# 02 mirpur dohs section 12</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>thana</td>
                  <td className="text-center">yes</td>
                  <td></td>
                </tr>
                <tr>
                  <td>district</td>
                  <td className="text-center">yes</td>
                  <td></td>
                </tr>
                <tr>
                  <td>bangla</td>
                  <td className="text-center">yes</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <h2 className={`mt-4 mb-3 ${RupStyle.intro}`}>Rupantor Geocoder API Request Example</h2>
          <pre className={RupStyle.coding}>
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
                      <button type="button" className={RupStyle.copyBtn}>Copy</button>
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${RupStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={RupStyle.coding}>
              <code>
                  <div>
                  <span className={RupStyle.smsColor}>{props.brek}</span>
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
                  <span className={RupStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={RupStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>
          <p className={RupStyle.pText}>Address_status denotes whether a given/input address is complete or not based on area. Confidence_score_percentage determines the accuracy level of the geocoded address A complete address might get the maximum confidence_score_percentage. confidence_score_percentage {">"} 95 --- = Exact or be the closest one confidence_score_percentage {">"}= 70 --- = Within the the specific area, subarea , Can be used for zoning confidence_score_percentage {"<"} 70 --- = Not reliable</p>
          <p>Rupantor Geocoder returns thana and district only if thana and district are added to request body with the value 'yes'. Rupantor Geocoder returns <span className={RupStyle.pText} >null</span> geocoded_address if no geocoded address is found.</p>

          <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={RupStyle.get}>POST</code>
              Rupantor Address Match
            </p>

            <pre className={RupStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode</span>
                  </div>
                  <button type="button" className={RupStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <p>Rupantor Address Matcher API matches two different given address and returns match percantage and match status.</p>

          <h2 className={`mt-4 mb-3 ${RupStyle.intro}`}>FormData Key and Value</h2>
          <div className="w-75">
            <Table striped bordered hover>
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col" className="text-center">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>q</td>
                  <td className="text-center">হাউস ১৮, রোড ৫, ব্লক জি, সেকশন ২ মিরপুর</td>
                </tr>
                <tr>
                  <td>q2</td>
                  <td className="text-center">house 18, road 5, block G, section 2, mirpur</td>
                </tr>
                <tr>
                  <td>match</td>
                  <td className="text-center">yes</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-4 mb-3 ${RupStyle.intro}`}>Rupantor Address Matcher API Request Example</h2>

          <pre className={RupStyle.coding}>
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
                      <button type="button" className={RupStyle.copyBtn}>Copy</button>
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${RupStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={RupStyle.coding}>
              <code>
                  <div>
                  <span className={RupStyle.smsColor}>{props.brek}</span>
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
                  <span className={RupStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={RupStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${RupStyle.previous}`}>
              <Link to='/distance' className={RupStyle.next}>
                  <h5 className={RupStyle.onlyNext}>Previous</h5>
                  <h4 className={`mb-0 ${RupStyle.rev}`}>
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Distance</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${RupStyle.previous}`}>
              <Link to='/route-api' className={RupStyle.next}>
                  <h5 className={RupStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${RupStyle.rev}`}>Routing Api
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default Rupantor;