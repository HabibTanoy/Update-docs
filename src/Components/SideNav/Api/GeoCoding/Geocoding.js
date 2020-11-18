import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const GeoCoding = () => {
  document.title = "Geocoding . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Geocoding</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Geocoding API
          </p>

          <pre className={Style.coding}>
          <CopyBlock
              text={
                `https://barikoi.xyz/v1/api/search/geocode/API_KEY/place/place_id`
              }
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          <p className={Style.text}>Geocode API for Developers. This returns location data of a specific place.</p>
          <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>

          <div className="w-50">
            <Table striped bordered className="text-center">
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Value</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>place_id</td>
                  <td>3354</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-5 mb-3 ${Style.intro}`}>Geocoding API Request Example</h2>
          <pre className={Style.coding}>
          <CopyBlock
              text={
                `fetch('https://barikoi.xyz/v1/api/search/geocode/API_KEY/place/3354')\n\t.then(response => response.json())\n\t.catch(error => console.error('Error:', error))\n\t.then(response => console.log('Success:', response))`
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
          "id": 3354,
          "address": "Barikoi Office, House 192, Road 2",
          "area": "Mirpur Dohs",
          "city": "Dhaka",
          "postcode": 1216,
          "ucode": "BKOI2017",
          "longitude": "90.3673348642485",
          "latitude": "23.8340107016275",
          "pType": "Office",
          "subType": "Head Office"
      },
      "status": 200
}`
              }
              language={"json"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Geocoding API with all parameter 1 API call is counted.</p>
          </div>
          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/geo-server'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                    Reverse Geocoding (Server)</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 nxt ${Style.previous} ${Style.next}`}>
              <Link to='/autocomplete'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Autocomplete
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default GeoCoding;