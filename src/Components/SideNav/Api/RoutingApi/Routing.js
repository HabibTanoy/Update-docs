import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import ReactJson from 'react-json-view'

const RoutingApi = () => {
  document.title = "Routing Api . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Routing Api</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Routing
            </p>

            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://barikoi.xyz/v1/api/route/API_KEY/90.362548828125,23.94107556246209;90.31585693359375,24.134221690669204?overview=true&alternatives=true&steps=true&hints=</span>
                  </div>
                  {/* <button type="button" className={RoutStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <p className={Style.text}>This api provides routing details for two location points.</p>

          <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>
          <div className="w-50">
            <Table striped bordered hover className="text-center">
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col" className="text-center">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>overview</td>
                  <td className="text-center">true</td>
                </tr>
                <tr>
                  <td>alternatives</td>
                  <td className="text-center">true</td>
                </tr>
                <tr>
                  <td>steps</td>
                  <td className="text-center">true</td>
                </tr>
                <tr>
                  <td>hints</td>
                  <td className="text-center">;</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-4 mb-3 ${Style.intro}`}>Routing API Request Example</h2>
          <pre className={Style.coding}>
              <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'https://barikoi.xyz/v1/api/route/API_KEY/90.362548828125,23.94107556246209;90.31585693359375,24.134221690669204?overview=true&alternatives=true&steps=true&hints='</span>
                    <span className="txtColor">)</span>
                    </span> <br />
                    <div className="ml-3">
                    <span className="txtColor">.then(response ={'>'} response.json())</span><br />
                    <span className="txtColor">.catch(error ={'>'} console.error(<span className="url">'Error:'</span>, error))</span><br />
                    <span className="txtColor">.then(response ={'>'} console.log(<span className="url">'Success:'</span>, response))</span>
                  </div>
              </div>
                      {/* <button type="button" className={RoutStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <ReactJson 
          theme="ocean"
           enableClipboard={false}
            displayDataTypes={false}
             displayObjectSize={false}
             indentWidth="4"
             src={
              {
                "code": "Ok",
                "routes": [
                    {
                        "geometry": "g}bqCmhpfPjf@uE_P_~BueAjZ}sDpCg@~t@_{DdfF}ZbrCodA`bCsM{m@ojCaUw^meAmg@eS_~A_Ok}AbFmXbQoi@mmAuxEfS",
                        "legs": [
                            {
                                "steps": [],
                                "distance": 33452.2,
                                "duration": 2481.4,
                                "summary": "",
                                "weight": 2481.4
                            }
                        ],
                        "distance": 33452.2,
                        "duration": 2481.4,
                        "weight_name": "routability",
                        "weight": 2481.4
                    }
                ],
                "waypoints": [
                    {
                        "hint": "V10DgFldA4AAAAAAJwAAAAAAAAAfAQAAAAAAAFZN10EAAAAA6SFHQwAAAAAnAAAAAAAAAB8BAACEAAAA6tliBeZObQG10mIF1E9tAQAATwvGEH3j",
                        "distance": 189.684241,
                        "name": "",
                        "location": [
                            90.364394,
                            23.940838
                        ]
                    },
                    {
                        "hint": "xy0BgPzPAoBDAAAAKwAAAL8QAAAtBgAAjQGVQqNFPkI1VJRFXcnaREMAAAArAAAAvxAAAC0GAACEAAAAsjtiBbBHcAFRHGIFTkJwATMAnwrGEH3j",
                        "distance": 830.734383,
                        "name": "Mouchak - Fulbari Road",
                        "location": [
                            90.32389,
                            24.1356
                        ]
                    }
                ]
            }
             
              } />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Routing with all parameter 2 API call is counted.</p>
          </div>
              {/*Nearest Api */}
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Nearest
            </p>

            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://barikoi.xyz/v1/routing/API_KEY/nearest?point=23.80474653651567,90.36288913339376</span>
                  </div>
                  {/* <button type="button" className={RoutStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>
          <div className="w-50">
            <Table striped bordered hover className="text-center">
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col" className="text-center">Value</th>
                  <th scope="col" >Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>point</td>
                  <td>23.80474653651567,90.36288913339376	</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <ReactJson 
          theme="ocean"
           enableClipboard={false}
            displayDataTypes={false}
             displayObjectSize={false}
             indentWidth="8"
             src={
              {
                "coordinates": [
                    90.36288202934098,
                    23.804755823392888
                ],
                "distance": 1.2604423448728288,
                "type": "Point"
            }            
              } />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Routing with all parameter 2 API call is counted.</p>
          </div>
          
          <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Route Match
            </p>

            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://barikoi.xyz/v1/routing/API_KEY/matching?points=90.38436119310136,23.7267599142696;90.38438265469962,23.726622279057658</span>
                  </div>
                  {/* <button type="button" className={RoutStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>
          <div className="w-50">
            <Table striped bordered hover className="text-center">
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col" className="text-center">Value</th>
                  <th scope="col" >Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>point</td>
                  <td>90.38436119310136,23.7267599142696;90.38438265469962,23.726622279057658</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={`mb-5 ${Style.coding}`}>
          <ReactJson 
          theme="ocean"
           enableClipboard={false}
            displayDataTypes={false}
             displayObjectSize={false}
             indentWidth="4"
             src={
              {
                "geometry": {
                    "coordinates": [
                        [
                            90.384425,
                            23.726761
                        ],
                        [
                            90.384427,
                            23.726622
                        ]
                    ],
                    "type": "LineString"
                },
                "distance": 15.5,
                "status": 200
            }
              } />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Route Match with all parameter 2 API call is counted.</p>
          </div> 

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/rupantor'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Rupantor Geocoder</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/add-place'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Add Place
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default RoutingApi;