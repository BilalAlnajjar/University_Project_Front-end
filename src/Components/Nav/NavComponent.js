import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./nav.css"

function NavComponent() {
    return (
        <Navbar  expand="md">
            <Container fluid>
                <Navbar.Brand className="fs-3 fw-bolder px-3" href="#">Simple Soft</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto d-flex mx-auto gap-3 my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link  className="fs-6 fw-bolder" href="#action1">Home</Nav.Link>
                        <Nav.Link className="fs-6 fw-bolder" href="#action2">About</Nav.Link>
                        <NavDropdown className="fs-6 fw-bolder" title="Majors" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action4">
                                Software Engineering
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                                Software Engineering
                            </NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link className="fs-6 fw-bolder" href="#action2">Courses</Nav.Link>
                        <Nav.Link className="fs-6 fw-bolder" href="#action2">Contact</Nav.Link>

                        {/*<Nav.Link href="#" disabled>*/}
                        {/*    Link*/}
                        {/*</Nav.Link>*/}
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavComponent;