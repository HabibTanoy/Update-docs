import React from 'react';
import SubStyle from '../SubDistrict/SubDist.module.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const SubDistrict = props => {
    return ( 
        <div>
            <h1 className={`mt-4 ${SubStyle.api}`}>Sub-District Api</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={SubStyle.get}>GET</code>
              Sub-District API
            </p>

            <pre className={SubStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode</span>
                  </div>
                  <button type="button" className={SubStyle.copyBtn}>Copy</button>
              </code>
          </pre>

          <h2 className={`mt-4 mb-3 ${SubStyle.intro}`}>API PARAMS</h2>

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
                  <td>Khilgaon</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${SubStyle.intro}`}>Sub-District API Request Example</h2>
          <div className="mt-3">
          <pre className={SubStyle.coding}>
              <code>
                  <div>
                  <span className={SubStyle.smsColor}>{props.brek}</span>
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
                  <span className={SubStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={SubStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>

          <h2 className={`mt-3 mb-3 ${SubStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={SubStyle.coding}>
              <code>
                  <div>
                  <span className={SubStyle.smsColor}>{props.brek}</span>
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
                  <span className={SubStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={SubStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>

          <h2 className={`mt-3 mb-3 ${SubStyle.intro}`}>Without Params</h2>
          <p>If q is not given then the api will return all sub-districts.</p>
          <pre className={SubStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode</span>
                  </div>
                  <button type="button" className={SubStyle.copyBtn}>Copy</button>
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${SubStyle.intro}`}>Sub-District API Request Example</h2>
          <div className="mt-3">
          <pre className={SubStyle.coding}>
              <code>
                  <div>
                  <span className={SubStyle.smsColor}>{props.brek}</span>
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
                  <span className={SubStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={SubStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>

          <h2 className={`mt-3 mb-3 ${SubStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={SubStyle.coding}>
              <code>
                  <div>
                  <span className={SubStyle.smsColor}>{props.brek}</span>
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
                  <span className={SubStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={SubStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${SubStyle.previous}`}>
              <Link to='/district' className={SubStyle.next}>
                  <h5 className={SubStyle.onlyNext}>Previous</h5>
                  <h4 className={`mb-0 ${SubStyle.rev}`}>
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  District Api</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${SubStyle.previous}`}>
              <Link to='/city-api' className={SubStyle.next}>
                  <h5 className={SubStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${SubStyle.rev}`}>City Api
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default SubDistrict;