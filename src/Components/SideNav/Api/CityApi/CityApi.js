import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const CityApi = () => {
  document.title = "City Api . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>City Api</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              City API
            </p>

            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>http://barikoi.xyz/v1/api/API_KEY/cities?q=Dhaka</span>
                  </div>
                  {/* <button type="button" className={CityStyle.copyBtn}>Copy</button> */}
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
                  <td>Dhaka</td>
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
                    <span className="url">'http://barikoi.xyz/v1/api/API_KEY/cities?q=Dhaka'</span>
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
              <div>
              <div className="txtColor">
              <div>
              <span> {"{"} </span>
              </div>
              <div className="ml-4">
              <span className="ml-1">"places": {"["}</span><br />
              <span className="ml-3"> {"{"} </span><br />
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div className="txtColor">
                <span >"name": <span className="url">"Dhaka",</span></span><br />
                <span>"areas": [</span>
              </div>
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Moghbazar"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              </div>
              {/* objectTwo */}
              <div className="ml-5 pl-4">
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Gendaria"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              {/* objectThree */}
              <div>
              <div className="ml-5 pl-4">
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Sher E Bangla Nagar"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              {/* objectFour */}
              <div className="ml-5 pl-4">
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Tejgaon"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              {/* objectFive */}
              <div className="ml-5 pl-4">
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Mohakhali"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              {/* objectSix */}
              <div>
              <div className="ml-5 pl-4">
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Ramna"</span></span>
              </div>
              <div className="txtColor">
              <span> {"}"} </span>
              </div>
              </div>
              <div className="txtColor ml-4">
              <span>.......</span>
              </div>
              </div>
              
              </div>
              <div className="ml-5 pl-4 txtColor">
              <span>]</span>
              </div>
              <div className="txtColor">
              <span className="ml-5"> {"}"} </span><br />
              <div className="ml-3">
              <span >],</span><br />
              <span>"status": 200</span>
              </div>
              </div>
              <span className="txtColor">{"}"}</span>
              </div>
                  {/* <button type="button" className={GeoStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Without Params</h2>
          <p className={Style.text}>If q is not given then the api will return all cities.</p>
          <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>http://barikoi.xyz/v1/api/API_KEY/cities</span>
                  </div>
                  {/* <button type="button" className={CityStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Sub-District API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'http://barikoi.xyz/v1/api/API_KEY/cities'</span>
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
              <div>
              <span>{"{"}</span>
              </div>
              <div className="ml-4">
              <span className="ml-1">"places": {"["}</span><br />
              <span className="ml-3"> {"{"} </span>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div className="txtColor">
                <span >"name": <span className="url">"Rajshahi",</span></span><br />
                <span>"areas": []</span>
              </div>
              </div>
              <span className="ml-5 txtColor"> {"},"} </span>
              </div>
              <div className="ml-4">
              <span className="ml-4 txtColor"> {"{"} </span>
              <div className="ml-5 pl-4">
              <div className="txtColor">
                <span >"name": <span className="url">"Khulna",</span></span><br />
                <span>"areas": []</span>
              </div>
              </div>
              </div>
              <span className="ml-5 txtColor"> {"},"} </span>
              <div className="ml-4">
              <span className="ml-4 txtColor"> {"{"} </span>
              <div className="ml-5 pl-4">
              <div className="txtColor">
                <span >"name": <span className="url">"Barisal",</span></span><br />
                <span>"areas": []</span>
              </div>
              </div>
              </div>
              <span className="ml-5 txtColor"> {"},"} </span>
              <div className="ml-4">
              <span className="ml-4 txtColor"> {"{"} </span>
              <div className="ml-5 pl-4">
              <div className="txtColor">
                <span >"name": <span className="url">"Dhaka",</span></span><br />
                <span>"areas": [</span>
                {/* objectOne */}
                <div>
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Moghbazar"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              {/* objectTwo */}
              <div>
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Gendaria"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              {/* objectThree */}
              <div>
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Sher E Bangla Nagar"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              {/* objectFour */}
              <div>
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Tejgaon"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              {/* objectFive */}
              <div>
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Mohakhali"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              {/* objectSix */}
              <div>
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Ramna"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              {/* objectSeven */}
              <div>
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Sadarghat"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              {/* objectEight */}
              <div>
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Banani"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              {/* objectNine */}
              <div>
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Lalmatia"</span></span>
              </div>
              <div className="txtColor">
              <span> {"},"} </span>
              </div>
              </div>
              </div>
              {/* objectTen */}
              <div>
              <div className="txtColor ml-4">
              <span> {"{"} </span>
              <div className="txtColor ml-5">
                <span >"name": <span className="url">"Dhanmondi"</span></span>
              </div>
              <div className="txtColor">
              <span> {"}"} </span>
              </div>
              <span>.......</span><br />
              </div>
              <span>]</span>
              </div>
              </div>
              </div>
              </div>
              <span className="ml-5 txtColor"> {"},"} </span>
              <div className="ml-4">
              <span className="ml-4 txtColor"> {"{"} </span>
              <div className="ml-5 pl-4">
              <div className="txtColor">
                <span >"name": <span className="url">"Chittagong",</span></span><br />
                <span>"areas": []</span>
              </div>
              </div>
              </div>
              <span className="ml-5 txtColor"> {"},"} </span>
              <div className="ml-4">
              <span className="ml-4 txtColor"> {"{"} </span>
              <div className="ml-5 pl-4">
              <div className="txtColor">
                <span >"name": <span className="url">"Sylhet",</span></span><br />
                <span>"areas": []</span>
              </div>
              </div>
              </div>
              <span className="ml-5 txtColor"> {"},"} </span>
              <div className="ml-3 txtColor">
                <span>],</span><br />
                <span>"status": 200</span>
              </div>
              <span className="txtColor"> {"},"} </span>
                  {/* <button type="button" className={CityStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/sub-district'>
                  <h5 >Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Sub-District Api</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/union-api'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Union Api
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default CityApi;