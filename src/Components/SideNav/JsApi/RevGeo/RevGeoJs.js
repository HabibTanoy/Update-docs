import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const RevGeoJs = () => {
  document.title = "Reverse Geocoding . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Reverse Geocoding</h1>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Bkoi.reverseGeo(long, lat, callback)</h2>
            <p className={Style.text}>This method performs location search using Barikoi Reverse Geocode API. It accepts three arguments a longitude, a latitude and a callback function and returns a Place object containing place information</p>

            <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example</h2>
            <pre className={`mb-5 ${Style.coding}`}>
            <CopyBlock
              text={
                `//  Get Reverse Geo Address
    Bkoi.reverseGeo(90.36668110638857, 23.83723803415923, response => console.log(JSON.parse(response)))`
              }
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/geocoding-js'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Geocoding</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/nearby-js'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Nearby
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default RevGeoJs;