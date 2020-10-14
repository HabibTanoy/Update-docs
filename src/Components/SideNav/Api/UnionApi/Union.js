import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const UnionApi = () => {
  document.title = "Union Api . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Union Api</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Union API
            </p>

            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>http://barikoi.xyz/v1/api/API_KEY/unions?q=Abaipur</span>
                  </div>
                  {/* <button type="button" className={UnionStyle.copyBtn}>Copy</button> */}
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
                  <td>Abaipur</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Union API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
              <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'http://barikoi.xyz/v1/api/API_KEY/unions?q=Abaipur'</span>
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
          <div className="mt-3">
          <pre className={Style.coding}>
          <code>
              <div className="mb-3">
                  <div className="txtColor">
                  <span> {"{"} </span><br />
                  </div>
                  <div className="ml-5">
                  <div>
                    <span className="txtColor">"places": [</span>
                  </div>
                  <div className="ml-5 txtColor">
                    <span>{"{"}</span>
                  </div>
                  <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"id": 1,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Abaipur",</span></span>
              </div>
              <div>
                <span className="txtColor">"sub_district": <span className="url">"Shailkupa",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [89.32057699103409, 23.59762103167178]{"}"}" </span></span>
              </div>
              </div>
              <div className="ml-5 txtColor">
                    <span>{"}"}</span>
                  </div>
                  </div>
                  <div className="txtColor ml-5 pl-3">
                  <span> ], </span><br />
                  <span>"status": 200</span>
                  </div>
                  <span className="txtColor"> {"}"} </span>
                  </div>
                  {/* <button type="button" className={DistStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Without Params</h2>
          <p className={Style.text}>If q is not given then the api will return all unions.</p>
          <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>http://barikoi.xyz/v1/api/API_KEY/unions</span>
                  </div>
                  {/* <button type="button" className={UnionStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Union API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
              <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'http://barikoi.xyz/v1/api/API_KEY/unions'</span>
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
              <div>
              <div className="txtColor">
              <div className="mb-2">
              <span> {"{"} </span><br />
              </div>
              <div className="ml-4">
              <span className="ml-1">"places": {"["}</span><br />
              <span className="ml-3"> {"{"} </span><br />
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"id": 1203,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Chikashi",</span></span>
              </div>
              <div>
                <span className="txtColor">"sub_district": <span className="url">"Dhunat",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [89.56380109324998, 24.75404197173319]{"}"}" </span></span>
              </div>
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"},"} </span><br />
              </div>
              </div>
              {/* objectTwo */}
              <div>
              <div className="txtColor">
              <div className="ml-4">
              <span className="ml-3"> {"{"} </span><br />
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"id": 1204,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Chikdair",</span></span>
              </div>
              <div>
                <span className="txtColor">"sub_district": <span className="url">"Raozan",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [91.8800217668128, 22.54372849367624]{"}"} </span></span>
              </div>
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"}"} </span><br />
              </div>
              {/* objectThree */}
              <div>
              <div className="txtColor">
              <div className="ml-4">
              <span className="ml-3"> {"{"} </span>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"id": 1205,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Chiknagul",</span></span>
              </div>
              <div>
                <span className="txtColor">"sub_district": <span className="url">"Jaintiapur",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [92.00116400240036, 24.956171818679373]{"}"}" </span></span>
              </div>
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"},"} </span><br />
              </div>
              </div>
              {/* objectFour */}
              <div>
              <div className="txtColor">
              <div className="ml-4">
              <span className="ml-3"> {"{"} </span><br />
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"id": 1206,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Chiknikandi",</span></span>
              </div>
              <div>
                <span className="txtColor">"sub_district": <span className="url">"Galachipa",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [90.45560794068692, 22.243360479923517]{"}"}" </span></span>
              </div>
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"},"} </span><br />
              </div>
              </div>
              <div className="ml-4 txtColor">
              <span>],</span><br />
              <span>"status": 200</span><br />
              </div>
              <span className="txtColor"> {"}"} </span><br />
              </div>
                  {/* <button type="button" className={GeoStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/city-api'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  City Api</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/ward-by-location'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Ward By Geo location
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