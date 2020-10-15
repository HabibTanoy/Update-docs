import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const SearchAndriod = () => {
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Search</h1>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Search Autocomplete Fragment</h2>
            <p className={Style.text}>To use the Barikoi Search Autocomplete Activity first add the below code snippet in your activity xml file.</p>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>activity_main.xml</h2>
            <pre className={Style.coding}>
              <code>
                  <div className="mb-3">
                    <span className="txtColor">{"<"}fragment</span> <br/>
                    <div className="ml-5">
                    <div>
                      <span className="txtColor">android:</span>
                      <span className="url">id="@+id/barikoiSearchAutocompleteFragment"</span>
                      </div>
                      <div>
                      <span className="txtColor">android:</span>
                      <span className="url">layout_width="match_parent"</span>
                      </div>
                      <div>
                      <span className="txtColor">android:</span>
                      <span className="url">layout_height="wrap_content"</span>
                      </div>
                      <div>
                      <span className="txtColor">android:</span>
                      <span className="url">name="barikoi.barikoilocation.SearchAutoComplete.SearchAutocompleteFragment"</span>
                      <span className="txtColor">/{">"}</span>
                      </div>
                    </div>
                  </div>
                  {/* <button type="button" className={LocationStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <h2 className={`mt-4 mb-3 ${Style.intro}`}>Then in you activity add the below code:</h2>
          <pre className={`mb-5 ${Style.coding}`}>
              <code>
                  <div className="mb-3">
                    <div className="txtColor mb-3">
                    <span>SearchAutocompleteFragment searchAutocompleteFragment;</span><br/>
                    <span>searchAutocompleteFragment=(SearchAutocompleteFragment)getSupportFragmentManager().findFragmentById(R.id.barikoiSearchAutocompleteFragment);</span><br/>
                    <span>searchAutocompleteFragment.setPlaceSelectionListener(new SearchAutocompleteFragment.PlaceSelectionListener() {"{"}</span><br/>
                    </div>
                    
                    <div className="mb-4">
                    <div className="ml-5">
                    <span className="override">@Override</span> <br />
                      <span className="function">public void </span> 
                      <span className="url" style={{fontWeight:"bold"}}>onPlaceSelected</span>
                      <span className="txtColor">(GeoCodePlace place) {"{"}</span>
                    </div>
                    <div className="ml-5 pl-4">
                      <span className="txtColor">Toast.makeText(MainActivity.</span>
                      <span className="txt">this,</span>
                      <span className="url">"Place Selected: "</span>
                      <span className="txtColor">+place.getAddress(), Toast.LENGTH_SHORT).show();</span> <br />
                    </div>
                    <span className="txtColor ml-5">{"}"}</span>
                    </div>

                    <div>
                    <div className="ml-5">
                    <span className="override">@Override</span> <br />
                      <span className="function">public void </span> 
                      <span className="url" style={{fontWeight:"bold"}}>onFailure</span>
                      <span className="txtColor">(String error) {"{"}</span>
                    </div>
                    <div className="ml-5 pl-4">
                      <span className="txtColor">Toast.makeText(MainActivity.</span>
                      <span className="txt">this,</span>
                      <span className="url">"Error Message"</span>
                      <span className="txtColor">+place.getAddress(), Toast.LENGTH_SHORT).show();</span> <br />
                    </div>
                    <span className="txtColor ml-5">{"}"}</span>
                    </div>
                    <span className="txtColor">{"}"});</span>
                  </div>
                  {/* <button type="button" className={LocationStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/android-token'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Get an access token</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/android-geocoding'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Geocoding
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default SearchAndriod;