import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const RoutingApi = () => {
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
            <Table striped bordered hover>
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
          <code>
              <div>
                  <span className="mr-3">fetch('https://barikoi.xyz/v1/api/route/API_KEY/90.362548828125,23.94107556246209;90.31585693359375,24.134221690669204?overview=true&alternatives=true&steps=true&hints=')</span>
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
                      {/* <button type="button" className={RupStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          </div>

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
            <Table striped bordered hover>
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
              <code>
                  {/* <div>
                  <span className={RoutStyle.smsColor}>{props.brek}</span>
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
                  <span className={RoutStyle.smsColor}>{props.endBrk}</span>
                  </div> */}
                  {/* <button type="button" className={RoutStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
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
            <Table striped bordered hover>
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
              <code>
                  {/* <div>
                  <span className={RoutStyle.smsColor}>{props.brek}</span>
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
                  <span className={RoutStyle.smsColor}>{props.endBrk}</span>
                  </div> */}
                  {/* <button type="button" className={RoutStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
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