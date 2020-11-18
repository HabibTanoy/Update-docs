import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import ReactJson from 'react-json-view'

const AddApi = () => {
  document.title = "Add Place . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Add Place</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>POST</code>
              Add Place
            </p>

            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://barikoi.xyz/v1/API_KEY/add/place</span>
                  </div>
                  {/* <button type="button" className={AddStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>
          <div className="w-75">
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
                  <td>latitude</td>
                  <td>23.85498547028746</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>longitude</td>
                  <td>90.35691127743058</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>city</td>
                  <td>Dhaka</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>area</td>
                  <td>Uttara</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>postCode</td>
                  <td>1216</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>pType</td>
                  <td>Office</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>subType</td>
                  <td>Head Office</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>business_name</td>
                  <td>Barikoi Office (Barikoi.com)</td>
                  <td></td>
                </tr>
                <tr>
                  <td>place_name</td>
                  <td>Karnaphully Building</td>
                  <td></td>
                </tr>
                <tr>
                  <td>holding_number</td>
                  <td>23423</td>
                  <td></td>
                </tr>
                <tr>
                  <td>road_name_number</td>
                  <td>2/a</td>
                  <td></td>
                </tr>
                <tr>
                  <td>super_sub_area</td>
                  <td>RAJUK Apartment Project</td>
                  <td></td>
                </tr>
                <tr>
                  <td>sub_area</td>
                  <td>Sector 18</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3 mb-5">
          <pre className={Style.coding}>
          <ReactJson 
            theme="ocean"
            enableClipboard={false}
              displayDataTypes={false}
              displayObjectSize={false}
              indentWidth="10"
              src={
                {
                  "message": "place added successfully",
                  "status": 200,
                  "uCode": "MKQJ3341"
              }              
            } />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Add Place with all parameter 1 API call is counted.</p>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/route-api'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Routing Api</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/district'>
                  <h5>Next</h5>
                  <h4 className="mb-0">District Api
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default AddApi;