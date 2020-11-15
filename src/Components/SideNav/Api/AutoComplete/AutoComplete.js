import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import ReactJson from 'react-json-view'

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
            <Table striped bordered hover className="text-center">
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
          <ReactJson 
          theme="ocean"
           enableClipboard={false}
            displayDataTypes={false}
             displayObjectSize={false}
             indentWidth="4"
             src={
              {
                "places": [
                    {
                        "id": 613764,
                        "longitude": "90.40037488836059",
                        "latitude": "23.876015798205852",
                        "address": "Shopno Bilash, House 14, Road 7/c, Sector 9",
                        "city": "Dhaka",
                        "area": "Uttara",
                        "postCode": 1230,
                        "pType": "Residential",
                        "uCode": "ZHOP9326"
                    },
                    {
                        "id": 615302,
                        "longitude": "90.39863960696596",
                        "latitude": "23.87394939766196",
                        "address": "Shopn Pori, House 10, Road 36, Sector 7",
                        "city": "Dhaka",
                        "area": "Uttara",
                        "postCode": 1230,
                        "pType": "Residential",
                        "uCode": "OUCU1540"
                    },
                    {
                        "id": 615307,
                        "longitude": "90.39847472805957",
                        "latitude": "23.87391826373943",
                        "address": "Shipon Hair Cutting, House 12, Road 36, Sector 7",
                        "city": "Dhaka",
                        "area": "Uttara",
                        "postCode": 1230,
                        "pType": "Shop",
                        "uCode": "IQFM0605"
                    },
                    {
                        "id": 613150,
                        "longitude": "90.39759377788192",
                        "latitude": "23.876060113158026",
                        "address": "Daily Shoping, House 4, Road 3/f, Sector 9",
                        "city": "Dhaka",
                        "area": "Uttara",
                        "postCode": 1230,
                        "pType": "Shop",
                        "uCode": "TGKR6447"
                    }
                ],
                "status": 200
            }
              } />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Autocomplete API with all parameter 1 API call is counted.</p>
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
            <Table striped bordered hover  className="text-center">
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
          <ReactJson 
          theme="ocean"
           enableClipboard={false}
            displayDataTypes={false}
             displayObjectSize={false}
             indentWidth="4"
             src={
              {
                "places": [
                    {
                        "id": 4,
                        "latitude": "23.811978035351842",
                        "longitude": "90.34750800579786",
                        "address": "Chiriyakhana Post Office, Zoo Road, Section 1",
                        "city": "Dhaka",
                        "area": "Mirpur",
                        "postCode": 1216,
                        "pType": "Government",
                        "uCode": "WEST4687"
                    },
                    {
                        "id": 5,
                        "latitude": "23.803282712061726",
                        "longitude": "90.36128953099252",
                        "address": "Mirpur Post Office, Main Road, Section 2",
                        "city": "Dhaka",
                        "area": "Mirpur",
                        "postCode": 1216,
                        "pType": "Government",
                        "uCode": "BAND7192"
                    },
                    {
                        "id": 6,
                        "latitude": "23.820675852230316",
                        "longitude": "90.3647304698825",
                        "address": "Pallabi Post Office, Begum Rokeya Sarani, Purobi",
                        "city": "Dhaka",
                        "area": "Mirpur",
                        "postCode": 1216,
                        "pType": "Government",
                        "uCode": "ALSO4104"
                    }
                ],
                "status": 200
            }       
            
              } />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Post Office Autocomplete API with all parameter 2 API call is counted.</p>
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