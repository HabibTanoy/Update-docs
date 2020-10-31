import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const AppRequest = () => {
    document.title = "Request Revision . Barikoi Documentation";
    return(
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Request Revision</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>PUT</code>
              Request Revision
            </p>

            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://admin.barikoi.xyz:8090/request/revision/563</span>
                  </div>
                  {/* <button type="button" className={CityStyle.copyBtn}>Copy</button> */}
              </code>
            </pre>

            <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>

            <div className="w-50">
            <Table striped bordered>
            <thead>
                <tr>
                    <th scope="col">Parameter</th>
                    <th scope="col">Value</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>task_id</td>
                    <td>563</td>
                    <td>Requied</td>
                </tr>
                </tbody>
            </Table>
            </div>  
            <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3 mb-5">
          <pre className={Style.coding}>
          <code>
              <div>
              <span className="txtColor"> {"{"} </span><br />
                  <div className="ml-5">
                  <span className="txtColor">"message":</span>
                  <span className="url"> "Request for revision successful",</span> <br />
                  <span className="txtColor">"status": 200</span>
                  </div> 
                  <span className="txtColor"> {"}"} </span>
              </div>
                    {/* <button type="button" className={Style.copyBtn}
                    >Copy</button>   */}
                </code>
          </pre>
          </div>
        </div>
    )
}

export default AppRequest;