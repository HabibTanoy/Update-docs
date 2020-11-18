import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const RevAndriod = () => {
  document.title = "Reverse Geocoding . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Reverse Geocoding</h1>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Reverse Geocoding Library</h2>
            <pre className={`mb-5 ${Style.coding}`}>
            <CopyBlock
              text={
        `
        ReverseGeoAPI.builder(getApplicationContext())
                        .setLatLng(latitude,longitude)
                        .build()
                        .getAddress(new ReverseGeoAPIListener() {
                            @Override
                            public void reversedAddress(ReverseGeoPlace place) {
                                Toast.makeText(MainActivity.this, ""+place.getAddress(), Toast.LENGTH_SHORT).show();

                            }

                            @Override
                            public void onFailure(String message) {
                                Toast.makeText(MainActivity.this, "Error Message"+message, Toast.LENGTH_SHORT).show();
                            }
                        });`
              }
              language={"java"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/android-geocoding'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Geocoding</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/android-nearby'>
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
 
export default RevAndriod;
