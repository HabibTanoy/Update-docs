import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap'
import Api from '../Api/Api';
import JsApi from '../JsApi/JsLibApi';
import AndriodApi from '../AndriodApi/AndriodApi';
import Pricing from '../Pricing/Pricing'

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
                        <Col sm={4}>
                            <Api 
                            isToggle={() =>this.toggleHandle("toggle", this.state.toggle)} 
                            toggle={this.state.toggle} />
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
                        </Col>
                        <Col sm={8}>

                        </Col>
                    </Row>
                </Container>
            </div>
         );
    }
}
 
export default SideNav;