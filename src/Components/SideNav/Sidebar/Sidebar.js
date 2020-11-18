import React, { Component } from 'react';
import ScrollToTopRoute from '../ScrollToTopRoute';
import { Container, Row, Col } from 'react-bootstrap'
import { Switch } from 'react-router-dom';
import HomePage from '../Homepage/HomePage';
import Api from '../Api/Api';
import JsApi from '../JsApi/JsLibApi';
import AndriodApi from '../AndriodApi/AndriodApi';
import Pricing from '../Pricing/Pricing';
//Api
import PlaceApi from '../Api/PlaceApi/PlaceApi';
import RevGeo from '../Api/RevGeo/RevGeo';
import GeoServer from '../Api/GeoServer/GeoServer';
import GeoCoding from '../Api/GeoCoding/Geocoding';
import AutoComplete from '../Api/AutoComplete/AutoComplete';
import Nearby from '../Api/Nearby/Nearby';
import Distance from '../Api/Distance/Distance';
import Rupantor from '../Api/Rupantor/Rupantor';
import RoutingApi from '../Api/RoutingApi/Routing';
import AddApi from '../Api/AddPlace/AddApi';
import DistrictApi from '../Api/DistrictApi/DistrictApi';
import SubDistrict from '../Api/SubDistrict/SubDist';
import CityApi from '../Api/CityApi/CityApi';
import UnionApi from '../Api/UnionApi/Union';
import WardApi from '../Api/CityCorporationApi/WardApi/Ward';
import ZoneApi from '../Api/CityCorporationApi/ZoneApi/Zone';
import WardZoneApi from '../Api/CityCorporationApi/WardZoneApi/WardZoneApi';
import GeoLocApi from '../Api/CityCorporationApi/GeoLocationApi/GeoLoc';
// Js Library
import JsStart from '../JsApi/JsStart/JsStarted';
import SearchJs from '../JsApi/Search/Search';
import GeoJs from '../JsApi/GeoJs/GeoCode';
import RevGeoJs from '../JsApi/RevGeo/RevGeoJs';
import NearbyJs from '../JsApi/NearbyJs/NearbyJs';
import AutoCompleteJs from '../JsApi/AutoComplete/AutoComplete';
//Andriod 
import AndriodStart from '../AndriodApi/StartAndriod/StartAndr';
import AndriodProject from '../AndriodApi/AndriodProject/ProjectStudio';
import LocationAndriod from '../AndriodApi/LocationLibrary/LocationAndriod';
import TokenAndriod from '../AndriodApi/Token/Token';
import SearchAndriod from '../AndriodApi/SearchAndriod/Search';
import GeoAndriod from '../AndriodApi/GeoAndriod/GeoAndriod';
import RevAndriod from '../AndriodApi/RevGeoAndriod/RevAndriod';
import NearbyAndriod from '../AndriodApi/NearbyAndriod/Nearby';
//Pricing
import PricingStart from '../Pricing/StartPricing/PricingStart';
import AboutPricing from '../Pricing/AboutPricing/AboutPricing';
import PricingApi from '../Pricing/ApiPricing/PricingApi';
import LimitCall from '../Pricing/CallLimit/LimitCall';
import BillCycle from '../Pricing/BillCycle/BillCycle';
import MapAdd from '../Pricing/MapAdd/Map'
//Bkoi-verify-Auth
import Login from '../Api/Bkoi-Verify/Login/Login';
import Registration from '../Api/Bkoi-Verify/Registration/Registration';
import Logout from '../Api/Bkoi-Verify/Logout/logout';
//Verify-Api
import CreateApp from '../Api/Bkoi-Verify/CreateApplication/createApp';
import AppList from '../Api/Bkoi-Verify/ApplicationList/AppList';
import AppDetails from '../Api/Bkoi-Verify/ApplicationDetails/AppDetails';
import AppRequest from '../Api/Bkoi-Verify/RequestRevision/AppRequest';

class SideNav extends Component {
    state = { 

     }

