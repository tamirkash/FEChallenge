import React, { Component } from "react";
import {Button, FormControl, FormGroup} from "react-bootstrap";

export default class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: ""
        };
    }

    validateForm() {
        return this.state.username.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onLogin(this.state);
    }

    render(){
        return (
            <div className="Login">
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="username" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.username}
                            onChange={this.handleChange}
                            placeholder="Username"
                        />
                    </FormGroup>
                    <FormGroup controlId="password" bsSize="large">
                        <FormControl
                            value={this.state.password}
                            onChange={this.handleChange}
                            type="password"
                            placeholder="Password"
                        />
                    </FormGroup>
                    <Button
                        bsStyle="primary"
                        block
                        bsSize="large"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Let me in.
                    </Button>
                </form>
            </div>
        )
    }
}