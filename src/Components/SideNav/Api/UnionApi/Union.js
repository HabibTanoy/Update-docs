import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const UnionApi = () => {
  document.title = "Union Api . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Union Api</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Union API
            </p>

            <pre className={Style.coding}>
            <CopyBlock
              text={
                `http://barikoi.xyz/v1/api/API_KEY/unions?q=Abaipur`
              }
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>

          <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>

          <div className="w-50">
            <Table striped bordered className="text-center">
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>q</td>
                  <td>Abaipur</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Union API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <CopyBlock
              text={
                `fetch('http://barikoi.xyz/v1/api/API_KEY/unions?q=Abaipur')\n\t.then(response => response.json())\n\t.catch(error => console.error('Error:', error))\n\t.then(response => console.log('Success:', response))`
              }
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <CopyBlock
              text={
    `{
      "places": [
          {
              "id": 1,
              "name": "Abaipur",
              "sub_district": "Shailkupa",
              "center": "{\"type\": \"Point\", \"coordinates\": [89.32057699103409, 23.59762103167178]}"
          }
      ],
      "status": 200
  }`
              }
              language={"json"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Without Params</h2>
          <p className={Style.text}>If q is not given then the api will return all unions.</p>
          <pre className={Style.coding}>
          <CopyBlock
              text={
                `http://barikoi.xyz/v1/api/API_KEY/unions`
              }
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Union API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <CopyBlock
              text={
                `fetch('http://barikoi.xyz/v1/api/API_KEY/unions')\n\t.then(response => response.json())\n\t.catch(error => console.error('Error:', error))\n\t.then(response => console.log('Success:', response))`
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
    `{
      "places": [
          {
              "id": 1203,
              "name": "Chikashi",
              "sub_district": "Dhunat",
              "center": "{\"type\": \"Point\", \"coordinates\": [89.56380109324998, 24.75404197173319]}"
          },
          {
              "id": 1204,
              "name": "Chikdair",
              "sub_district": "Raozan",
              "center": "{\"type\": \"Point\", \"coordinates\": [91.8800217668128, 22.54372849367624]}"
          },
          {
              "id": 1205,
              "name": "Chiknagul",
              "sub_district": "Jaintiapur",
              "center": "{\"type\": \"Point\", \"coordinates\": [92.00116400240036, 24.956171818679373]}"
          },
          {
              "id": 1206,
              "name": "Chiknikandi",
              "sub_district": "Galachipa",
              "center": "{\"type\": \"Point\", \"coordinates\": [90.45560794068692, 22.243360479923517]}"
          }
          .......
      ],
      "status": 200
  }`
              }
              language={"json"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Union API with all parameter 0 API call is counted.</p>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/city-api'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  City Api</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/ward-by-location'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Ward By Geo location
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default UnionApi;