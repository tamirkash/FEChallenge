import React, { Component } from "react";
import './css/ContactUs.css';
import ContactUsForm from "./ContactUsForm";
import ContactUsStatus from "./ContactUsStatus";
import PropTypes from 'prop-types';

export default class ContactUs extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            subject: "",
            body: "",
            showStatus: false
        };

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    handleClose() {
        this.setState({ showStatus: false });
    }

    handleShow() {
        this.setState({ showStatus: true });
    }

    validateForm() {
        return this.state.subject.length > 0 && this.state.body.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({showStatus: true});
        this.props.onSubmit(this.state.subject, this.state.body);
    }

    render() {
        return (
            <div className="container contact-container">
                <ContactUsForm
                    validateForm={this.validateForm}
                    handleChange={this.handleChange}
                    handleSubmit={this.handleSubmit}
                    subject={this.state.subject}
                    body={this.state.body}
                />
                <ContactUsStatus
                    isContacting={this.props.contact.isContacting}
                    errorMessage={this.props.contact.errorMessage}
                    showStatus={this.state.showStatus}
                    handleClose={this.handleClose}
                />
            </div>
        )
    }
}

ContactUs.propTypes = {
    contact: PropTypes.object.isRequired
};