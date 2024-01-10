
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const AppNavbar = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand className="bg-body-tertiary" style={{ fontFamily: 'Arial', fontSize: '1.5rem', fontWeight: 'bold' }}>
        Task Priority and Deadline Tracker
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link to="/home">Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
