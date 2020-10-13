import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons"

const NearbyAndriod = () => {
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Nearby</h1>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Nearby Library</h2>
            <p className={Style.text}>Nearby Request Example Without Place Type</p>

            <pre className={Style.coding}>
            <code>
                  <div className="mb-3">
                    <div className="txtColor">
                    <span>NearbyPlaceAPI.builder(getApplicationContext())</span><br/>
                    <div className="ml-5 pl-3">
                    <span>.setDistance(.5)</span><br/>
                    <span>.setLimit(10)</span><br/>
                    <span>.setLatLng(latitude,longitude)</span><br/>
                    <span>.build()</span><br/>
                    <span>.generateNearbyPlaceList(new NearbyPlaceListener() {"{"}</span><br />
                    <div className="ml-4 ">
                    <span className="override">@Override</span><br />
                    <span className="function">public void </span>
                    <span className="url" style={{fontWeight:"bold"}}>onPlaceListReceived</span>
                    <span className="txtColor">(ArrayList{"<"}NearbyPlace{">"} places) {"{"}</span>
                    <div className="ml-5">
                      <span className="txtColor">Toast.makeText(MainActivity.</span>
                      <span className="txt">this,</span>
                      <span className="url">"Nearby Place First Address: "</span>
                      <span className="txtColor">+places.get(0).getAddress(), Toast.LENGTH_SHORT).show();</span> <br />
                    </div>
                    <span className="txtColor">{"}"}</span>
                    </div>
                    </div>
                    </div>

                    <div className="ml-5 pl-2 mt-3">
                    <div className="ml-4">
                    <span className="override">@Override</span> <br />
                      <span className="function">public void </span> 
                      <span className="url" style={{fontWeight:"bold"}}>onFailure</span>
                      <span className="txtColor">(String message) {"{"}</span>
                    </div>
                    <div className="ml-5 pl-4">
                      <span className="txtColor">Toast.makeText(MainActivity.</span>
                      <span className="txt">this,</span>
                      <span className="url">"Error Message"</span>
                      <span className="txtColor">+message, Toast.LENGTH_SHORT).show();</span> <br />
                    </div>
                    <span className="txtColor ml-4">{"}"}</span>
                    </div>
                    <span className="txtColor">{"}"});</span>
                  </div>  
                {/* <button type="button" className={GeoStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <p className={Style.text}>Nearby Request Example with Specific Place Type</p>
          <pre className={Style.coding}>
          <code>
                  <div className="mb-3">
                    <div className="txtColor">
                    <span>NearbyPlaceAPI.builder(getApplicationContext())</span><br/>
                    <div className="ml-5 pl-3">
                    <span>.setDistance(.5)</span><br/>
                    <span>.setLimit(10)</span><br/>
                    <span>.setLatLng(latitude,longitude)</span><br/>
                    <span>.build()</span><br/>
                    <span>.generateNearbyPlaceListByType (new NearbyPlaceListener() {"{"}</span><br />
                    <div className="ml-4 ">
                    <span className="override">@Override</span><br />
                    <span className="function">public void </span>
                    <span className="url" style={{fontWeight:"bold"}}>onPlaceListReceived</span>
                    <span className="txtColor">(ArrayList{"<"}NearbyPlace{">"} places) {"{"}</span>
                    <div className="ml-5">
                      <span className="txtColor">Toast.makeText(MainActivity.</span>
                      <span className="txt">this,</span>
                      <span className="url">"Nearby Place First Address: "</span>
                      <span className="txtColor">+places.get(0).getAddress()+" "+places.get(0).getCode(), Toast.LENGTH_SHORT).show();</span> <br />
                    </div>
                    <span className="txtColor">{"}"}</span>
                    </div>
                    </div>
                    </div>

                    <div className="ml-5 pl-2 mt-3">
                    <div className="ml-4">
                    <span className="override">@Override</span> <br />
                      <span className="function">public void </span> 
                      <span className="url" style={{fontWeight:"bold"}}>onFailure</span>
                      <span className="txtColor">(String message) {"{"}</span>
                    </div>
                    <div className="ml-5 pl-4">
                      <span className="txtColor">Toast.makeText(MainActivity.</span>
                      <span className="txt">this,</span>
                      <span className="url">"Error: "</span>
                      <span className="txtColor">+message, Toast.LENGTH_SHORT).show();</span> <br />
                    </div>
                    <span className="txtColor ml-4">{"}"}</span>
                    </div>
                    <span className="txtColor">{"}"});</span>
                  </div>  
                {/* <button type="button" className={GeoStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/android-rev-geocoding'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Reverse Geocoding</h4>
              </Link>
          </div>
            </Col>
            {/* <Col sm={6}>
            <div className={`mb-4 ${RevStyle.previous}`}>
              <Link to='/android-nearby' className={RevStyle.next}>
                  <h5 className={RevStyle.onlyNext}>Next</h5>
                  <h4 className={`mb-0 ${RevStyle.rev}`}>Nearby
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col> */}
          </Row>
        </div>
     );
}
 
export default NearbyAndriod;