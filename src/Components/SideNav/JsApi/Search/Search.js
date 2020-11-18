import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const SearchJs = () => {
  document.title = "Search . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Search</h1>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Bkoi.search(string, callback)</h2>
            <p className={Style.text}>This method performs location search using Barikoi Search API. It accepts two arguments a query string and a callback function and returns an array of locations</p>
            <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example</h2>
            <pre className={Style.coding}>
            <CopyBlock
              text={
                `//  Search for 'cafe'
    Bkoi.search('cafe', response => console.log(response)) `
              }
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          <p className={`mb-5 ${Style.text}`}>Barikoi.js provides Autocomplete UI for search. Tutorial on Autocomplete UI can be found 
          <a style={{color:"#2ddbac"}} href="https://medium.com/@barikoibd/how-to-add-location-search-autocomplete-functionality-to-your-website-in-2-minutes-using-barikoi-js-f99b351ba997"> here</a></p>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/library-intro'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Getting Started</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/geocoding-js'>
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
 
export default SearchJs;