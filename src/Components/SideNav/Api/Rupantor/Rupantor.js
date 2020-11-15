import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import ReactJson from 'react-json-view'

const Rupantor = () => {
  document.title = "Rupantor Geocoder . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Rupantor Geocoder</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>POST</code>
              Rupantor Geocoder
            </p>
            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode</span>
                  </div>
                  {/* <button type="button" className={RupStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <p className={Style.text}>Rupantor Geocoder API for Developers. It formats the given address and searches for the address and gives a status if the address is complete of not.</p>
          <p className={Style.text}>Rupantor Geocoder only supports FormData. So use FormData object to send your data.</p>
          <p className={Style.text}>Rupantor also has a Address Matching API. Details can be found here.</p>
          <p className={Style.text}>Rupantor Geocoder needs Geocode API to fucntion properly. One Rupantor Geocoder request requires two Geocode API requests.</p>
          <h2 className={`mt-4 mb-3 ${Style.intro}`}>FormData Key and Value</h2>
          <div className="w-75">
            <Table striped bordered hover className="text-center">
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col" className="text-center">Value</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>q</td>
                  <td className="text-center">ave#3 barikoi office house no# 192 rd# 02 mirpur dohs section 12</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>thana</td>
                  <td className="text-center">yes</td>
                  <td></td>
                </tr>
                <tr>
                  <td>district</td>
                  <td className="text-center">yes</td>
                  <td></td>
                </tr>
                <tr>
                  <td>bangla</td>
                  <td className="text-center">yes</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <h2 className={`mt-4 mb-3 ${Style.intro}`}>Rupantor Geocoder API Request Example</h2>
          <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                    <span className="txt">let </span>
                    <span>formData = </span>
                    <span className="txt">new </span>
                    <span>FormData();</span>    
                  </div>
                  <div className="mb-3">
                  <span className="txt">let </span>
                    <span className="txtColor">url = </span>
                    <span className="url">'https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode'</span>
                  </div>
                  <div className="mb-3">
                  <span className="txt">let </span>
                    <span className="txtColor">address = </span>
                    <span className="url">'ave#3 barikoi office house no# 192 rd# 02 mirpur dohs section 12'</span>
                  </div>
                  <div className="txtColor">
                  <span >formData.append(</span>
                    <span className="url">'q' </span>
                    <span>address);</span>
                  </div>
                  <div className="txtColor">
                  <span >formData.append(</span>
                    <span className="url">thana', 'yes' </span>
                    <span>);</span>
                  </div>
                  <div className="txtColor">
                  <span >formData.append(</span>
                    <span className="url">'district', 'yes' </span>
                    <span>);</span>
                  </div>
                  <div className="txtColor mb-4">
                  <span>formData.append(</span>
                    <span className="url">'bangla', 'yes' </span>
                    <span>);</span>
                  </div>
                  <span className="txtColor">fetch(url, {"{"}</span>
                  <div className="txtColor ml-5">
                    <span>method: </span>
                    <span className="url">'post',</span><br />
                    <span>body: formData</span>
                  </div>
                  <div className="txtColor">
                  <span className="ml-3">{"}"})</span><br />
                    <span>.then(response ={">"} response.json())</span>
                  </div>
                  <div>
                  <span className="txtColor">.catch(error ={'>'} console.error(<span className="url">'Error:'</span>, error))</span><br />
                    <span className="txtColor">.then(response ={'>'} console.log(<span className="url">'Success:'</span>, response))</span>
                  </div>
                  
                      {/* <button type="button" className={RupStyle.copyBtn}>Copy</button> */}
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
             indentWidth="8"
             src={
              {
                "given_address": "ave#3 barikoi office house no#192 rd#02 mirpur dohs section 12",
                "fixed_address": "barikoi office, house 192, avenue 3, road 2, mirpur dohs, mirpur",
                "bangla_address": "বাড়িকই অফিস, হাউস ১৯২, এভিনিউ ৩, রোড ২, মিরপুর ডিওএইচএস, মিরপুর",
                "address_status": "complete",
                "geocoded_address": {
                    "Address": "House 192, Road 2, Mirpur DOHS, Mirpur, Dhaka",
                    "area": "Mirpur",
                    "city": "Dhaka",
                    "district": "Dhaka",
                    "latitude": "23.833979263544503",
                    "longitude": "90.36733254790306",
                    "pType": "Residential",
                    "postCode": 1216,
                    "thana": "Pallabi",
                    "uCode": "CDOG6017"
                },
                "confidence_score_percentage": 95,
                "status": 200
            }               
              } />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Rupantor Geocoder with basic parameter 2 API call is counted.</p>
          </div>
          <p className={Style.pText}>Address_status denotes whether a given/input address is complete or not based on area. Confidence_score_percentage determines the accuracy level of the geocoded address A complete address might get the maximum confidence_score_percentage. confidence_score_percentage {">"} 95 --- = Exact or be the closest one confidence_score_percentage {">"}= 70 --- = Within the the specific area, subarea , Can be used for zoning confidence_score_percentage {"<"} 70 --- = Not reliable</p>
          <p className={Style.text}>Rupantor Geocoder returns thana and district only if thana and district are added to request body with the value 'yes'. Rupantor Geocoder returns <span className={Style.pText} >null</span> geocoded_address if no geocoded address is found.</p>

          <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>POST</code>
              Rupantor Address Match
            </p>

            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode</span>
                  </div>
                  {/* <button type="button" className={Style.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <p className={Style.text}>Rupantor Address Matcher API matches two different given address and returns match percantage and match status.</p>

          <h2 className={`mt-4 mb-3 ${Style.intro}`}>FormData Key and Value</h2>
          <div className="w-75">
            <Table striped bordered hover className="text-center">
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col" className="text-center">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>q</td>
                  <td className="text-center">হাউস ১৮, রোড ৫, ব্লক জি, সেকশন ২ মিরপুর</td>
                </tr>
                <tr>
                  <td>q2</td>
                  <td className="text-center">house 18, road 5, block G, section 2, mirpur</td>
                </tr>
                <tr>
                  <td>match</td>
                  <td className="text-center">yes</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-4 mb-3 ${Style.intro}`}>Rupantor Address Matcher API Request Example</h2>

          <pre className={Style.coding}>
          <code>
                  <div className="txtColor">
                    <span className="txt">let </span>
                    <span>formData = </span>
                    <span className="txt">new </span>
                    <span>FormData();</span>    
                  </div>
                  <div className="mb-3">
                  <span className="txt">let </span>
                    <span className="txtColor">url = </span>
                    <span className="url">'https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode'</span>
                  </div>
                  <div className="mb-3">
                  <span className="txt">let </span>
                    <span className="txtColor">address = </span>
                    <span className="url">'ave#3 barikoi office house no# 192 rd# 02 mirpur dohs section 12'</span>
                  </div>
                  <div className="txtColor">
                  <span >formData.append(</span>
                    <span className="url">'q', 'হাউস ১৮, রোড ৫,  ব্লক জি, সেকশন ২ মিরপুর'</span>
                    <span>);</span>
                  </div>
                  <div className="txtColor">
                  <span >formData.append(</span>
                    <span className="url">'q2', 'house 18, road 5, block G, section 2, mirpur'</span>
                    <span>);</span>
                  </div>
                  <div className="txtColor mb-3">
                  <span >formData.append(</span>
                    <span className="url">'match', 'yes'</span>
                    <span>);</span>
                  </div>
                  <span className="txtColor">fetch(url, {"{"}</span>
                  <div className="txtColor ml-5">
                    <span>method: </span>
                    <span className="url">'post',</span><br />
                    <span>body: formData</span>
                  </div>
                  <div className="txtColor">
                  <span className="ml-3">{"}"})</span><br />
                    <span>.then(response ={">"} response.json())</span>
                  </div>
                  <div>
                  <span className="txtColor">.catch(error ={'>'} console.error(<span className="url">'Error:'</span>, error))</span><br />
                    <span className="txtColor">.then(response ={'>'} console.log(<span className="url">'Success:'</span>, response))</span>
                  </div>
                  
                      {/* <button type="button" className={RupStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={`mb-5 ${Style.coding}`}>
          <ReactJson 
          theme="ocean"
           enableClipboard={false}
            displayDataTypes={false}
             displayObjectSize={false}
             indentWidth="8"
             src={
              {
                "match": {
                    "address 1": "হাউস ১৮, রোড ৫,  ব্লক জি, সেকশন ২ মিরপুর",
                    "address 2": "house 18, road 5, block G, section 2, mirpur",
                    "match percentage": "100%",
                    "match status": "exact"
                },
                "status": 200
            }
              } />
                  <div className="override">
                    <span>// match_status defination</span><br />
                    <span>// match percentage {">"}= 97-100 = exact</span><br />
                    <span>// match percentage {">"}75-96 = approximate</span><br />
                    <span>// match percentage {"<"}75 = not matched</span>
                  </div>
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Rupantor Address Match with basic parameter 2 API call is counted.</p>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/distance'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Distance</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${Style.previous} ${Style.next}`}>
              <Link to='/route-api'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Routing Api
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default Rupantor;