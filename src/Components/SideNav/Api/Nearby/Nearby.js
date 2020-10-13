import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const Nearby = () => {
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
          <code>
              <div>
              <div className="txtColor">
              <div className="mb-2">
              <span> {"{"} </span><br />
              </div>
              <div className="ml-4">
              <span className="ml-1">"places": {"["}</span><br />
              <span className="ml-3"> {"{"} </span>
              <div className="ml-5">
              <span>"id": 452923,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"name": </span>
                <span className="url">"Artland",</span>
              </div>
              <span className="txtColor">"distance_in_meters": 9.91042449889066,</span>
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.36668747663498",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.83714909804975",</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Education",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Artland, Jol Torongo, House 555, Road 9",</span>
              </div>
              <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Mirpur Dohs",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                
                <span className="txtColor">"postCode": 1216,</span>
              </div>
              <div>
                <span className="txtColor">"subType": </span>
                <span className="url">"Art School",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"IDIX1880",</span>
              </div>
              <div>
                <span className="txtColor">"ST_AsText(location)": </span>
                <span className="url">"POINT(90.36668747663498 23.83714909804975)"</span>
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
              <span>"id": 485763,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"name": </span>
                <span className="url">"Mulytic Labs",</span>
              </div>
              <span className="txtColor">"distance_in_meters": 11.24627601291792,</span>
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.36672234535217",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.837144191228138",</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Office",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Mulytic Labs, Jol Torongo, House 555, Road 9",</span>
              </div>
              <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Mirpur Dohs",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                
                <span className="txtColor">"postCode": 1216,</span>
              </div>
              <div>
                <span className="txtColor">"subType": </span>
                <span className="url">"Branch Office",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"IDVH3378",</span>
              </div>
              <div>
                <span className="txtColor">"ST_AsText(location)": </span>
                <span className="url">"POINT(90.36672234535217 23.837144191228138)"</span>
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
              <span>"id": 512618,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"name": </span>
                <span className="url">"Touch-Up Beauty Parlour",</span>
              </div>
              <span className="txtColor">"distance_in_meters": 11.700339826282454,</span>
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.366759896278",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.837161365103",</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Shop",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Touch-Up Beauty Parlour, Jol Torongo, House 555, Road 9",</span>
              </div>
              <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Mirpur Dohs",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                
                <span className="txtColor">"postCode": 1216,</span>
              </div>
              <div>
                <span className="txtColor">"subType": </span>
                <span className="url">"Womens Parlour",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"FLDL1270",</span>
              </div>
              <div>
                <span className="txtColor">"ST_AsText(location)": </span>
                <span className="url">"POINT(90.366759896278 23.837161365103)"</span>
              </div>
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"}"} </span><br />
              <span className="pl-2">.......</span><br />
              </div>
              <div className="ml-4 mb-2 txtColor">
              <span>]</span><br />
              </div>
              <span className="txtColor"> {"}"} </span><br />
              </div>
                  {/* <button type="button" className={GeoStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
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
            <Table striped bordered hover>
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
          <code>
              <div>
              <div className="txtColor">
              <div className="mb-2">
              <span> {"{"} </span><br />
              </div>
              <div className="ml-4">
              <span className="ml-1">"places": {"["}</span><br />
              <span className="ml-3"> {"{"} </span>
              <div className="ml-5">
              <span>"id": 485763,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"name": </span>
                <span className="url">"Mulytic Labs",</span>
              </div>
              <span className="txtColor">"distance_in_meters": 11.24627601291792,</span>
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.36672234535217",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.837144191228138",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Mulytic Labs, Jol Torongo, House 555, Road 9",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                
                {/* <span className="txtColor">"postCode": 1216,</span> */}
              </div>
              <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Mirpur Dohs",</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Office",</span>
              </div>
              <div>
                <span className="txtColor">"subType": </span>
                <span className="url">"Branch Office",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"IDVH3378",</span>
              </div>
              <div>
                <span className="txtColor">"contact_person_phone": </span>
                <span className="url">"+880-131-848-54",</span>
              </div>
              <div>
                <span className="txtColor">"ST_AsText(location)": </span>
                <span className="url">"POINT(90.36672234535217 23.837144191228138)"</span>
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
              <span>"id": 515213,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"name": </span>
                <span className="url">"Digitruck Bangladesh",</span>
              </div>
              <span className="txtColor">"distance_in_meters": 67.28097548803157,</span>
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.367076396942",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.837723194896",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Digitruck Bangladesh, House 625, Road 10",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                
                {/* <span className="txtColor">"postCode": 1216,</span> */}
              </div>
              <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Mirpur Dohs",</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Office",</span>
              </div>
              <div>
                <span className="txtColor">"subType": </span>
                <span className="url">"Head Office",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"HNOM8349",</span>
              </div>
              <div>
                <span className="txtColor">"contact_person_phone": </span>
                <span className="url">"01312 667373",</span>
              </div>
              <div>
                <span className="txtColor">"ST_AsText(location)": </span>
                <span className="url">"POINT(90.367076396942 23.837723194896)"</span>
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
              <span>"id": 415887,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"name": </span>
                <span className="url">"Acme Technologies Limited",</span>
              </div>
              <span className="txtColor">"distance_in_meters": 69.1944507498262,</span>
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.36733120679855",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.83742142635796",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Acme Technologies Limited, House 630, Road 9",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                
                {/* <span className="txtColor">"postCode": 1216,</span> */}
              </div>
              <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Mirpur Dohs",</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Office",</span>
              </div>
              <div>
                <span className="txtColor">"subType": </span>
                <span className="url">"Head Office",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"QMVA4960",</span>
              </div>
              <div>
                <span className="txtColor">"contact_person_phone": </span>
                <span className="txt">null</span>
              </div>
              <div>
                <span className="txtColor">"ST_AsText(location)": </span>
                <span className="url">"POINT(90.36733120679855 23.83742142635796)"</span>
              </div>
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"}"} </span><br />
              <span className="pl-2">.......</span><br />
              </div>
              <div className="ml-4 mb-2 txtColor">
              <span>]</span><br />
              </div>
              <span className="txtColor"> {"}"} </span><br />
              </div>
                  {/* <button type="button" className={GeoStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
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
          <code>
              <div>
              <div className="txtColor">
              <div className="mb-2">
              <span> {"{"} </span><br />
              </div>
              <div className="ml-4">
              <span className="ml-1">"places": {"["}</span><br />
              <span className="ml-3"> {"{"} </span>
              <div className="ml-5">
              <span>"id": 502862,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"name": </span>
                <span className="url">"Standard Chartered Bank (Scb) Atm",</span>
              </div>
              <span className="txtColor">"distance_in_meters": 253.05800281013194,</span>
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.418757200241",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.832941430342",</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Bank",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Standard Chartered Bank (Scb) Atm, Lotus Kamal Tower 1, New Airport Road, Nikunja 2",</span>
              </div>
              <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Nikunja",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                
                <span className="txtColor">"postCode": 1229,</span>
              </div>
              <div>
                <span className="txtColor">"subType": </span>
                <span className="url">"ATM",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"UWZO0581",</span>
              </div>
              <div>
                <span className="txtColor">"ST_AsText(location)": </span>
                <span className="url">"POINT(90.418757200241 23.832941430342)"</span>
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
              <span>"id": 119584,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"name": </span>
                <span className="url">"Jane Alam Government High School",</span>
              </div>
              <span className="txtColor">"distance_in_meters": 264.91397210547393,</span>
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.41447706520559",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.830730510001846",</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Education",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Jane Alam Government High School, Tanpara, Nikunja 2",</span>
              </div>
              <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Nikunja",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                
                <span className="txtColor">"postCode": 1229,</span>
              </div>
              <div>
                <span className="txtColor">"subType": </span>
                <span className="url">"SCHOOL",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"ABLE7705",</span>
              </div>
              <div>
                <span className="txtColor">"ST_AsText(location)": </span>
                <span className="url">"POINT(90.41447706520559 23.830730510001846)"</span>
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
              <span>"id": 392671,</span><br/>
              </div>
              </div>
              </div>
              <div className="ml-5 pl-4">
              <div>
                <span className="txtColor">"name": </span>
                <span className="url">"Genius Model School",</span>
              </div>
              <span className="txtColor">"distance_in_meters": 330.0645537248065,</span>
              <div>
                <span className="txtColor">"longitude": </span>
                <span className="url">"90.41713178157806",</span>
              </div>
              <div>
                <span className="txtColor">"latitude": </span>
                <span className="url">"23.829513859028346",</span>
              </div>
              <div>
                <span className="txtColor">"pType": </span>
                <span className="url">"Education",</span>
              </div>
              <div>
                <span className="txtColor">"address": </span>
                <span className="url">"Genius Model School, House 27, Road 04, Nikunja 2",</span>
              </div>
              <div>
                <span className="txtColor">"area": </span>
                <span className="url">"Nikunja",</span>
              </div>
              <div>
                <span className="txtColor">"city": </span>
                <span className="url">"Dhaka",</span><br />
                
                <span className="txtColor">"postCode": 1229,</span>
              </div>
              <div>
                <span className="txtColor">"subType": </span>
                <span className="url">"SCHOOL",</span>
              </div>
              <div>
                <span className="txtColor">"ucode": </span>
                <span className="url">"KUOX8155",</span>
              </div>
              <div>
                <span className="txtColor">"ST_AsText(location)": </span>
                <span className="url">"POINT(90.41713178157806 23.829513859028346)"</span>
              </div>
              </div>
              <div className="txtColor ml-4 pl-3">
              <span> {"}"} </span><br />
              <span className="pl-2">.......</span><br />
              </div>
              <div className="ml-4 mb-2 txtColor">
              <span>]</span><br />
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