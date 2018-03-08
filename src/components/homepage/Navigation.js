import {Button, Navbar} from "react-bootstrap";
import React, { Component } from "react";

export default class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <ul className="nav navbar-right">
                    <li><Button onClick={this.props.onLogout}>Logout</Button></li>
                </ul>
            </Navbar>
        )
    }
}