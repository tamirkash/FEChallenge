import React, { Component } from 'react';
import {Button, Modal} from "react-bootstrap";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

export default class ContactUsStatus extends Component {
    render() {
        return (
            <Modal backdrop={'static'} keyboard={false} show={this.props.showStatus} onHide={this.props.handleClose}>
                {this.props.isContacting ?
                    <Modal.Body>
                        <h4>Please wait...</h4>
                    </Modal.Body>
                    :
                    this.props.errorMessage ?
                        <div>
                            <Modal.Body>
                                <h4>{this.props.errorMessage}</h4>
                            </Modal.Body>
                            <Modal.Footer>
                                <Button onClick={this.props.handleClose}>
                                    Close
                                </Button>
                            </Modal.Footer>
                        </div>
                        :
                        <div>
                            <Modal.Body>
                                <h4>Got it!</h4>
                            </Modal.Body>
                            <Modal.Footer>
                                <Link to="/">
                                    <Button onClick={this.props.handleClose}>
                                        Back
                                    </Button>
                                </Link>
                            </Modal.Footer>
                        </div>
                }
            </Modal>
        )
    }
}

ContactUsStatus.propTypes = {
    showStatus: PropTypes.bool.isRequired,
    isContacting: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string,
    handleClose: PropTypes.func.isRequired
};