import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const TokenAndriod = () => {
  document.title = "Get an access token . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Get an access token</h1>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Get an access token</h2>
            <p className={Style.text}>If you don't have a Barikoi account, <a style={{color:"#2ddbac", textDecoration:"none"}} href="https://barikoi.com/signup">Sign up</a> for one here and then navigate to your Account page. Copy your default public token to your clipboard. After you've added the Barikoi Library as a dependency inside of your Android project, Paste the below code into your application class.</p>
            <pre className={Style.coding}>
            <CopyBlock
              text={
        `BarikoiAPI.getINSTANCE(getApplicationContext(), "access_token");`
              }
              language={"java"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
          </pre>
          <h2 className={`mt-4 mb-3 ${Style.intro}`}>If you don't have an application class seperately</h2>
          <p className={`mb-5 ${Style.text}`}>If you don't want to have a separate application class for your Project, then paste the same code in every activity class, in which you are using the api's.</p>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/android-location'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Barikoi Location Library</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/android-search'>
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
 
export default TokenAndriod;