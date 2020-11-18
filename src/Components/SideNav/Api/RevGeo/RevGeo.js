import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col, Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const RevGeo = () => {
  document.title = "Reverse Geocode . Barikoi Documentation";
  return ( 
      <div>
          <h1 className={`mt-4 ${Style.api}`}>Reverse Geocode</h1>
          <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Reverse Geocoding API
          </p>
          <pre className={Style.coding}>
            <CopyBlock
              text={`https://barikoi.xyz/v1/api/search/reverse/API_KEY/geocode?longitude=90.3737&latitude=23.7881&district=true&post_code=true&country=true&sub_district=true&union=false&pauroshova=false&location_type=true`}
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          <p className={Style.text}>Returns an address given longitude and latitude.</p>
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
                  <td>90.3737</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>latitude</td>
                  <td>23.7881</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>district</td>
                  <td>true</td>
                  <td></td>
                </tr>
                <tr>
                  <td>post_code</td>
                  <td>true</td>
                  <td></td>
                </tr>
                <tr>
                  <td>country</td>
                  <td>true</td>
                  <td></td>
                </tr>
                <tr>
                  <td>sub_district</td>
                  <td>true</td>
                  <td></td>
                </tr>
                <tr>
                  <td>union</td>
                  <td>false</td>
                  <td></td>
                </tr>
                <tr>
                  <td>pauroshova</td>
                  <td>false</td>
                  <td></td>
                </tr>
                <tr>
                  <td>location_type</td>
                  <td>true</td>
                  <td></td>
                </tr>
              </tbody>
            </Table>
          </div>
          <div>
          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Rate Limit</h2>
          <p className={`mt-3 ${Style.text}`}>2000 Requests per minute</p>
          </div>
          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Reverse Geocoding API Request Example</h2>
          <pre className={Style.coding}>
          <CopyBlock
              text={
                `fetch('https://barikoi.xyz/v1/api/search/reverse/API_KEY/geocode?longitude=90.3737&latitude=23.7881&district=true&post_code=true&country=true&sub_district=true&union=false&pauroshova=false&location_type=true')\n\t.then(response => response.json())\n\t.catch(error => console.error('Error:', error))\n\t.then(response => console.log('Success:', response))`
              }
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3 mb-5">
          <pre className={Style.coding}>
          <CopyBlock
              text={
                `{
      "place": {
          "id": 177936,
          "distance_within_meters": 1.167,
          "address": "Mohosin Uddin, House 462, West Shewrapara",
          "area": "Mirpur",
          "city": "Dhaka",
          "postCode": 1216,
          "location_type": "Urban",
          "district": "Dhaka",
          "country": "Bangladesh",
          "sub_district": "Kafrul"
      },
      "status": 200
}`}
              language={"json"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Reverse Geocode with all parameter 8 API call is counted.</p>
          </div>
          <Row className={Style.testing}>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/intro'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                    Barikoi Places API</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/geo-server'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Reverse Geocoding (Server)
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
      </div>
   );
}

export default RevGeo;