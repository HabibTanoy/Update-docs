import React from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"


const PlaceApi = (props) => {

    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Barikoi Places API</h1>

            <h2 className={`mt-5 mb-3 ${Style.intro}`}>Introduction</h2> 
            <p className={Style.text}>Welcome to Barikoi API. Thank you for checking a Bangladeshi location data provider API. Our API Helps you to find address, geocode and reverse geocode place and city corporation information in Dhaka in our local context.</p>
            <h2 className={`mt-5 mb-3 ${Style.intro}`}>Overview</h2> 
            <p className={Style.text}>The currently listed Places API's are for autocomplete, post office autocomplete, geocoding, reverse geocoding, nearby, distance {"&"} rupantor geocoder. And City Corporation API's are Ward by Geolocation, Zone by Geolocation, Ward and Zone by Geolocation, City Corporation by Geolocation.</p>
            <h2 className={`mt-5 mb-3 ${Style.intro}`}>Authentication</h2>
            <p className={Style.text}>API Key is needed to use all the API's.<a style={{color:"#2ddbac", textDecoration:"none"}} href="https://barikoi.com/signup"> Sign up</a> in Barikoi to get the API KEY.</p>
            <h2 className={`mt-5 mb-3 ${Style.intro}`}>Error Codes</h2>
            <strong className={Style.limit}>API Limit Exceeded</strong>
            <div className="mt-3">
            <pre className={Style.coding}>
                <code>
                    <div>
                        <span className="txtColor"> {"{"} </span><br />
                            <div className="ml-5">
                            <span className="txtColor">"message":</span>
                            <span className="url"> "API LIMIT EXCEEDED",</span> <br />
                            <span className="txtColor">"status": 429</span> 
                            </div> 
                            <span className="txtColor"> {"}"} </span>
                    </div>
                    {/* <button type="button" className={placeStyle.copyBtn}>Copy</button>   */}
                </code>
            </pre>
            </div>

            <strong className={Style.limit}>Invalid or No Regsitered Key</strong>
            <div className="mt-3">
            <pre className={Style.coding}>
                <code>
                <div>
                    <span className="txtColor"> {"{"} </span><br />
                        <div className="ml-5">
                        <span className="txtColor">"message":</span>
                        <span className="url"> "Invalid or No Registered Key",</span> <br />
                        <span className="txtColor">"status": 401</span> 
                        </div> 
                        <span className="txtColor"> {"}"} </span>
                    </div>
                    {/* <button type="button" className={placeStyle.copyBtn}>Copy</button>   */}
                </code>
            </pre>
            </div>

            <strong className={Style.limit}>Missing Parameter</strong>
            <div className="mt-3">
            <pre className={Style.coding}>
                <code>
                    <div>
                    <span className="txtColor"> {"{"} </span><br />
                        <div className="ml-5">
                        <span className="txtColor">"message":</span>
                        <span className="url"> "Parameter missing",</span> <br />
                        <span className="txtColor">"status": 400</span> 
                        </div> 
                        <span className="txtColor"> {"}"} </span>
                    </div>
                    {/* <button type="button" className={placeStyle.copyBtn}>Copy</button>   */}
                </code>
            </pre>
            </div>

            <strong className={Style.limit}>Payment Exception</strong>
            <div className="mt-3">
            <pre className={Style.coding}>
                <code>
                <div>
                    <span className="txtColor"> {"{"} </span><br />
                        <div className="ml-5">
                        <span className="txtColor">"message":</span>
                        <span className="url"> "payment exception",</span> <br />
                        <span className="txtColor">"status": 402</span> 
                        </div> 
                        <span className="txtColor"> {"}"} </span>
                    </div>
                    {/* <button type="button" className={placeStyle.copyBtn}>Copy</button>   */}
                </code>
            </pre>
            </div>
            <h2 className={`mt-3 mb-3 ${Style.intro}`}>Rate Limit</h2>
            <p className={`mt-3 ${Style.text}`}>60 Requests per minute</p>

            <h2 className={`mt-3 mb-3 ${Style.intro}`}>API Usage Clarification</h2>
            <p className={`mt-3 ${Style.text}`}>A single API request and a single API call are not always the same. A single API request to the server might call multiple APIs. An API might depend on other internal APIs to deliver the desired response. The number of call depends on the number of parameters of a request and the number of internal API calls needed to make to provide the desired response. For instance, A single request to Rupantor API results in two API calls since Rupantor API uses geocode API to operate. Routing API follows the same formalities as Rupantor.</p>
            <p className={`mt-3 ${Style.text}`}>For any query or tech support please mail at <span style={{color:"#2ddbac"}} >support@barikoi.com</span> </p>
            <Row>
            <Col sm={6}> 
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/rev-geo'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Reverse Geocode
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default PlaceApi;