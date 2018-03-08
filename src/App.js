import React, { Component } from 'react';
import LoginContainer from "./components/login/containers/LoginContainer";
import HomepageContainer from "./components/homepage/containers/HomepageContainer";
import {Route, BrowserRouter as Router} from "react-router-dom";
import PrivateRouteContainer from "./components/privateRoute/containers/PrivateRouteContainer";

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
