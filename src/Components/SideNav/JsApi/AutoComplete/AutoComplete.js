import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons"

const AutoCompleteJs = () => {
  document.title = "Autocomplete Tutoria . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Autocomplete Tutorial</h1>
            <p className={Style.text}>Autocomplete demo using OpenStreetMap.</p>
            <h2 className={`mt-3 mb-3 ${Style.intro}`}>Source code:</h2>

            <pre className={Style.coding}>
              <code>
                  <div>
                    <span className="override">{"<"}!DOCTYPE html{">"}</span>
                    <div>
                      <span className="txtColor">{"<"}</span>
                      <span className="url">html </span>
                      <span className="txtColor">lang=</span>
                      <span className="url">"en"</span>
                      <span className="txtColor">{">"}</span>
                    </div>
                    <div className="mt-3">
                    <span className="txtColor">{"<"}</span>
                      <span className="url">head</span>
                      <span className="txtColor">{">"}</span>
                    </div>
                    <div className="ml-3">
                    <span className="txtColor">{"<"}</span>
                      <span className="url">meta</span>
                      <span className="txtColor">charset=</span>
                      <span className="url">"UTF-8"</span>
                      <span className="txtColor">{">"}</span>
                      <div>
                      <span className="txtColor">{"<"}</span>
                      <span className="url">meta</span>
                      <span className="txtColor">name=</span>
                      <span className="url">"viewport" </span>
                      <span className="txtColor">content=</span>
                      <span className="url">"width=device-width, initial-scale=1.0"</span>
                      <span className="txtColor">{">"}</span>
                      </div>
                      <div>
                      <span className="txtColor">{"<"}</span>
                      <span className="url">meta</span>
                      <span className="txtColor">http-equiv=</span>
                      <span className="url">"X-UA-Compatible" </span>
                      <span className="txtColor">content=</span>
                      <span className="url">"ie=edge"</span>
                      <span className="txtColor">{">"}</span>
                      </div>
                      <div>
                      <span className="txtColor">{"<"}</span>
                      <span className="url">title</span>
                      <span className="txtColor">{">"}Barikoi Autocomplete{"<"}/</span>
                      <span className="url">title</span>
                      <span className="txtColor">{">"}</span>
                      </div>
                      <div>
                      <span className="txtColor">{"<"}</span>
                      <span className="url">link </span>
                      <span className="txtColor">rel=</span>
                      <span className="url">"stylesheet" </span>
                      <span className="txtColor">href=</span>
                      <span className="url">"https://cdn.jsdelivr.net/gh/barikoi/barikoi-js@b6f6295467c19177a7d8b73ad4db136905e7cad6/dist/barikoi.min.css"</span>
                      <span className="txtColor">{">"}</span>
                      </div>
                      <div className="mb-3">
                      <span className="txtColor">{"<"}</span>
                      <span className="url">link </span>
                      <span className="txtColor">href=</span>
                      <span className="url">"https://fonts.googleapis.com/css?family=Open+Sans" </span>
                      <span className="txtColor">rel=</span>
                      <span className="url">"stylesheet"</span>
                      <span className="txtColor">{">"}</span>
                      </div>
                      <div>
                      <span className="txtColor">{"<"}</span>
                      <span className="url">link </span>
                      <span className="txtColor">rel=</span>
                      <span className="url">"stylesheet" </span>
                      <span className="txtColor">href=</span>
                      <span className="url">"https://unpkg.com/leaflet@1.4.0/dist/leaflet.css" </span>
                      <span className="txtColor">integrity=</span>
                      <span className="url">"sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="</span>
                      <span className="txtColor">crossorigin=</span>
                      <span className="url">"" </span>
                      <span className="txtColor">{"/>"}</span>
                      </div>
                      <div className="mb-3">
                      <span className="txtColor">{"<"}</span>
                      <span className="url">script </span>
                      <span className="txtColor">src=</span>
                      <span className="url">"https://unpkg.com/leaflet@1.4.0/dist/leaflet.js" </span>
                      <span className="txtColor">integrity=</span>
                      <span className="url">"sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg==" </span>
                      <span className="txtColor">integrity=</span>
                      <span className="url">"sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="</span>
                      <span className="txtColor">crossorigin=</span>
                      <span className="url">"" </span>
                      <span className="txtColor">{">"}</span>
                      <span className="txtColor">{"</"}</span>
                      <span className="url">script</span>
                      <span className="txtColor">{">"}</span>
                      </div>
                      <div>
                      <span className="txtColor">{"<"}</span>
                      <span className="url">style</span>
                      <span className="txtColor">{">"}</span>
                      </div>
                      <div className="ml-3">
                      <span className="txt">body </span>
                      <span className="txtColor">{"{"}</span>
                      <div>
                      <span className="url">font-family: 'Open Sans'</span>
                      <span className="txtColor">, sans-serif;</span>
                      </div>
                      </div>
                      <span className="txtColor">{"}"}</span>
                      <div className="ml-3">
                      <span className="txt">h1 </span>
                      <span className="txtColor">{"{"}</span>
                      <div>
                      <span className="url">text-align: </span>
                      <span className="txtColor">center;</span>
                      </div>
                      </div>
                      <span className="txtColor">{"}"}</span>
                      <div>
                      <span className="txtColor">{"</"}</span>
                      <span className="url">style</span>
                      <span className="txtColor">{">"}</span>
                      </div>
                    </div>
                    <div className="mt-3">
                    <span className="txtColor">{"</"}</span>
                      <span className="url">head</span>
                      <span className="txtColor">{">"}</span>
                    </div>
                    <div className="mt-3">
                    <span className="txtColor">{"<"}</span>
                      <span className="url">body</span>
                      <span className="txtColor">{">"}</span>
                    </div>
                  </div>
                  {/* <button type="button" className={AutoStyle.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <div className="mb-5">
          <a style={{color:"#2ddbac", textDecoration:"none"}} href="https://medium.com/@barikoibd/how-to-add-location-search-autocomplete-functionality-to-your-website-in-2-minutes-using-barikoi-js-f99b351ba997">Get the full tutorial link</a>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/nearby-js'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Nearby</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            </Col>
          </Row>
        </div>
     );
}
 
export default AutoCompleteJs;