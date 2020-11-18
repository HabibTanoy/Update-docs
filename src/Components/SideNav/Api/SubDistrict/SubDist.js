import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const SubDistrict = () => {
  document.title = "Sub-District Api . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Sub-District Api</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Sub-District API
            </p>

            <pre className={Style.coding}>
            <CopyBlock
              text={
                `http://barikoi.xyz/v1/api/API_KEY/sub_districts?q=Khilgaon`
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
                  <td>Khilgaon</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Sub-District API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <CopyBlock
              text={
                `fetch('http://barikoi.xyz/v1/api/API_KEY/sub_districts?q=Khilgaon')\n\t.then(response => response.json())\n\t.catch(error => console.error('Error:', error))\n\t.then(response => console.log('Success:', response))`
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
              "id": 280,
              "name": "Khilgaon",
              "district": "Dhaka",
              "center": "{\"type\": \"Point\", \"coordinates\": [90.45477443959228, 23.759899924349806]}"
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
          <p className={Style.text}>If q is not given then the api will return all sub-districts.</p>
          <pre className={Style.coding}>
          <CopyBlock
              text={
                `http://barikoi.xyz/v1/api/API_KEY/sub_districts`
              }
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Sub-District API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <CopyBlock
              text={
                `fetch('http://barikoi.xyz/v1/api/API_KEY/sub_districts')\n\t.then(response => response.json())\n\t.catch(error => console.error('Error:', error))\n\t.then(response => console.log('Success:', response))`
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
              "id": 1,
              "name": "Abhaynagar",
              "district": "Jessore",
              "center": "{\"type\": \"Point\", \"coordinates\": [89.42057859019934, 23.01760534615544]}"
          },
          {
              "id": 2,
              "name": "Adabor",
              "district": "Dhaka",
              "center": "{\"type\": \"Point\", \"coordinates\": [90.3533353289662, 23.770166931185912]}"
          },
          {
              "id": 3,
              "name": "Adamdighi",
              "district": "Bogra",
              "center": "{\"type\": \"Point\", \"coordinates\": [89.05945382380858, 24.79924085609132]}"
          },
          {
              "id": 4,
              "name": "Aditmari",
              "district": "Lalmonirhat",
              "center": "{\"type\": \"Point\", \"coordinates\": [89.36945393829866, 25.94501576520455]}"
          },
          {
              "id": 5,
              "name": "Agailjhara",
              "district": "Barisal",
              "center": "{\"type\": \"Point\", \"coordinates\": [90.14076039190546, 22.96784467745809]}"
          },
          {
              "id": 6,
              "name": "Ajmiriganj",
              "district": "Habiganj",
              "center": "{\"type\": \"Point\", \"coordinates\": [91.2841877763222, 24.55331228982608]}"
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
          <p className={`font-weight-bold ${Style.text}`}>For each request of Sub-District API with all parameter 0 API call is counted.</p>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/district'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  District Api</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/city-api'>
                  <h5>Next</h5>
                  <h4 className="mb-0">City Api
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default SubDistrict;