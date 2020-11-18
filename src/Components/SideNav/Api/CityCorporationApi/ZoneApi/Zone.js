import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const ZoneApi = () => {
  document.title = "Zone by Geo location . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Zone by Geo location</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Zone by Geolocation
            </p>
            <pre className={Style.coding}>
            <CopyBlock
              text={
                `https://barikoi.xyz/v1/api/search/zone/API_KEY/LONGITUDE/LATITUDE`
              }
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          <p className={Style.text}>Returns the zone of given longitude and latitude.</p>

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
                  <td>longitude</td>
                  <td>90.418619474572</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>latitude</td>
                  <td>23.83136348674859</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Ward by Geolocation API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <CopyBlock
              text={
                `fetch('https://barikoi.xyz/v1/api/search/zone/API_KEY/90.4186194745721/23.83136348674859')\n\t.then(response => response.json())\n\t.catch(error => console.error('Error:', error))\n\t.then(response => console.log('Success:', response))`
              }
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          </div> 

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3 mb-5">
          <pre className={Style.coding}>
          <CopyBlock
              text={
    `[
      {
          "Zone": 1
      }
]`
              }
              language={"json"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Zone by Geolocation API with all parameter 1 API call is counted.</p>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/ward-by-location'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Ward By Geo location</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/ward-zone-by-location' >
                  <h5 >Next</h5>
                  <h4 className="mb-0"> Ward {"&"} Zone by Geolocation
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default ZoneApi;