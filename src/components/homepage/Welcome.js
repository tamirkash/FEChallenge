import React from 'react';
import PropTypes from "prop-types";

const Welcome = ({ text }) => {
    return (
        <h2 className="homepage-welcome">{text}</h2>
    )
}

export default Welcome;

Welcome.propTypes = {
  text: PropTypes.string.isRequired
};