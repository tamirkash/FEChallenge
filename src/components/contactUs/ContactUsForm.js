import React, { Component } from 'react';
import {Button, FormControl, FormGroup} from "react-bootstrap";
import PropTypes from "prop-types";

export default class ContactUsForm extends Component {
    render() {
        return (
            <div>
                <h2 className="contact-title">Contact Us</h2>
                <form onSubmit={this.props.handleSubmit}>
                    <FormGroup controlId="subject" bsSize="lg">
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.props.subject}
                            onChange={this.props.handleChange}
                            placeholder="Subject"
                        />
                    </FormGroup>
                    <FormGroup controlId="body" bsSize="lg">
                        <FormControl
                            componentClass="textarea"
                            rows={4}
                            value={this.props.body}
                            onChange={this.props.handleChange}
                            type="textarea"
                            placeholder="Body"
                        />
                    </FormGroup>
                    <Button
                        bsStyle="primary"
                        className="contact-submit-button"
                        disabled={!this.props.validateForm}
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        )
    }
}

ContactUsForm.propTypes = {
    subject: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    validateForm: PropTypes.func.isRequired
};