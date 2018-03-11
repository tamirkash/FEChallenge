import React, { Component } from 'react';
import LoginContainer from "./components/login/containers/LoginContainer";
import HomepageContainer from "./components/homepage/containers/HomepageContainer";
import {Route, BrowserRouter as Router, Switch} from "react-router-dom";
import PrivateRouteContainer from "./components/privateRoute/containers/PrivateRouteContainer";
import ContactUsContainer from "./components/contactUs/containers/ContactUsContainer";

class App extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <PrivateRouteContainer exact path="/" component={HomepageContainer} />
                    <PrivateRouteContainer exact path="/contact" component={ContactUsContainer}/>
                    <Route path="/login" component={LoginContainer} />
                </Switch>
            </Router>
        );
    }
}

export default App;
