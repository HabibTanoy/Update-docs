import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import ReactJson from 'react-json-view'

const Nearby = () => {
  document.title = "Nearby . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Nearby</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Nearby API
            </p>

            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://barikoi.xyz/v2/api/search/nearby/API_KEY/DISTANCE/LIMIT?longitude=TARGET_LONGITUDE&latitude=TARGET_LATITUDE</span>
                  </div>
                  {/* <button type="button" className={NearStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <p className={Style.text}>All Nearby API counts according to the limit parameter or number of places returned in response data</p>

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
                  <td>longitude</td>
                  <td>90.36668110638857</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>latitude</td>
                  <td>23.83723803415923</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>distance</td>
                  <td>0.5 (km)</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>limit</td>
                  <td>10</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-5 mb-3 ${Style.intro}`}>Nearby API Request Example</h2>

          <pre className={Style.coding}>
              <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'https://barikoi.xyz/v2/api/search/nearby/API_KEY/0.5/10?longitude=90.36668110638857&latitude=23.83723803415923'</span>
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
                        "id": 452923,
                        "name": "Artland",
                        "distance_in_meters": 9.91042449889066,
                        "longitude": "90.36668747663498",
                        "latitude": "23.83714909804975",
                        "pType": "Education",
                        "Address": "Artland, Jol Torongo, House 555, Road 9",
                        "area": "Mirpur Dohs",
                        "city": "Dhaka",
                        "postCode": 1216,
                        "subType": "Art School",
                        "uCode": "IDIX1880",
                        "ST_AsText(location)": "POINT(90.36668747663498 23.83714909804975)"
                    },
                    {
                        "id": 485763,
                        "name": "Mulytic Labs",
                        "distance_in_meters": 11.24627601291792,
                        "longitude": "90.36672234535217",
                        "latitude": "23.837144191228138",
                        "pType": "Office",
                        "Address": "Mulytic Labs, Jol Torongo, House 555, Road 9",
                        "area": "Mirpur Dohs",
                        "city": "Dhaka",
                        "postCode": 1216,
                        "subType": "Branch Office",
                        "uCode": "IDVH3378",
                        "ST_AsText(location)": "POINT(90.36672234535217 23.837144191228138)"
                    },
                    {
                        "id": 512618,
                        "name": "Touch-Up Beauty Parlour",
                        "distance_in_meters": 11.700339826282454,
                        "longitude": "90.366759896278",
                        "latitude": "23.837161365103",
                        "pType": "Shop",
                        "Address": "Touch-Up Beauty Parlour, Jol Torongo, House 555, Road 9",
                        "area": "Mirpur Dohs",
                        "city": "Dhaka",
                        "postCode": 1216,
                        "subType": "Womens Parlour",
                        "uCode": "FLDL1270",
                        "ST_AsText(location)": "POINT(90.366759896278 23.837161365103)"
                    }
                ]
            }         
              } />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Nearby API with all parameter 1 API call is counted.</p>
          </div>
          {/* nearby api with Category */}
          <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Nearby API with Category
            </p>

            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://barikoi.xyz/v2/api/search/nearby/category/API_KEY/DISTANCE/LIMIT?longitude=TARGET_LONGITUDE&latitude=TARGET_LATITUDE&ptype=CATEGORY</span>
                  </div>
                  {/* <button type="button" className={NearStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <p className={Style.text}>This returns data with the specific pTypes from the list below:</p>
          <div className="w-50">
            <Table striped bordered hover className="text-center">
            <thead>
                <tr>
                  {/* <th scope="col"></th> */}
                  <th className="text-center" colspan="6" scope="col">pTypes</th>
                  {/* <th scope="col"></th> */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Admin</td>
                  <td>Agricultural</td>
                  <td>Bank</td>
                </tr>
                <tr>
                  <td>Commercial</td>
                  <td>Construction</td>
                  <td>Education</td>
                </tr>
                <tr>
                  <td>Food</td>
                  <td>Fuel</td>
                  <td>Government</td>
                </tr>
                <tr>
                  <td>Healthcare</td>
                  <td>Hotel</td>
                  <td>Industry</td>
                </tr>
                <tr>
                  <td>Landmark</td>
                  <td>Office</td>
                  <td>Others</td>
                </tr>
                <tr>
                  <td>Recreation</td>
                  <td>Religious Place</td>
                  <td>Residential</td>
                </tr>
                <tr>
                  <td>Shop</td>
                  <td>Transportation</td>
                  <td>Utility</td>
                </tr>
              </tbody>
            </Table>
          </div>

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
                  <td>longitude</td>
                  <td>90.36668110638857</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>latitude</td>
                  <td>23.83723803415923</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>ptype</td>
                  <td>Office</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>distance</td>
                  <td>1 (km)</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>limit</td>
                  <td>10</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-5 mb-3 ${Style.intro}`}>Nearby API with Category Request Example</h2>

          <pre className={Style.coding}>
              <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'https://barikoi.xyz/v2/api/search/nearby/category/API_KEY/1/10?longitude=90.36668110638857&&latitude=23.83723803415923&ptype=office'</span>
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
                        "id": 485763,
                        "name": "Mulytic Labs",
                        "distance_in_meters": 11.24627601291792,
                        "longitude": "90.36672234535217",
                        "latitude": "23.837144191228138",
                        "Address": "Mulytic Labs, Jol Torongo, House 555, Road 9",
                        "city": "Dhaka",
                        "area": "Mirpur Dohs",
                        "pType": "Office",
                        "subType": "Branch Office",
                        "uCode": "IDVH3378",
                        "contact_person_phone": "+880-131-848-54",
                        "ST_AsText(location)": "POINT(90.36672234535217 23.837144191228138)"
                    },
                    {
                        "id": 515213,
                        "name": "Digitruck Bangladesh",
                        "distance_in_meters": 67.28097548803157,
                        "longitude": "90.367076396942",
                        "latitude": "23.837723194896",
                        "Address": "Digitruck Bangladesh, House 625, Road 10",
                        "city": "Dhaka",
                        "area": "Mirpur Dohs",
                        "pType": "Office",
                        "subType": "Head Office",
                        "uCode": "HNOM8349",
                        "contact_person_phone": "01312 667373",
                        "ST_AsText(location)": "POINT(90.367076396942 23.837723194896)"
                    },
                    {
                        "id": 415887,
                        "name": "Acme Technologies Limited",
                        "distance_in_meters": 69.1944507498262,
                        "longitude": "90.36733120679855",
                        "latitude": "23.83742142635796",
                        "Address": "Acme Technologies Limited, House 630, Road 9",
                        "city": "Dhaka",
                        "area": "Mirpur Dohs",
                        "pType": "Office",
                        "subType": "HEAD OFFICE",
                        "uCode": "QMVA4960",
                        "contact_person_phone": null,
                        "ST_AsText(location)": "POINT(90.36733120679855 23.83742142635796)"
                    }
                ]
            }              
              } />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Nearby API with Category with all parameter 1 API call is counted.</p>
          </div>
          {/* nearby api with Multiple types */}
          <h2 className={`mt-5 mb-3 ${Style.intro}`}>Nearby API with Multiple Types</h2>
          <p style={{fontSize:"25px"}} className="mt-2 mb-3">
              <code className={Style.get}>GET</code>
              Nearby API with Multiple Types
            </p>
            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://barikoi.xyz/v2/api/search/nearby/multi/type/API_KEY/DISTANCE/LIMIT?q=PLACE_TYPES&longitude=TARGET_LONGITUDE&latitude=TARGET_LATITUDE</span>
                  </div>
                  {/* <button type="button" className={NearStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <p className={Style.text}>This returns data with specific place types</p>
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
                  <td>longitude</td>
                  <td>90.36668110638857</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>latitude</td>
                  <td>23.83723803415923</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>q</td>
                  <td>atm,school</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>distance	</td>
                  <td>5 (km)</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>limit</td>
                  <td>5</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>
          <h2 className={`mt-5 mb-3 ${Style.intro}`}>Nearby API with Multiple Types Request Example</h2>

          <pre className={Style.coding}>
              <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'https://barikoi.xyz/v2/api/search/nearby/multi/type/API_KEY/5/5?q=atm,school&longitude=90.41634254157543&latitude=23.832393074088362'</span>
                    <span className="txtColor">)</span>
                    </span> <br />
                    <div className="ml-3">
                    <span className="txtColor">.then(response ={'>'} response.json())</span><br />
                    <span className="txtColor">.catch(error ={'>'} console.error(<span className="url">'Error:'</span>, error))</span><br />
                    <span className="txtColor">.then(response ={'>'} console.log(<span className="url">'Success:'</span>, response))</span>
                  </div>
              </div>
                      {/* <button type="button" className={NearStyle.copyBtn}>Copy</button> */}
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
                        "id": 502862,
                        "name": "Standard Chartered Bank (Scb) Atm",
                        "distance_in_meters": 253.05800281013194,
                        "longitude": "90.418757200241",
                        "latitude": "23.832941430342",
                        "pType": "Bank",
                        "Address": "Standard Chartered Bank (Scb) Atm, Lotus Kamal Tower 1, New Airport Road, Nikunja 2",
                        "area": "Nikunja",
                        "city": "Dhaka",
                        "postCode": 1229,
                        "subType": "ATM",
                        "uCode": "UWZO0581",
                        "ST_AsText(location)": "POINT(90.418757200241 23.832941430342)"
                    },
                    {
                        "id": 119584,
                        "name": "Jane Alam Government High School",
                        "distance_in_meters": 264.91397210547393,
                        "longitude": "90.41447706520559",
                        "latitude": "23.830730510001846",
                        "pType": "Education",
                        "Address": "Jane Alam Government High School, Tanpara, Nikunja 2",
                        "area": "Nikunja",
                        "city": "Dhaka",
                        "postCode": 1229,
                        "subType": "SCHOOL",
                        "uCode": "ABLE7705",
                        "ST_AsText(location)": "POINT(90.41447706520559 23.830730510001846)"
                    },
                    {
                        "id": 392671,
                        "name": "Genius Model School",
                        "distance_in_meters": 330.0645537248065,
                        "longitude": "90.41713178157806",
                        "latitude": "23.829513859028346",
                        "pType": "Education",
                        "Address": "Genius Model School, House 27, Road 04, Nikunja 2",
                        "area": "Nikunja",
                        "city": "Dhaka",
                        "postCode": 1229,
                        "subType": "SCHOOL",
                        "uCode": "KUOX8155",
                        "ST_AsText(location)": "POINT(90.41713178157806 23.829513859028346)"
                    }
                ]
            }      
              } />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Nearby API with Multiple Types with all parameter 1 API call is counted.</p>
          </div>
          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/autocomplete'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Autocomplete</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/distance'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Distance
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default Nearby;