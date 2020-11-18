import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const CityApi = () => {
  document.title = "City Api . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>City Api</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              City API
            </p>

            <pre className={Style.coding}>
            <CopyBlock
              text={
                `http://barikoi.xyz/v1/api/API_KEY/cities?q=Dhaka`
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
                  <td>Dhaka</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Sub-District API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <CopyBlock
              text={
                `fetch('http://barikoi.xyz/v1/api/API_KEY/cities?q=Dhaka')\n\t.then(response => response.json())\n\t.catch(error => console.error('Error:', error))\n\t.then(response => console.log('Success:', response))`
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
            "name": "Dhaka",
            "areas": [
                {
                    "name": "Moghbazar"
                },
                {
                    "name": "Gendaria"
                },
                {
                    "name": "Sher E Bangla Nagar"
                },
                {
                    "name": "Tejgaon"
                },
                {
                    "name": "Mohakhali"
                },
                {
                    "name": "Ramna"
                }
                .......
            ]
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
          <p className={Style.text}>If q is not given then the api will return all cities.</p>
          <pre className={Style.coding}>
          <CopyBlock
              text={
                `http://barikoi.xyz/v1/api/API_KEY/cities`
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
                `fetch('http://barikoi.xyz/v1/api/API_KEY/cities')\n\t.then(response => response.json())\n\t.catch(error => console.error('Error:', error))\n\t.then(response => console.log('Success:', response))`
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
            "name": "Rajshahi",
            "areas": []
        },
        {
            "name": "Khulna",
            "areas": []
        },
        {
            "name": "Barisal",
            "areas": []
        },
        {
            "name": "Dhaka",
            "areas": [
                {
                    "name": "Moghbazar"
                },
                {
                    "name": "Gendaria"
                },
                {
                    "name": "Sher E Bangla Nagar"
                },
                {
                    "name": "Tejgaon"
                },
                {
                    "name": "Mohakhali"
                },
                {
                    "name": "Ramna"
                },
                {
                    "name": "Sadarghat"
                },
                {
                    "name": "Banani"
                },
                {
                    "name": "Lalmatia"
                },
                {
                    "name": "Dhanmondi"
                },
                {
                    "name": "Gulshan 2"
                },
                {
                    "name": "Nikunja"
                }
                .......
            ]
        },
        {
            "name": "Chittagong",
            "areas": []
        },
        {
            "name": "Sylhet",
            "areas": []
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
          <p className={`font-weight-bold ${Style.text}`}>For each request of City API with all parameter 0 API call is counted.</p>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/sub-district'>
                  <h5 >Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Sub-District Api</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/union-api'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Union Api
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default CityApi;