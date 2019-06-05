import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';


const Styles = styled.div`

`;

const NavigationBar = () => (
    <Styles>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">`de-Ria</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
                <Nav.Item><Nav.Link href="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link href="/">About</Nav.Link></Nav.Item>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
    </Styles>
);

export default NavigationBar;