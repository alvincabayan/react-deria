import React from 'react';
import styled from 'styled-components';
import { Navbar, Nav } from 'react-bootstrap';


const Styles = styled.div`

`;

const NavigationBar = () => (
    <Styles>
        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="/">`de-Ria</Navbar.Brand>
            <Nav className="ml-auto">
                <Nav.Link href="/">Home</Nav.Link>
            </Nav>
        </Navbar>
    </Styles>
);

export default NavigationBar;