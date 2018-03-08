import React, { Component } from "react";
import Draggable from "react-draggable";

export default class ThumbnailView extends Component {
    render() {
        return (
            <Draggable
                handle=".handle"
                defaultPosition={{x: this.props.x, y: this.props.y}}
                position={null}
                onStop={this.props.handleStop}>
                <div style={{backgroundImage: 'url(' + this.props.thumbnail + ')'}} className="homepage-image handle"/>
            </Draggable>
        )
    }
}