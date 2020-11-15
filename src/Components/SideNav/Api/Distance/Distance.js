import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import ReactJson from 'react-json-view'

const Distance = () => {
  document.title = "Distance . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Distance</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Distance API
            </p>

            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://barikoi.xyz/v1/api/distance/API_KEY/SOURCE_LONGITUDE,SOURCE_LATITUDE/TARGET_LONGITUDE,TARGET_LATITUDE</span>
                  </div>
                  {/* <button type="button" className={DistStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <p className={Style.text}>Distance API for Developers. This returns the distance between of a two place.</p>

          <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>

          <div className="w-50">
            <Table striped bordered hover className="text-center">
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Value</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>SOURCE_LONGITUDE</td>
                  <td>90.39534587</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>SOURCE_LATITUDE</td>
                  <td>23.86448886</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>TARGET_LONGITUDE</td>
                  <td>90.3673</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>TARGET_LATITUDE</td>
                  <td>23.8340</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-5 mb-3 ${Style.intro}`}>Distance API Request Example</h2>

          <pre className={Style.coding}>
              <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'https://barikoi.xyz/v1/api/distance/API_KEY/90.39534587,23.86448886/90.3673,23.8340'</span>
                    <span className="txtColor">)</span>
                    </span> <br />
                    <div className="ml-3">
                    <span className="txtColor">.then(response ={'>'} response.json())</span><br />
                    <span className="txtColor">.catch(error ={'>'} console.error(<span className="url">'Error:'</span>, error))</span><br />
                    <span className="txtColor">.then(response ={'>'} console.log(<span className="url">'Success:'</span>, response))</span>
                  </div>
              </div>
                      {/* <button type="button" className={DistStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3 mb-5">
          <pre className={Style.coding}>
          <ReactJson 
          theme="ocean"
           enableClipboard={false}
            displayDataTypes={false}
             displayObjectSize={false}
             indentWidth="10"
             src={
              {
                "Distance": "7.8473 KM",
                "status": 200
              }     
              } />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Distance API with all parameter 1 API call is counted.</p>
          </div>
          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/nearby'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Nearby</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/rupantor'>
                  <h5 >Next</h5>
                  <h4 className="mb-0">Rupantor Geocoder
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default Distance;