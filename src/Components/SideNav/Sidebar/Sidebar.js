import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Api from '../Api/Api';
import JsApi from '../JsApi/JsLibApi';
import AndriodApi from '../AndriodApi/AndriodApi';
import Pricing from '../Pricing/Pricing'
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
import BillCycle from '../Pricing/BillCycle/BillCycle'

class SideNav extends Component {
    state = { 
        toggle: false,
        jsToggle: false,
        AndApi: false,
        pricing: false
     }

     toggleHandle = (flag, current_value) => {
        this.setState({
          [flag]: !current_value
        });
        // console.log("Clicked")
      };

    render() { 
        return ( 
            <div className="mt-5 pt-4">
                <Container fluid>
                    <Row>
                        <Col sm={4} className="pl-0 sidebar scrolling">
                            <div className="mt-2">
                            <Api 
                            isToggle={() =>this.toggleHandle("toggle", this.state.toggle)} 
                            toggle={this.state.toggle} 
                            />
                            <JsApi
                            isToggle={() =>this.toggleHandle("jsToggle", this.state.jsToggle)}
                            toggle={this.state.jsToggle}
                             />
                             <AndriodApi
                             isToggle={() =>this.toggleHandle("AndApi", this.state.AndApi)}
                             toggle={this.state.AndApi}
                             />
                             <Pricing
                             isToggle={() =>this.toggleHandle("pricing", this.state.pricing)}
                             toggle={this.state.pricing}
                             />
                            </div>
                        </Col>
                        <Col sm={8}>
                            <Switch>
                            <Route path="/intro" component={PlaceApi} />
                            <Route path="/rev-geo" component={RevGeo} />
                            <Route path="/geo-server" component={GeoServer} />
                            <Route path="/geo-code" component={GeoCoding} />
                            <Route path="/autocomplete" component={AutoComplete} />
                            <Route path="/nearby" component={Nearby} />
                            <Route path="/distance" component={Distance} />
                            <Route path="/rupantor" component={Rupantor} />
                            <Route path="/route-api" component={RoutingApi} />
                            <Route path="/add-place" component={AddApi} />
                            <Route path="/district" component={DistrictApi} />
                            <Route path="/sub-district" component={SubDistrict} />
                            <Route path="/city-api" component={CityApi} />
                            <Route path="/union-api" component={UnionApi} />
                            <Route path="/ward-by-location" component={WardApi} />
                            <Route path="/zone-by-location" component={ZoneApi} />
                            <Route path="/ward-zone-by-location" component={WardZoneApi} />
                            <Route path="/city-corp-by-location" component={GeoLocApi} />
                          
                            <Route path="/library-intro" component={JsStart} />
                            <Route path="/search-js" component={SearchJs} />
                            <Route path="/geocoding-js" component={GeoJs} />
                            <Route path="/rev-geo-js" component={RevGeoJs} />
                            <Route path="/nearby-js" component={NearbyJs} />
                            <Route path="/autocomplete-js" component={AutoCompleteJs} />
                            
                            <Route path="/android-intro" component={AndriodStart} />
                            <Route path="/android-project" component={AndriodProject} />
                            <Route path="/android-location" component={LocationAndriod} />
                            <Route path="/android-token" component={TokenAndriod} />
                            <Route path="/android-search" component={SearchAndriod} />
                            <Route path="/android-geocoding" component={GeoAndriod} />
                            <Route path="/android-rev-geocoding" component={RevAndriod} />
                            <Route path="/android-nearby" component={NearbyAndriod} />

                            <Route path="/pricing-intro" component={PricingStart} />
                            <Route path="/pricing-general" component={AboutPricing} />
                            <Route path="/pricing-call" component={PricingApi} />
                            <Route path="/pricing-limit" component={LimitCall} />
                            <Route path="/pricing-details" component={BillCycle} />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default SideNav;