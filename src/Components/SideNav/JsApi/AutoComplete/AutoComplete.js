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
                      <div className="txtColor ml-3">
                      <span>{"<"}</span>
                      <span className="url">h1</span>
                      <span>{">"}</span>
                      <span>Barikoi Autocomplete Demo</span>
                      <span>{"<"}</span>
                      <span className="url">h1</span>
                      <span>{">"}</span>
                      </div>
                      <div className="txtColor ml-3 mt-3">
                      <span>{"<"}</span>
                      <span className="url">div</span>
                      <span>{">"}</span>
                      </div>
                      <div className="txtColor ml-5">
                      <span>{"<"}</span>
                      <span className="url">input </span>
                      <span>type=</span>
                      <span className="url">"text" </span>
                      <span>class=</span>
                      <span className="url">"bksearch"</span>
                      <span>{">"}</span>
                      </div>
                      <div className="txtColor ml-5">
                      <span>{"<"}</span>
                      <span className="url">div </span>
                      <span>type=</span>
                      <span className="url">"bklist"</span>
                      <span>{">"}</span><br />
                      <span>{"</"}</span>
                      <span className="url">div</span>
                      <span>{">"}</span>
                      </div>
                    </div>
                    <div className="txtColor ml-3">
                      <span>{"</"}</span>
                      <span className="url">div</span>
                      <span>{">"}</span>
                      </div>
                      <div className="txtColor mt-3">
                      <span>{"<"}</span>
                      <span className="url">div </span>
                      <span>id=</span>
                      <span className="url">"map"</span>
                      <span> style=</span>
                      <span className="url">"height: 400px;"</span>
                      <span>{">"}</span>
                      <span>{"</"}</span>
                      <span className="url">div</span>
                      <span>{">"}</span>
                      </div>
                      <div className="txtColor my-5">
                      <span>{"<"}</span>
                      <span className="url">script </span>
                      <span>src=</span>
                      <span className="url">"https://cdn.jsdelivr.net/gh/barikoi/barikoi-js@b6f6295467c19177a7d8b73ad4db136905e7cad6/dist/barikoi.min.js?key:MTM0MjpTTzVSU0hCOFFO"</span>
                      <span>{">"}</span>
                      <span>{"</"}</span>
                      <span className="url">script</span>
                      <span>{">"}</span>
                      </div>
                      <div className="txtColor">
                      <span>{"<"}</span>
                      <span className="url">script</span>
                      <span>{">"}</span>
                      </div>
                      <div className="txtColor">
                        <span className="txt">const </span>
                        <span>defaultMarker = [23.7104, 90.40744]</span>
                      </div>
                      <div className="txtColor">
                        <span className="txt">let </span>
                        <span>map = L.map(</span>
                        <span className="url">'map'</span>
                        <span>)</span><br />
                        <span>map.setView(defaultMarker, 13)</span>
                      </div>
                      <span className="override">// Set up the OSM layer</span><br />
                      <span className="txtColor">L.tileLayer(</span><br />
                      <span className="url">'http://{"{"}s{"}"}.tile.openstreetmap.org/{"{"}z{"}"}/{"{"}x{"}"}/{"{"}y{"}"}.png'</span>
                      <span className="txtColor">, {"{"}</span>
                      <div className="txtColor">
                        <span className="ml-3">maxZoom: 18</span><br />
                        <span>{"}"}).addTo(map)</span><br />
                        <span>L.marker(defaultMarker).addTo(map)</span>
                        <div>Bkoi.onSelect(<span className="function">function</span> () {"{"}</div>
                        <div className="ml-3">
                        <span className="override">// get selected data from dropdown list</span>
                        <div className="txtColor">
                        <span className="txt">let </span>
                        <span>selectedPlace = Bkoi.getSelectedData()</span>
                      </div>
                        <span className="override">// center of the map</span>
                        <div className="txtColor">
                        <span className="txt">let </span>
                        <span>center = [selectedPlace.latitude, selectedPlace.longitude]</span>
                      </div>
                        <span className="override">// Add marker to the map {"&"} bind popup</span>
                        <div>
                          <span>map.setView(center, 19)</span><br />
                          <span>L.marker(center).addTo(map).bindPopup(selectedPlace.address)</span>
                        </div>
                        </div>  
                        <span>{"}"})</span>
                      </div>
                      <div className="txtColor ml-2">
                      <span>{"</"}</span>
                      <span className="url">script</span>
                      <span>{">"}</span>
                      </div>
                      <div className="txtColor">
                      <span>{"</"}</span>
                      <span className="url">body</span>
                      <span>{">"}</span>
                      </div>
                  </div>
                  <div className="txtColor">
                      <span>{"</"}</span>
                      <span className="url">html</span>
                      <span>{">"}</span>
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