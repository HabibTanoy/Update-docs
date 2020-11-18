import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const NearbyAndriod = () => {
  document.title = "Nearby . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Nearby</h1>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Nearby Library</h2>
            <p className={Style.text}>Nearby Request Example Without Place Type</p>

            <pre className={Style.coding}>
            <CopyBlock
              text={
        `
        NearbyPlaceAPI.builder(getApplicationContext())
                    .setDistance(.5)
                    .setLimit(10)
                    .setLatLng(latitude,longitude)
                    .build()
                    .generateNearbyPlaceList(new NearbyPlaceListener() {
                        @Override
                        public void onPlaceListReceived(ArrayList<NearbyPlace> places) {
                            Toast.makeText(MainActivity.this, "Nearby Place First Address: "+places.get(0).getAddress(),                       Toast.LENGTH_SHORT).show();
    
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

          <p className={Style.text}>Nearby Request Example with Specific Place Type</p>
          <pre className={Style.coding}>
          <CopyBlock
              text={
        `
        NearbyPlaceAPI.builder(getApplicationContext())
                      .setDistance(.5)
                      .setLimit(10)
                      .setLatLng(latitude,longitude)
                      .setType("Bank")
                      .build()
                      .generateNearbyPlaceListByType(new NearbyPlaceListener() {
                          @Override
                          public void onPlaceListReceived(ArrayList<NearbyPlace> places) {
                              Toast.makeText(MainActivity.this, "Nearby Place First Address: "+places.get(0).getAddress()+" "+places.get(0).getCode(), Toast.LENGTH_SHORT).show();                        
                          }
                          @Override
                          public void onFailure(String message) {
                              Toast.makeText(MainActivity.this, "Error: "+message, Toast.LENGTH_SHORT).show();
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