    render() { 
        return ( 
            <div className="mt-5 pt-4">
                <Container fluid>
                    <Row>
                        <Col sm={4} id="demo" className="pl-0 sidebar scrolling">
                            <div className="mt-2">
                            <Api 
                            isToggle={() =>this.props.toggleHandle("toggle", this.props.toggle)} 
                            toggle={this.props.toggle} 
                            />
                            <JsApi
                            isToggle={() =>this.props.toggleHandle("jsToggle", this.props.jsToggle)}
                            toggle={this.props.jsToggle}
                             />
                             <AndriodApi
                             isToggle={() =>this.props.toggleHandle("AndApi", this.props.AndApi)}
                             toggle={this.props.AndApi}
                             />
                             <Pricing
                             isToggle={() =>this.props.toggleHandle("pricing", this.props.pricing)}
                             toggle={this.props.pricing}
                             />
                            </div>
                        </Col>
                        <Col sm={8}>
                            <Switch>
                            //API
                            <ScrollToTopRoute exact path="/" component={() => <HomePage toggleHandle={this.props.toggleHandle} toggle={this.props.toggle} />}/>    
                            <ScrollToTopRoute path="/intro" component={PlaceApi}/>
                            <ScrollToTopRoute path="/rev-geo" component={RevGeo} />
                            <ScrollToTopRoute path="/geo-server" component={GeoServer} />
                            <ScrollToTopRoute path="/geo-code" component={GeoCoding} />
                            <ScrollToTopRoute path="/autocomplete" component={AutoComplete} />
                            <ScrollToTopRoute path="/nearby" component={Nearby} />
                            <ScrollToTopRoute path="/distance" component={Distance} />
                            <ScrollToTopRoute path="/rupantor" component={Rupantor} />
                            <ScrollToTopRoute path="/route-api" component={RoutingApi} />
                            <ScrollToTopRoute path="/add-place" component={AddApi} />
                            <ScrollToTopRoute path="/district" component={DistrictApi} />
                            <ScrollToTopRoute path="/sub-district" component={SubDistrict} />
                            <ScrollToTopRoute path="/city-api" component={CityApi} />
                            <ScrollToTopRoute path="/union-api" component={UnionApi} />
                            //wardApi
                            <ScrollToTopRoute path="/ward-by-location" component={WardApi} />
                            <ScrollToTopRoute path="/zone-by-location" component={ZoneApi} />
                            <ScrollToTopRoute path="/ward-zone-by-location" component={WardZoneApi} />
                            <ScrollToTopRoute path="/city-corp-by-location" component={GeoLocApi} />
                            //Bkoi-Verify-Auth
                            {/* <ScrollToTopRoute path="/verify-login" component={Login} />
                            <ScrollToTopRoute path="/verify-logout" component={Logout} />
                            //Verify Api
                            <ScrollToTopRoute path="/app-create" component={CreateApp} />
                            <ScrollToTopRoute path="/app-list" component={AppList} />
                            <ScrollToTopRoute path="/app-details" component={AppDetails} />
                            <ScrollToTopRoute path="/app-request" component={AppRequest} /> */}
                            //Js-Library
                            <ScrollToTopRoute path="/library-intro" component={JsStart} />
                            <ScrollToTopRoute path="/search-js" component={SearchJs} />
                            <ScrollToTopRoute path="/geocoding-js" component={GeoJs} />
                            <ScrollToTopRoute path="/rev-geo-js" component={RevGeoJs} />
                            <ScrollToTopRoute path="/nearby-js" component={NearbyJs} />
                            <ScrollToTopRoute path="/autocomplete-js" component={AutoCompleteJs} />
                            //Andriod 
                            <ScrollToTopRoute path="/android-intro" component={AndriodStart} />
                            <ScrollToTopRoute path="/android-project" component={AndriodProject} />
                            <ScrollToTopRoute path="/android-location" component={LocationAndriod} />
                            <ScrollToTopRoute path="/android-token" component={TokenAndriod} />
                            <ScrollToTopRoute path="/android-search" component={SearchAndriod} />
                            <ScrollToTopRoute path="/android-geocoding" component={GeoAndriod} />
                            <ScrollToTopRoute path="/android-rev-geocoding" component={RevAndriod} />
                            <ScrollToTopRoute path="/android-nearby" component={NearbyAndriod} />
                            //Pricing
                            <ScrollToTopRoute path="/pricing-intro" component={PricingStart} />
                            <ScrollToTopRoute path="/pricing-general" component={AboutPricing} />
                            <ScrollToTopRoute path="/pricing-call" component={PricingApi} />
                            <ScrollToTopRoute path="/pricing-limit" component={LimitCall} />
                            <ScrollToTopRoute path="/pricing-details" component={BillCycle} />
                            <ScrollToTopRoute path="/map-add" component={MapAdd} />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default SideNav;
