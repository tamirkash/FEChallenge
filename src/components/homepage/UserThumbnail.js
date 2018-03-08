import React, { Component } from "react";
import ThumbnailView from "./ThumbnailView";

export default class UserThumbnail extends Component {
    constructor(props){
        super(props);

        this.handleStop = this.handleStop.bind(this);
        this.onUnload = this.onUnload.bind(this);
    }

    handleStop(event, node){
        this.setState({
            x: node.x,
            y: node.y
        })
    }

    onUnload() {
        if(this.state) {
            this.props.saveLocation(this.state.x, this.state.y);
        }
    }

    componentDidMount() {
        window.addEventListener("beforeunload", this.onUnload);

        if(!this.props.thumbnail.thumbnailReceived) {
            this.props.getThumbnail();
        }
    }

    componentWillUnmount() {
        window.removeEventListener("beforeunload", this.onUnload);
        this.onUnload();
    }

    render() {
        return (
            this.props.thumbnail.thumbnailReceived ?
                <ThumbnailView handleStop={this.handleStop} {...this.props.thumbnail}/>
                    :
                <h2>Loading...</h2>
        )
    }
}