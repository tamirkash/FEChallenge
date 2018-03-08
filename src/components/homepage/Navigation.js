import {Button, Navbar} from "react-bootstrap";
import React, { Component } from "react";

export default class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <div className="nav navbar-right">
                    <Button onClick={this.props.onLogout}>Logout</Button>
                </div>
            </Navbar>
        )
    }
}