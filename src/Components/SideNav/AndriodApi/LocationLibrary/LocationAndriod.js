import React  from 'react';
import Style from '../Style.module.css'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleLeft, faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons"
import { CopyBlock, dracula } from 'react-code-blocks';

const LocationAndriod = () => {
  document.title = "Barikoi Location Library . Barikoi Documentation";
    return ( 
        <div>
            <h1 className={`mt-4 ${Style.api}`}>Barikoi Location Library</h1>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>Install the Barikoi Location Library for Android</h2>
            <p className={Style.text}>Before you begin building your app, install the Barikoi Location Library for Android by following our installation guide. The installation guide assumes that you have already downloaded Android Studio and created a new project. You'll make changes to four different files within your project to install the Barikoi Location Library for Android. The four files you'll be working with include: build.gradle (Module:App): Android Studio uses a toolkit called Gradle to compile resources and source code into an APK. This plain text file is used to configure the build and list dependencies, including the Barikoi Location Library for Android. AndroidManifest.xml: This is where you'll describe components of the application. MainActivity.java: This is a Java file where you'll specify Barikoi classes and methods. activity_main.xml: This is where you'll set the properties for your Location related searches, add an fragment to access an activity. Once you've completed all the steps in the installation guide, the four files below should include the following:</p>
            <h2 className={`mt-4 mb-3 ${Style.intro}`}>build.gradle (Module:App)</h2>

            <div className="mt-3 mb-5">
              <pre className={Style.coding}>
              <CopyBlock
              text={
        `//in addition to the rest of your build.gradle contents\n//you should include the following repository and dependency
        
      android {
          compileOptions {
              sourceCompatibility JavaVersion.VERSION_1_8
              targetCompatibility JavaVersion.VERSION_1_8
          }
      }
      
      allprojects {
          repositories {
              ...
              maven { url 'https://jitpack.io' }
          }
      }
      
      dependencies {
          implementation 'com.github.barikoi:BarikoiLocationLibrary:v1.2.2'
      }`
              }
              language={"java"}
              showLineNumbers={false}
              theme={dracula}
              codeBlock
            />
              </pre>
          </div>

          <Row>
            <Col sm={6}> 
            <div className={`mb-4 ${Style.previous}`}>
              <Link to='/android-project'>
                  <h5>Previous</h5>
                  <h4 className="mb-0">
                  <FontAwesomeIcon className="pr-1" icon={faAngleDoubleLeft} />
                  Create an Android Studio project</h4>
              </Link>
          </div>
            </Col>
            <Col sm={6}>
            <div className={`mb-4 ${Style.previous} ${Style.next}`}>
              <Link to='/android-token'>
                  <h5 >Next</h5>
                  <h4 className="mb-0">Get an access token
                  <FontAwesomeIcon className="pl-1" icon={faAngleDoubleRight} />
                  </h4>
              </Link>
          </div>
            </Col>
          </Row>
        </div>
     );
}
 
export default LocationAndriod;