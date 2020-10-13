import React from 'react';
import UnionStyle from '../SubDistrict/SubDist.module.css';
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const UnionApi = props => {
    return ( 
        <div>
            <h1 className={`mt-4 ${UnionStyle.api}`}>Union Api</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={UnionStyle.get}>GET</code>
              Union API
            </p>

            <pre className={UnionStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode</span>
                  </div>
                  <button type="button" className={UnionStyle.copyBtn}>Copy</button>
              </code>
          </pre>

          <h2 className={`mt-4 mb-3 ${UnionStyle.intro}`}>API PARAMS</h2>

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
                  <td>Abaipur</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${UnionStyle.intro}`}>Union API Request Example</h2>
          <div className="mt-3">
          <pre className={UnionStyle.coding}>
              <code>
                  <div>
                  <span className={UnionStyle.smsColor}>{props.brek}</span>
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
                  <span className={UnionStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={UnionStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>

          <h2 className={`mt-3 mb-3 ${UnionStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={UnionStyle.coding}>
              <code>
                  <div>
                  <span className={UnionStyle.smsColor}>{props.brek}</span>
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
                  <span className={UnionStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={UnionStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>

          <h2 className={`mt-3 mb-3 ${UnionStyle.intro}`}>Without Params</h2>
          <p>If q is not given then the api will return all unions.</p>
          <pre className={UnionStyle.coding}>
              <code>
                  <div>
                      <span>https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode</span>
                  </div>
                  <button type="button" className={UnionStyle.copyBtn}>Copy</button>
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${UnionStyle.intro}`}>Union API Request Example</h2>
          <div className="mt-3">
          <pre className={UnionStyle.coding}>
              <code>
                  <div>
                  <span className={UnionStyle.smsColor}>{props.brek}</span>
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
                  <span className={UnionStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={UnionStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>

          <h2 className={`mt-3 mb-3 ${UnionStyle.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={UnionStyle.coding}>
              <code>
                  <div>
                  <span className={UnionStyle.smsColor}>{props.brek}</span>
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
                  <span className={UnionStyle.smsColor}>{props.endBrk}</span>
                  </div>
                  <button type="button" className={UnionStyle.copyBtn}>Copy</button>  
              </code>
          </pre>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${UnionStyle.previous}`}>
              <Link to='/city-api' className={UnionStyle.next}>
                  <h5 className={UnionStyle.onlyNext}>Previous</h5>
                  <h4 className={`mb-0 ${UnionStyle.rev}`}>
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  City Api</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${UnionStyle.previous}`}>
              <Link to='/ward-by-location' className={UnionStyle.next}>
                  <h5 className={UnionStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${UnionStyle.rev}`}>Ward By Geo location
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default UnionApi;