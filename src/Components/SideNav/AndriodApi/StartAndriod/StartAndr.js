import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"

const AndriodStart = () => {
    document.title = "Getting Started . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Getting Started</h1>
            <h2 className={`mt-5 mb-3 ${Style.intro}`}>First steps with the Barikoi Location Library for Android</h2>
            <p className={Style.text}>The Barikoi Location Library for Android is our location search library for Android. This guide will walk you through installing the Barikoi Location Libraryfor Android with Android Studio, loading a map, changing the map's style, and placing a pin on it.</p>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Getting started</h2>
            <p className={Style.text}>Here's what you'll need to get started:</p>
            <div className={`mb-5 ${Style.text}`}>
                <ul>
                    <li className="mb-3" style={{listStyleType: "disc"}}>A Barikoi account and access token. <a style={{color:"#2ddbac"}} href="https://barikoi.com/signup">Sign up</a> for an account here. You can find your access tokens on your Account page.</li>
                    <li className="mb-3" style={{listStyleType: "disc"}}>Android Studio. You can download Android Studio for free from Google. In order to install the Barikoi Location Library for Android, you'll need to first download Android Studio and create a project with an empty activity.</li>
                    <li className="mb-3" style={{listStyleType: "disc"}}>An Android device (physical or virtual). You will need either a physical Android device or an emulated Android device to preview the store finder</li>
                    <li className="mb-3" style={{listStyleType: "disc"}}>Google Play Developer Account (optional). If you want to publish your app to Google Play, you'll need a Google Play developer account. Without one, you'll still be able to preview the app on an Android Virtual Device (AVD) or install the app on a physical device.</li>
                </ul>
            </div>
            <Row>
            <Col sm={6}> 
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/android-project'>
                  <h5>Next</h5>
                  <h4 className="mb-0">Create an Android Studio project
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default AndriodStart;