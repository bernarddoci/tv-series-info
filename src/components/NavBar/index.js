import React, { Component } from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default class NavBar extends Component{
    render() {
        const navStyle = { marginBottom: 0 };
        return (
            <Navbar inverse collapseOnSelect style={navStyle}>
                <Navbar.Header>
                    <Navbar.Brand>
                     <Link to="/">TV Series - App</Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem eventKey={1} href="/">
                        Home
                        </NavItem>
                        <NavItem eventKey={2} href="/series">
                        Tv Series
                        </NavItem>
                        <NavItem eventKey={3} href="/shows">
                        Tv Shows
                        </NavItem>
                        <NavItem eventKey={4} href="/people">
                        People
                        </NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}