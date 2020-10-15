import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const AndriodProject = () => {
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Create an Android Studio project</h1>
            
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Create an Android Studio project</h2>
            <p className={Style.text}>Familiarize yourself with Android Studio. You'll need to create a new project with an empty activity. Use the following options when creating a new Android Studio project:</p>
            <div className={`mb-5 ${Style.text}`}>
                <ul>
                    <li className="mb-3" style={{listStyleType: "disc"}}>Under Select the form factors your app will run on, check "Phone and Tablet.</li>
                    <li className="mb-3" style={{listStyleType: "disc"}}>For minimum SDK, select API 16: Android 4.1 (JellyBean). (This is the lowest API level currently supported by Barikoi Location Library for Android.)</li>
                    <li className="mb-3" style={{listStyleType: "disc"}}>Click Next to advance to the activity selection screen.</li>
                    <li className="mb-3" style={{listStyleType: "disc"}}>Select Empty Activity and click Next.</li>
                    <li className="mb-3" style={{listStyleType: "disc"}}>Accept the default Activity Name and Layout Name and click Finish.</li>   
                </ul>
            </div>

            <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/android-intro'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Getting started</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/android-location'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Barikoi Location Library
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default AndriodProject;