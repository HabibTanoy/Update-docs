import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"


const AutoComplete = () => {
  document.title = "Autocomplete . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Autocomplete</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Autocomplete API
            </p>

            <pre className={Style.coding}>
              <code>
                  <div>
                      <span className="txtColor">https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=shopno&latitude=23.873751&longitude=90.396454&scale=0.5</span>
                  </div>
                  {/* <button type="button" className={AutoStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <p className={Style.text}>Barikoi Autocomplete returns a place's id, longitude, latitude, address, city, area, postCode, pType & uCode</p>
          <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>

          <div className="w-50">
            <Table striped bordered hover>
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Value</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>q</td>
                  <td>shopno</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>longitude</td>
                  <td>90.3964</td>
                  <td></td>
                </tr>
                <tr>
                  <td>latitude</td>
                  <td>23.8737</td>
                  <td></td>
                </tr>
                <tr>
                  <td>scale</td>
                  <td>0.5</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <p className={Style.text}>Here, Latitude and Longitude and Scale are optional parameters.When Latitude and Longitude are provided in the request parameter then the search result is returned based on the provided longitude latitude.When Scale is provided system will search inside the particular area (in Kilometer) radius.</p>

          <h2 className={`mt-5 mb-3 ${Style.intro}`}>Geocoding API Request Example</h2>

          <pre className={Style.coding}>
              <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=shopno&latitude=23.873751&longitude=90.396454&scale=0.5'</span>
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
          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3">
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
              <div className="ml-5">
              <span>"id": 613764,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.40037488836059",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.876015798205852",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Shopno Bilash, House 14, Road 7/c, Sector 9",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Uttara",</span>
              </div>
                <span className="txtColor">"postCode": 1230,</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Residential",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"ZHOP9326",</span>
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
              <div className="ml-5">
              <span>"id": 615302,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.39863960696596",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.87394939766196",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Shopn Pori, House 10, Road 36, Sector 7",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Uttara",</span>
              </div>
                <span className="txtColor">"postCode": 1230,</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Residential",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"OUCU1540",</span>
              </div>
              
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"},"} </span><br />
              </div>
              </div>
              {/* objectThree */}
              <div>
              <div className="txtColor">
              <div className="ml-4">
              <span className="ml-3"> {"{"} </span><br />
              <div className="ml-5">
              <span>"id": 615307,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.39847472805957",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.87391826373943",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Shipon Hair Cutting, House 12, Road 36, Sector 7",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Uttara",</span>
              </div>
                <span className="txtColor">"postCode": 1230,</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Shop",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"IQFM0605",</span>
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
              <div className="ml-5">
              <span>"id": 613150,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.39759377788192",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.876060113158026",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Daily Shoping, House 4, Road 3/f, Sector 9",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Uttara",</span>
              </div>
                <span className="txtColor">"postCode": 1230,</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Shop",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"TGKR6447",</span>
              </div>
              
              </div>
              <div className="txtColor mb-2 ml-4 pl-3">
              <span> {"}"} </span><br />
              <span className="pl-2">.......</span><br />
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
          <p className={Style.text}>To get post office autocomplete just add post_office param to request body with the value true</p>
          {/* post office Api */}
          <h2 className={`mt-5 mb-3 ${Style.intro}`}>Post Office Autocomplete API</h2>
          <p style={{fontSize:"25px"}} className="mt-2 mb-3">
              <code className={Style.get}>GET</code>
              Post Office API
            </p>
          <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=Mirpur&post_office=true</span>
                  </div>
                  {/* <button type="button" className={AutoStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <p className={Style.text}>Barikoi Post Office Autocomplete.This API will return only post offices. Returns a place's id, longitude, latitude, address, city, area, postCode, pType & uCode</p>
          <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>

          <div className="w-50">
            <Table striped bordered hover>
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Value</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>q</td>
                  <td>Mirpur</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>post_office</td>
                  <td>true</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <h2 className={`mt-5 mb-3 ${Style.intro}`}>Autocomplete API Request Example</h2>

          <pre className={Style.coding}>
              <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=Mirpur&post_office=true'</span>
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
              <div className="ml-5">
              <span>"id": 4,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.811978035351842",</span>
              </div>
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.34750800579786",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Chiriyakhana Post Office, Zoo Road, Section 1",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Mirpur",</span>
              </div>
                <span className="txtColor">"postCode": 1216,</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Government",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"WEST4687",</span>
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
              <div className="ml-5">
              <span>"id": 5,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.803282712061726",</span>
              </div>
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.36128953099252",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Mirpur Post Office, Main Road, Section 2",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Mirpur",</span>
              </div>
                <span className="txtColor">"postCode": 1216,</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Government",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"BAND7192",</span>
              </div>
              
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"},"} </span><br />
              </div>
              </div>
              {/* objectThree */}
              <div>
              <div className="txtColor">
              <div className="ml-4">
              <span className="ml-3"> {"{"} </span><br />
              <div className="ml-5">
              <span>"id": 6,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.820675852230316",</span>
              </div>
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.3647304698825",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Pallabi Post Office, Begum Rokeya Sarani, Purobi",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Mirpur",</span>
              </div>
                <span className="txtColor">"postCode": 1216,</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Government",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"ALSO4104",</span>
              </div>
              
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"}"} </span><br />
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
              <Link to='/geo-code'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Geocoding</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/nearby'>
                  <h5 >Next</h5>
                  <h4 className="mb-0">Nearby
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default AutoComplete;