import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const NearbyJs = () => {
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Nearby</h1>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Bkoi.nearby(long, lat, callback)</h2>
            <p className={Style.text}>This method performs location search using Barikoi Nearby API. It accepts three arguments a longitude, a latitude and a callback function and returns an array of nearby locations</p>

            <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example</h2>
            <pre className={`mb-5 ${Style.coding}`}>
              <code>
              <div>
                  <span className="override">//  Get Nearby Locations</span><br />
                  <div className="mt-3">
                  <span className="txtColor">Bkoi.nearby(90.36668110638857, 23.83723803415923, response ={">"} console.log(JSON.parse(response)))</span>
                  </div>
                </div>
                  {/* <button type="button" className={NearbyStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/rev-geo-js'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Reverse Geocoding</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/autocomplete-js'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Autocomplete Tutorial
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default NearbyJs;