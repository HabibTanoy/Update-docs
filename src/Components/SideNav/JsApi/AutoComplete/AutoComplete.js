import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const AutoCompleteJs = () => {
  document.title = "Autocomplete Tutorial . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Autocomplete Tutorial</h1>
            <p className={Style.text}>Autocomplete demo using OpenStreetMap.</p>
            <h2 className={`mt-3 mb-3 ${Style.intro}`}>Source code:</h2>

            <pre className={Style.coding}>
            <CopyBlock
              text={`
<!DOCTYPE html>
<html lang="en">
​
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Barikoi Autocomplete</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/barikoi/barikoi-js@b6f6295467c19177a7d8b73ad4db136905e7cad6/dist/barikoi.min.css">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
​
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.4.0/dist/leaflet.css" integrity="sha512-puBpdR0798OZvTTbP4A8Ix/l+A4dHDD0DGqYW6RQ+9jxkRFclaxxQb/SJAWZfWAkuyeQUytO7+7N4QKrDh+drA=="
    crossorigin="" />
​
  <script src="https://unpkg.com/leaflet@1.4.0/dist/leaflet.js" integrity="sha512-QVftwZFqvtRNi0ZyCtsznlKSWOStnDORoefr1enyq5mVL4tmKB3S/EnC3rRJcxCPavG10IcrVGSmPh6Qw5lwrg=="
    crossorigin=""></script>
​
  <style>
    body {
      
      font-family: 'Open Sans', sans-serif;      

    }
​
    h1 {
      text-align: center;
    }
  </style>
​
</head>
​
<body>
  <h1>Barikoi Autocomplete Demo</h1>
​
  <div>
    <input type="text" class=" bksearch">
    <div class="bklist">
    </div>
  </div>
​
  <div id="map" style="height: 400px;"></div>
​
​
  <script src="https://cdn.jsdelivr.net/gh/barikoi/barikoi-js@b6f6295467c19177a7d8b73ad4db136905e7cad6/dist/barikoi.min.js?key:MTM0MjpTTzVSU0hCOFFO"></script>
​
​
  <script>
    const defaultMarker = [23.7104, 90.40744]
    let map = L.map('map')
    map.setView(defaultMarker, 13)
    // Set up the OSM layer
    L.tileLayer(
    'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18
    }).addTo(map)
    L.marker(defaultMarker).addTo(map)
    Bkoi.onSelect(function () {
      // get selected data from dropdown list
      let selectedPlace = Bkoi.getSelectedData()      
      // center of the map
      let center = [selectedPlace.latitude, selectedPlace.longitude]
      // Add marker to the map & bind popup
      map.setView(center, 19)
      L.marker(center).addTo(map).bindPopup(selectedPlace.address)
    })
  </script>
</body>
​
</html>
`}
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
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