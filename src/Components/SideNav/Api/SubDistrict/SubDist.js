import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const SubDistrict = () => {
  document.title = "Sub-District Api . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Sub-District Api</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Sub-District API
            </p>

            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>http://barikoi.xyz/v1/api/API_KEY/sub_districts?q=Khilgaon</span>
                  </div>
                  {/* <button type="button" className={SubStyle.copyBtn}>Copy</button> */}
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
                  <td>Khilgaon</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Sub-District API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
              <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'http://barikoi.xyz/v1/api/API_KEY/sub_districts?q=Khilgaon'</span>
                    <span className="txtColor">)</span>
                    </span> <br />
                    <div className="ml-3">
                    <span className="txtColor">.then(response ={'>'} response.json())</span><br />
                    <span className="txtColor">.catch(error ={'>'} console.error(<span className="url">'Error:'</span>, error))</span><br />
                    <span className="txtColor">.then(response ={'>'} console.log(<span className="url">'Success:'</span>, response))</span>
                  </div>
              </div>
                  {/* <button type="button" className={SubStyle.copyBtn}>Copy</button>   */}
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
                <span className="txtColor">"id": 280,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Khilgaon",</span></span>
              </div>
              <div>
                <span className="txtColor">"district": <span className="url">"Dhaka",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [90.45477443959228, 23.759899924349806]{"}"}" </span></span>
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
          <p className={Style.text}>If q is not given then the api will return all sub-districts.</p>
          <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>http://barikoi.xyz/v1/api/API_KEY/sub_districts</span>
                  </div>
                  {/* <button type="button" className={SubStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Sub-District API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
              <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'http://barikoi.xyz/v1/api/API_KEY/sub_districts'</span>
                    <span className="txtColor">)</span>
                    </span> <br />
                    <div className="ml-3">
                    <span className="txtColor">.then(response ={'>'} response.json())</span><br />
                    <span className="txtColor">.catch(error ={'>'} console.error(<span className="url">'Error:'</span>, error))</span><br />
                    <span className="txtColor">.then(response ={'>'} console.log(<span className="url">'Success:'</span>, response))</span>
                  </div>
              </div>
                  {/* <button type="button" className={SubStyle.copyBtn}>Copy</button>   */}
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
                <span className="txtColor">"name": <span className="url">"Abhaynagar",</span></span>
              </div>
              <div>
                <span className="txtColor">"district": <span className="url">"Jessore",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [89.42057859019934, 23.01760534615544]{"}"}" </span></span>
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
                <span className="txtColor">"name": <span className="url">"Adabor",</span></span>
              </div>
              <div>
                <span className="txtColor">"district": <span className="url">"Dhaka",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [90.3533353289662, 23.770166931185912]{"}"} </span></span>
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
                <span className="txtColor">"id": 3,</span>
              </div>
              <div>
                <span className="txtColor">"name": <span className="url">"Adamdighi",</span></span>
              </div>
              <div>
                <span className="txtColor">"district": <span className="url">"Bogra",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [89.05945382380858, 24.79924085609132]{"}"}" </span></span>
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
                <span className="txtColor">"name": <span className="url">"Aditmari",</span></span>
              </div>
              <div>
                <span className="txtColor">"district": <span className="url">"Lalmonirhat",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [89.36945393829866, 25.94501576520455]{"}"}" </span></span>
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
                <span className="txtColor">"name": <span className="url">"Agailjhara",</span></span>
              </div>
              <div>
                <span className="txtColor">"district": <span className="url">"Barisal",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [90.14076039190546, 22.96784467745809]{"}"}" </span></span>
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
                <span className="txtColor">"name": <span className="url">"Ajmiriganj",</span></span>
              </div>
              <div>
                <span className="txtColor">"district": <span className="url">"Habiganj",</span></span>
              </div>
              <div>
                <span className="txtColor">"center": <span className="url">"{"{"}\"type\": \"Point\", \"coordinates\": [91.2841877763222, 24.55331228982608]{"}"}" </span></span>
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
              <Link to='/district'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  District Api</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/city-api'>
                  <h5>Next</h5>
                  <h4 className="mb-0">City Api
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