import React, { Component } from "react";
import "./css/Login.css";
import {Redirect} from "react-router-dom";
import LoginForm from "./LoginForm";

export default class Login extends Component {
    render() {
        return (
            this.props.logged ?
                <Redirect to={{pathname: '/'}}/>
                :
                <LoginForm onLogin={this.props.onLogin}/>
        );
    }
}