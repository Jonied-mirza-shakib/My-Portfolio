import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" style={{ padding: '20px' }}>
                <Container>
                    <Navbar.Brand href="#" style={{ fontWeight: 'bold', fontSize: '30px', textTransform: 'uppercase', color: 'coral' }}>My Portfolio</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-3 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link style={{ fontWeight: 'bold', fontSize: '15px', color: 'darkblue' }} as={Link} to="/">Home</Nav.Link>
                            <Nav.Link style={{ fontWeight: 'bold', fontSize: '15px', color: 'darkblue' }} as={Link} to="/myMission">My Mission</Nav.Link>
                            <Nav.Link style={{ fontWeight: 'bold', fontSize: '15px', color: 'darkblue' }} as={Link} to="/hobbies">My Hobbies</Nav.Link>
                            <Nav.Link style={{ fontWeight: 'bold', fontSize: '15px', color: 'darkblue' }} as={Link} to="/projects">My All Projects</Nav.Link>
                            <Nav.Link style={{ fontWeight: 'bold', fontSize: '15px', color: 'darkblue' }} as={Link} to="/contactMe">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;