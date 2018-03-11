import React from 'react';
import './css/Homepage.css';
import Welcome from "./Welcome";
import UserThumbnail from "./UserThumbnail";
import PropTypes from "prop-types";

class Homepage extends React.Component{
    render(){
        return (
            <div className="container">
                <Welcome text={"Welcome " + this.props.username}/>
                <UserThumbnail
                    thumbnail={this.props.thumbnail}
                    saveLocation={this.props.saveLocation}
                    getThumbnail={this.props.getThumbnail}
                />
            </div>
        )
    }
};

Homepage.propTypes = {
    username: PropTypes.string.isRequired,
    thumbnail: PropTypes.object.isRequired,
    saveLocation: PropTypes.func.isRequired,
    getThumbnail: PropTypes.func.isRequired
};

export default Homepage;
