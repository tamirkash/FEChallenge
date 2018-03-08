import React from 'react';
import './css/Homepage.css';
import Navigation from "./Navigation";
import Welcome from "./Welcome";
import UserThumbnailContainer from "./containers/UserThumbnailContainer";

class Homepage extends React.Component{
    render(){
        return (
            <div>
                <Navigation onLogout={this.props.onLogout}/>
                <div className="container">
                    <Welcome text={"Welcome " + this.props.username}/>
                    <UserThumbnailContainer />
                </div>
            </div>
        )
    }
};

export default Homepage;
