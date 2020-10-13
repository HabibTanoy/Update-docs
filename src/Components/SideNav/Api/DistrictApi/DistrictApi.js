import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const DistrictApi = () => {
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
            <Table striped bordered>
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
              <code>
                  
                  {/* <button type="button" className={DistStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
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
          <div className="mt-3">
          <pre className={Style.coding}>
              <code>
                  
                  {/* <button type="button" className={DistStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
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