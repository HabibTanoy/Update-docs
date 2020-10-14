import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const GeoLocApi = () => {
  document.title = "City Corporation by Geolocation . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>City Corporation by Geolocation</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              City Corporation by Geolocation
            </p>
            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://barikoi.xyz/v1/api/search/dncc/API_KEY/LONGITUDE/LATITUDE</span>
                  </div>
                  {/* <button type="button" className={GeoStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <p className={Style.text}>Returns the City Corporation of given longitude and latitude.</p>

          <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>

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

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>City Corporation by Geolocation API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'https://barikoi.xyz/v1/api/search/dncc/API_KEY/90.4186194745721/23.83136348674859'</span>
                    <span className="txtColor">)</span>
                    </span> <br />
                    <div className="ml-3">
                    <span className="txtColor">.then(response ={'>'} response.json())</span><br />
                    <span className="txtColor">.catch(error ={'>'} console.error(<span className="url">'Error:'</span>, error))</span><br />
                    <span className="txtColor">.then(response ={'>'} console.log(<span className="url">'Success:'</span>, response))</span>
                  </div>
              </div>
                  {/* <button type="button" className={CityStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
          </div> 

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3 mb-5">
          <pre className={Style.coding}>
          <code>
              <div className="txtColor">
                  <span>{"{"}</span>
                      <div className="ml-4">
                        <span>"message": </span>
                        <span className="url">"DNCC"</span>
                      </div> 
                      <span >{"}"}</span>
                  </div>
                  {/* <button type="button" className={placeStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/ward-zone-by-location'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Ward {"&"} Zone by Geolocation</h4>
              </Link>
          </div>
            </Col>
            {/* <Col sm={6}>
            <div className={`mb-4 nxt ${WZStyle.previous}`}>
              <Link to='/city-corp-by-location' className={WZStyle.next}>
                  <h5 className={WZStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${WZStyle.rev}`}> Ward {"&"} City Corporation by Geolocation
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col> */}
          </Row>
        </div>
     );
}
 
export default GeoLocApi;