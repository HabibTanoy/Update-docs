import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import { Route, Switch } from 'react-router-dom';
import Api from '../Api/Api';
import JsApi from '../JsApi/JsLibApi';
import AndriodApi from '../AndriodApi/AndriodApi';
import Pricing from '../Pricing/Pricing'
import PlaceApi from '../Api/PlaceApi/PlaceApi';
import RevGeo from '../Api/RevGeo/RevGeo'


class SideNav extends Component {
    state = { 
        toggle: false,
        jsToggle: false,
        AndApi: false,
        pricing: false,
        brak:"{",
        endBrk:"}",
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
                            <Route
                            exact
                            path='/intro'
                            render={(props) => (
                                <PlaceApi brek={this.state.brak} endBrk={this.state.endBrk} />
                            )}
                            />
                            <Route
                            exact
                            path='/rev'
                            render={(props) => (
                                <RevGeo brek={this.state.brak} endBrk={this.state.endBrk} />
                            )}
                            />
                            </Switch>
                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default SideNav;