import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import ReactJson from 'react-json-view'

const DistrictApi = () => {
  document.title = "District Api . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>District Api</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              District API
            </p>

            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>http://barikoi.xyz/v1/api/API_KEY/districts?q=Chittagong</span>
                  </div>
                  {/* <button type="button" className={DistStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>

          <div className="w-50">
            <Table striped bordered className="text-center">
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>q</td>
                  <td>Chittagong</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>District API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'http://barikoi.xyz/v1/api/API_KEY/districts?q=Chittagong'</span>
                    <span className="txtColor">)</span>
                    </span> <br />
                    <div className="ml-3">
                    <span className="txtColor">.then(response ={'>'} response.json())</span><br />
                    <span className="txtColor">.catch(error ={'>'} console.error(<span className="url">'Error:'</span>, error))</span><br />
                    <span className="txtColor">.then(response ={'>'} console.log(<span className="url">'Success:'</span>, response))</span>
                  </div>
              </div>
                      {/* <button type="button" className={AutoStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <ReactJson 
            theme="ocean"
            enableClipboard={false}
              displayDataTypes={false}
              displayObjectSize={false}
              indentWidth="5"
              src={
                {
                  "places": [
                      {
                        "id": 9,
                        "name": "Chittagong",
                        "center": "{\"type\": \"Point\", \"coordinates\": [91.83436892134064, 22.44326446730346]}"
                      }
                  ],
                  "status": 200
              }       
            } />
          </pre>
          {/* <p className={`font-weight-bold ${Style.text}`}>For each request of Add Place with all parameter 1 API call is counted.</p> */}
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Without Params</h2>
          <p className={Style.text}>If q is not given then the api will return all districts.</p>
          <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>http://barikoi.xyz/v1/api/API_KEY/districts</span>
                  </div>
                  {/* <button type="button" className={DistStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>District API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'http://barikoi.xyz/v1/api/API_KEY/districts'</span>
                    <span className="txtColor">)</span>
                    </span> <br />
                    <div className="ml-3">
                    <span className="txtColor">.then(response ={'>'} response.json())</span><br />
                    <span className="txtColor">.catch(error ={'>'} console.error(<span className="url">'Error:'</span>, error))</span><br />
                    <span className="txtColor">.then(response ={'>'} console.log(<span className="url">'Success:'</span>, response))</span>
                  </div>
              </div>
                      {/* <button type="button" className={AutoStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3 mb-5">
          <pre className={Style.coding}>
          <ReactJson 
            theme="ocean"
            enableClipboard={false}
              displayDataTypes={false}
              displayObjectSize={false}
              indentWidth="5"
              src={
                {
                  "places": [
                      {
                          "id": 1,
                          "name": "Bagerhat",
                          "center": "{\"type\": \"Point\", \"coordinates\": [89.73956431663846, 22.36977996795243]}"
                      },
                      {
                          "id": 2,
                          "name": "Bandarban",
                          "center": "{\"type\": \"Point\", \"coordinates\": [92.36382543114016, 21.80711701661792]}"
                      },
                      {
                          "id": 3,
                          "name": "Barguna",
                          "center": "{\"type\": \"Point\", \"coordinates\": [90.1204803599124, 22.14112658246039]}"
                      },
                      {
                          "id": 4,
                          "name": "Barisal",
                          "center": "{\"type\": \"Point\", \"coordinates\": [90.34167233806411, 22.811441437980033]}"
                      },
                      {
                          "id": 5,
                          "name": "Bhola",
                          "center": "{\"type\": \"Point\", \"coordinates\": [90.73334082882695, 22.335697321448272]}"
                      },
                      {
                          "id": 6,
                          "name": "Bogra",
                          "center": "{\"type\": \"Point\", \"coordinates\": [89.37879178145258, 24.824458085035953]}"
                      }
                  ],
                  "status": 200
              }      
            } />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of District API with all parameter 0 API call is counted.</p>
          </div>
          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/add-place'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Add Place</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/sub-district'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Sub-District Api
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default DistrictApi;