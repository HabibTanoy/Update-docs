import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula, xml } from 'react-code-blocks';

const SearchAndriod = () => {
  document.title = "Search . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Search</h1>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Search Autocomplete Fragment</h2>
            <p className={Style.text}>To use the Barikoi Search Autocomplete Activity first add the below code snippet in your activity xml file.</p>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>activity_main.xml</h2>
            <pre className={Style.coding}>
            <CopyBlock
              text={
        `<fragment 
        android:id="@+id/barikoiSearchAutocompleteFragment"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:name="barikoi.barikoilocation.SearchAutoComplete.SearchAutocompleteFragment"/>`
              }
              language={"java"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          <h2 className={`mt-4 mb-3 ${Style.intro}`}>Then in you activity add the below code:</h2>
          <pre className={`mb-5 ${Style.coding}`}>
          <CopyBlock
              text={
        `
        SearchAutocompleteFragment searchAutocompleteFragment;
        searchAutocompleteFragment=(SearchAutocompleteFragment)getSupportFragmentManager().findFragmentById(R.id.barikoiSearchAutocompleteFragment);
        searchAutocompleteFragment.setPlaceSelectionListener(new SearchAutocompleteFragment.PlaceSelectionListener() {
        
            @Override
            public void onPlaceSelected(GeoCodePlace place) {
                Toast.makeText(MainActivity.this, "Place Selected: "+place.getAddress(), Toast.LENGTH_SHORT).show();
            }
        
            @Override
             public void onFailure(String error) {
                Toast.makeText(MainActivity.this, "Error Message"+error, Toast.LENGTH_SHORT).show();
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