import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const GeoCoding = () => {
  document.title = "Geocoding . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Geocoding</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Geocoding API
          </p>

          <pre className={Style.coding}>
              <code>
                  <div>
                      <span className="txtColor">https://barikoi.xyz/v1/api/search/geocode/API_KEY/place/place_id</span>
                  </div>
                  {/* <button type="button" className={GeoStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <p className={Style.text}>Geocode API for Developers. This returns location data of a specific place.</p>
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
                  <td>place_id</td>
                  <td>3354</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-5 mb-3 ${Style.intro}`}>Geocoding API Request Example</h2>
          <pre className={Style.coding}>
          <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'https://barikoi.xyz/v1/api/search/geocode/API_KEY/place/3354'</span>
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
              <span>"id": 3354,</span><br/>
              {/* <span>"distance_within_meters": 0,</span><br /> */}
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Barikoi Office, House 192, Road 2",</span>
              </div>
              <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Mirpur Dohs",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                <span className="txtColor">"postCode": 1216,</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"BKOI2017",</span>
              </div>
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.3673348642485",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.8340107016275",</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Office",</span>
              </div>
              <div>
                <span className="txtColor">"subType": </span>
                <span className="url">"Head Office"</span>
              </div>
              </div>
              <div className="txtColor ml-4">
              <span> {"},"} </span><br />
              <span> "status": 200</span><br />
              
              </div>
              <span> {"}"} </span><br />
              </div>
                  {/* <button type="button" className={GeoStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
          </div>
          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/geo-server'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                    Reverse Geocoding (Server)</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${Style.previous} ${Style.next}`}>
              <Link to='/autocomplete'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Autocomplete
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