import React from 'react';
import RoutStyle from '../RoutingApi/Routing.module.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const RoutingApi = props => {
    return ( 
        <div>
            <h1 className={`mt-4 ${RoutStyle.api}`}>Routing Api</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={RoutStyle.get}>GET</code>
              Routing
            </p>

            <pre className={RoutStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode</span>
                  </div>
                  <button type="button" className={RoutStyle.copyBtn}>Copy</button>
              </code>
          </pre>
          <p>This api provides routing details for two location points.</p>

          <h2 className={`mt-4 mb-3 ${RoutStyle.intro}`}>API PARAMS</h2>
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

          <h2 className={`mt-4 mb-3 ${RoutStyle.intro}`}>Routing API Request Example</h2>
          <pre className={RoutStyle.coding}>
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
                      <button type="button" className={RoutStyle.copyBtn}>Copy</button>
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${RoutStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={RoutStyle.coding}>
              <code>
                  <div>
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
                  </div>
                  <button type="button" className={RoutStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>

            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={RoutStyle.get}>GET</code>
              Nearest
            </p>

            <pre className={RoutStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode</span>
                  </div>
                  <button type="button" className={RoutStyle.copyBtn}>Copy</button>
              </code>
          </pre>
        </div>
     );
}
 
export default RoutingApi;