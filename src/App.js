import React, { Component } from 'react';
import LoginContainer from "./components/authentication/containers/LoginContainer";
import HomepageContainer from "./components/homepage/containers/HomepageContainer";
import {Route, BrowserRouter as Router} from "react-router-dom";
import PrivateRouteContainer from "./components/authentication/containers/PrivateRouteContainer";

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path="/login" component={LoginContainer} />
                    <PrivateRouteContainer exact path="/" component={HomepageContainer} />
                </div>
            </Router>
        );
    }
}

export default App;
