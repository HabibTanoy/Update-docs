import React from 'react';
import Style from '../Style.module.css'
import { Table, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import ReactJson from 'react-json-view'

const WardZoneApi = () => {
  document.title = "Ward & Zone by Geolocation . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Ward {"&"} Zone by Geolocation</h1>
            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              <code className={Style.get}>GET</code>
              Ward and Zone by Geolocation
            </p>
            <pre className={Style.coding}>
              <code>
                  <div className="txtColor">
                      <span>https://barikoi.xyz/v1/api/search/ward/zone/API_KEY/LONGITUDE/LATITUDE</span>
                  </div>
                  {/* <button type="button" className={Style.copyBtn}>Copy</button> */}
              </code>
          </pre>
          <p className={Style.text}>Returns the ward and zone of given longitude and latitude.</p>

          <h2 className={`mt-4 mb-3 ${Style.intro}`}>API PARAMS</h2>

          <div className="w-50">
            <Table striped bordered className="text-center">
            <thead>
                <tr>
                  <th scope="col">Parameter</th>
                  <th scope="col">Value</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>longitude</td>
                  <td>90.418619474572</td>
                  <td>Required</td>
                </tr>
                <tr>
                  <td>latitude</td>
                  <td>23.83136348674859</td>
                  <td>Required</td>
                </tr>
              </tbody>
            </Table>
          </div>

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Ward and Zone by Geolocation API Request Example</h2>
          <div className="mt-3">
          <pre className={Style.coding}>
          <code>
              <div>
                  <span className="mr-3">
                    <span className="txtColor">fetch(</span>
                    <span className="url">'https://barikoi.xyz/v1/api/search/ward/zone/API_KEY/90.4186194745721/23.83136348674859'</span>
                    <span className="txtColor">)</span>
                    </span> <br />
                    <div className="ml-3">
                    <span className="txtColor">.then(response ={'>'} response.json())</span><br />
                    <span className="txtColor">.catch(error ={'>'} console.error(<span className="url">'Error:'</span>, error))</span><br />
                    <span className="txtColor">.then(response ={'>'} console.log(<span className="url">'Success:'</span>, response))</span>
                  </div>
              </div>
                  {/* <button type="button" className={CityStyle.copyBtn}>Copy</button>   */}
              </code>
          </pre>
          </div> 

          <h2 className={`mt-3 mb-3 ${Style.intro}`}>Example Response</h2>
          <div className="mt-3 mb-5">
          <pre className={Style.coding}>
          <ReactJson 
            theme="ocean"
            enableClipboard={false}
              displayDataTypes={false}
              displayObjectSize={false}
              indentWidth="8"
              src={
                {
                "ward": 17,
                "ward area": "{\"type\": \"Polygon\", \"coordinates\": [[[90.41812419891357, 23.838427318755006], [90.41370391845703, 23.83544396636293], [90.4132318496704, 23.83332417427316], [90.41314601898193, 23.82716087826459], [90.4143476486206, 23.82590462914204], [90.41477680206299, 23.82429504217794], [90.41464805603027, 23.823470611854116], [90.41769504547119, 23.820094318738672], [90.41554927825928, 23.81644311221666], [90.41542053222656, 23.813773347821215], [90.41559219360352, 23.811378365396166], [90.4171371459961, 23.810789428524004], [90.41898250579834, 23.811692463969017], [90.4200553894043, 23.81196729959694], [90.42031288146973, 23.81020048898051], [90.42142868041991, 23.81012196350621], [90.42147159576416, 23.808080284506023], [90.42434692382812, 23.80772691372795], [90.42640686035156, 23.807569859740138], [90.42984008789062, 23.811731726237202], [90.43765068054199, 23.81518675934073], [90.45292854309082, 23.815736415220133], [90.45335769653319, 23.830890296186432], [90.43224334716797, 23.826650528525562], [90.42902469635008, 23.82633646614989], [90.42155742645264, 23.82480540118201], [90.42035579681396, 23.824766142868352], [90.41928291320801, 23.831165091160646], [90.41812419891357, 23.838427318755006]]]}",
                "zone": 1
            }
            } />
          </pre>
          <p className={`font-weight-bold ${Style.text}`}>For each request of Ward {"&"} Zone by Geolocation API with all parameter 1 API call is counted.</p>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/zone-by-location'>
                  <h5 >Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Zone by Geolocation</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/city-corp-by-location'>
                  <h5>Next</h5>
                  <h4 className="mb-0"> Ward {"&"} City Corporation by Geolocation
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default WardZoneApi;