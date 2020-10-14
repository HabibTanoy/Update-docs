import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

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
                <span className="txtColor">"id": 9,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Chittagong",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [91.83436892134064, 22.44326446730346]{"}"}" </span></span>
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
                <span className="txtColor">"id": 1,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Bagerhat",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [89.73956431663846, 22.36977996795243]{"}"}" </span></span>
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
                <span className="txtColor">"id": 2,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Bandarban",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [92.36382543114016, 21.80711701661792]{"}"}" </span></span>
              </div>
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"}"} </span><br />
              </div>
              {/* objectThree */}
              <div>
              <div className="txtColor">
              <div className="ml-4">
              <span className="ml-3"> {"{"} </span><br />
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"id": 3,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Barguna",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [90.1204803599124, 22.14112658246039]{"}"}" </span></span>
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
                <span className="txtColor">"id": 4,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Barisal",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [90.34167233806411, 22.811441437980033]{"}"}" </span></span>
              </div>
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"},"} </span><br />
              </div>
              </div>
              {/* objectFive */}
              <div>
              <div className="txtColor">
              <div className="ml-4">
              <span className="ml-3"> {"{"} </span><br />
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"id": 5,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Bhola",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [89.73956431663846, 22.36977996795243]{"}"}" </span></span>
              </div>
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"},"} </span><br />
              </div>
              </div>
              {/* objectSix */}
              <div>
              <div className="txtColor">
              <div className="ml-4">
              <span className="ml-3"> {"{"} </span><br />
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"id": 6,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Bagerhat",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [89.73956431663846, 22.36977996795243]{"}"}" </span></span>
              </div>
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"}"} </span><br />
              <span>.......</span>
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