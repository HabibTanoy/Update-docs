import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const JsStart = () => {
  document.title = "Getting Started . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Getting Started</h1>

            <p style={{fontSize:"25px"}} className="mt-5 mb-3">
              Get started with barikoi.js
          </p>
          <h2 className={`mt-4 mb-3 ${Style.intro}`}>Overview</h2>
          <p className={Style.text}>A small JavaScript library that provides easy interface to use Barikoi API's</p>
          <h2 className={`mt-4 mb-3 ${Style.intro}`}>Authentication</h2>
          <p className={Style.text}>API Key is needed to use the API's. <a style={{color:"#2ddbac", textDecoration:"none"}} href="https://barikoi.com/signup">Sign up</a> in Barikoi Developers Account and get an Account API KEY. Include Barikoi.js in the end of the body tag of your page with your API key:</p>
          <pre className={`mb-5 ${Style.coding}`}>
          <CopyBlock
              text={
                `<script src="https://cdn.jsdelivr.net/gh/barikoi/barikoi-js@b6f6295467c19177a7d8b73ad4db136905e7cad6/dist/barikoi.min.js?key:YOUR_API_KEY"></script>`
              }
              language={"javascript"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          <Row>
            <Col sm={6}> 
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/search-js'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Search
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default JsStart;