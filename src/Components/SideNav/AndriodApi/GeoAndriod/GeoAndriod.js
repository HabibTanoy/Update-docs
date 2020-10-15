import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const GeoAndriod = () => {
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Geocoding</h1>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Geocoding Library Example</h2>
            <pre className={Style.coding}>
              <code>
                  <div className="mb-3">
                    <div className="txtColor">
                    <span>GeoCodeAPI.builder(getApplicationContext())</span><br/>
                    <div className="ml-5 pl-3">
                    <span>.idOrCode(idOrCode)</span><br/>
                    <span>.build()</span><br/>
                    <span>.generateList(new PlaceGeoCodeListener() {"{"}</span><br />
                    <div className="ml-4 ">
                    <span className="override">@Override</span><br />
                    <span className="function">public void </span>
                    <span className="url" style={{fontWeight:"bold"}}>onGeoCodePlace</span>
                    <span className="txtColor">(GeoCodePlace place) {"{"}</span>
                    <div className="ml-5">
                      <span className="txtColor">Toast.makeText(MainActivity.</span>
                      <span className="txt">this,</span>
                      <span className="url">""</span>
                      <span className="txtColor">+place.getAddress(), Toast.LENGTH_SHORT).show();</span> <br />
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
                      <span className="url">""</span>
                      <span className="txtColor">+ message, Toast.LENGTH_SHORT).show();</span> <br />
                    </div>
                    <span className="txtColor ml-4">{"}"}</span>
                    </div>
                    <span className="txtColor">{"}"});</span>
                  </div>  
                {/* <button type="button" className={GeoStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <h2 className={`mt-4 mb-3 ${Style.intro}`}>Autocomplete Library</h2>
            <pre className={`mb-5 ${Style.coding}`}>
            <code>
                  <div className="mb-3">
                    <div className="txtColor">
                    <span>SearchAutoCompleteAPI.builder(getApplicationContext())</span><br/>
                    <div className="ml-5 pl-3">
                    <span>.nameOrCode(nameOrCode)</span><br/>
                    <span>.build()</span><br/>
                    <span>.generateList(new SearchAutoCompleteListener() {"{"}</span><br />
                    <div className="ml-4 ">
                    <span className="override">@Override</span><br />
                    <span className="function">public void </span>
                    <span className="url" style={{fontWeight:"bold"}}>onPlaceListReceived</span>
                    <span className="txtColor">(ArrayList{"<"}SearchAutoCompletePlace{">"} places) {"{"}</span>
                    <div className="ml-5">
                      <span className="txtColor">Toast.makeText(MainActivity.</span>
                      <span className="txt">this,</span>
                      <span className="url">"Selected Place"</span>
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
                      <span className="txtColor">message, Toast.LENGTH_SHORT).show();</span> <br />
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
              <Link to='/android-search'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Search</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/android-rev-geocoding'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Reverse Geocoding
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default GeoAndriod;