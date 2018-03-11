import {MenuItem, Nav, Navbar, NavDropdown, NavItem} from "react-bootstrap";
import PropTypes from 'prop-types';
import React, { Component } from "react";
import './css/Navigation.css';
import {LinkContainer} from "react-router-bootstrap";
import {Link} from "react-router-dom";

export default class Navigation extends Component {
    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Link className='navbar-brand' to="/">
                        FE Challenge
                    </Link>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav activeKey={this.props.location} pullRight>
                        <LinkContainer active={this.props.location === '/contact'} to="/contact">
                            <NavItem eventKey={'/contact'}>
                                Contact Us
                            </NavItem>
                        </LinkContainer>
                        <NavDropdown eventKey={'user-dropdown'} title={this.props.username} id="basic-nav-dropdown">
                            <MenuItem onClick={this.props.onLogout} eventKey={'/logout'}>Logout</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

Navigation.propTypes = {
    location: PropTypes.string,
    username: PropTypes.string,
    onLogout: PropTypes.func.isRequired
};