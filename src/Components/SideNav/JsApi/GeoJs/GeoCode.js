import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const GeoJs = () => {
  document.title = "Geocoding . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Geocoding</h1>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Bkoi.geocode(place_id, callback)</h2>
            <p className={Style.text}>This method performs location search using Barikoi Geocode API. It accepts a and a callback function and returns an array containing place information. Place_id can be found in Bkoi.search('example', callback) function's response</p>

            <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example</h2>
            <pre className={`mb-5 ${Style.coding}`}>
              <code>
              <div>
                  <span className="override">//  Get Geo Address</span><br />
                  <div className="mt-3">
                  <span className="txtColor">Bkoi.geocode(147, response ={">"} console.log(JSON.parse(response)))</span>
                  </div>
                </div>
                  {/* <button type="button" className={RevJsStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/search-js'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Search</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/rev-geo-js'>
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
 
export default GeoJs;