import React, { Component } from 'react';
import placeStyle from '../PlaceApi/Place.module.css'
import { Link } from 'react-router-dom'

const PlaceApi = props => {
    return ( 
        <div>
            <h1 className={`mt-4 ${placeStyle.api}`}>Barikoi Places API</h1>

            <h2 className={`mt-5 mb-3 ${placeStyle.intro}`}>Introduction</h2> 
            <p className={placeStyle.introPtag}>Welcome to Barikoi API. Thank you for checking a Bangladeshi location data provider API. Our API Helps you to find address, geocode and reverse geocode place and city corporation information in Dhaka in our local context.</p>
            <h2 className={`mt-5 mb-3 ${placeStyle.intro}`}>Overview</h2> 
            <p className={placeStyle.introPtag}>The currently listed Places API's are for autocomplete, post office autocomplete, geocoding, reverse geocoding, nearby, distance & rupantor geocoder. And City Corporation API's are Ward by Geolocation, Zone by Geolocation, Ward and Zone by Geolocation, City Corporation by Geolocation.</p>
            <h2 className={`mt-5 mb-3 ${placeStyle.intro}`}>Authentication</h2>
            <p className={placeStyle.introPtag}>API Key is needed to use all the API's. Sign up. in Barikoi to get the API KEY.</p>
            <h2 className={`mt-5 mb-3 ${placeStyle.intro}`}>Error Codes</h2>
            <strong className={placeStyle.limit}>API Limit Exceeded</strong>
            <div className="mt-3">
            <pre className={placeStyle.coding}>
                <code>
                    <div>
                    <span className={placeStyle.smsColor}>{props.brek}</span>
                    </div>
                    <div className="ml-4">
                    <div>
                    <span className={placeStyle.smsColor}>"message":</span>
                    <span className={placeStyle.textColor}> "API LIMIT EXCEEDED",</span>
                    </div>
                    <div>
                    <span className={placeStyle.smsColor}>"status": 429</span> 
                    </div> 
                    </div>
                    <div>
                    <span className={placeStyle.smsColor}>{props.endBrk}</span>
                    </div>
                    <button type="button" className={placeStyle.copyBtn}>Copy</button>  
                </code>
            </pre>
            </div>

            <strong className={placeStyle.limit}>Invalid or No Regsitered Key</strong>
            <div className="mt-3">
            <pre className={placeStyle.coding}>
                <code>
                    <div>
                    <span className={placeStyle.smsColor}>{props.brek}</span>
                    </div>
                    <div className="ml-4">
                    <div>
                    <span className={placeStyle.smsColor}>"message":</span>
                    <span className={placeStyle.textColor}> "Invalid or No Registered Key",</span>
                    </div>
                    <div>
                    <span className={placeStyle.smsColor}>"status": 401</span> 
                    </div> 
                    </div>
                    <div>
                    <span className={placeStyle.smsColor}>{props.endBrk}</span>
                    </div>
                    <button type="button" className={placeStyle.copyBtn}>Copy</button>  
                </code>
            </pre>
            </div>

            <strong className={placeStyle.limit}>Missing Parameter</strong>
            <div className="mt-3">
            <pre className={placeStyle.coding}>
                <code>
                    <div>
                    <span className={placeStyle.smsColor}>{props.brek}</span>
                    </div>
                    <div className="ml-4">
                    <div>
                    <span className={placeStyle.smsColor}>"message":</span>
                    <span className={placeStyle.textColor}> "Invalid or No Registered Key",</span>
                    </div>
                    <div>
                    <span className={placeStyle.smsColor}>"status": 401</span> 
                    </div> 
                    </div>
                    <div>
                    <span className={placeStyle.smsColor}>{props.endBrk}</span>
                    </div>
                    <button type="button" className={placeStyle.copyBtn}>Copy</button>  
                </code>
            </pre>
            </div>

            <strong className={placeStyle.limit}>Payment Exception</strong>
            <div className="mt-3">
            <pre className={placeStyle.coding}>
                <code>
                    <div>
                    <span className={placeStyle.smsColor}>{props.brek}</span>
                    </div>
                    <div className="ml-4">
                    <div>
                    <span className={placeStyle.smsColor}>"message":</span>
                    <span className={placeStyle.textColor}> "Invalid or No Registered Key",</span>
                    </div>
                    <div>
                    <span className={placeStyle.smsColor}>"status": 401</span> 
                    </div> 
                    </div>
                    <div>
                    <span className={placeStyle.smsColor}>{props.endBrk}</span>
                    </div>
                    <button type="button" className={placeStyle.copyBtn}>Copy</button>  
                </code>
            </pre>
            </div>
            <h2 className={`mt-3 mb-3 ${placeStyle.intro}`}>Rate Limit</h2>
            <p className="mt-3">60 Requests per minute</p>

            <h2 className={`mt-3 mb-3 ${placeStyle.intro}`}>API Usage Clarification</h2>
            <p className="mt-3">A single API request and a single API call are not always the same. A single API request to the server might call multiple APIs. An API might depend on other internal APIs to deliver the desired response. The number of call depends on the number of parameters of a request and the number of internal API calls needed to make to provide the desired response. For instance, A single request to Rupantor API results in two API calls since Rupantor API uses geocode API to operate.</p>
            <div className={`mb-4 ${placeStyle.bttn}`}>
                <Link to='/rev' className={placeStyle.next}>
                    <h5 className={placeStyle.onlyNext}>Next</h5>
                    <h4 className={`mb-0 ${placeStyle.rev}`}>Reverse Geocode</h4>
                </Link>
            </div>
        </div>
     );
}
 
export default PlaceApi;