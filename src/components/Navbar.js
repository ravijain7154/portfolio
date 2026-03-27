import { Nav, Navbar, Offcanvas, Container } from 'react-bootstrap';
import logo from '../logo.svg';
import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      expand="md"
      className={`cuatom_header sticky-top ${scrolled ? 'scrolled' : 'custom-nav'}`}
    >
      <div className="container-md-fluid container-lg mx-0">
        <Navbar.Brand href="/#home">
          <img
            src={logo}
            className="logo App-logo w-auto"
            alt="logo"
            width="80"
            height="80"
          />
        </Navbar.Brand>

        {/* Toggle Button */}
        <Navbar.Toggle aria-controls="offcanvasNavbar" />

        {/* Offcanvas Menu */}
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="ms-auto">

              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/#about">About</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/#portfolio">Projects</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link href="/#exp">Exp</Nav.Link>
              </Nav.Item>

              <Nav.Item>
                <Nav.Link
                  as={Link}
                  to="/resume"
                >
                  Resume
                </Nav.Link>
              </Nav.Item>

            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </div>
    </Navbar>
  );
}

export default Header;