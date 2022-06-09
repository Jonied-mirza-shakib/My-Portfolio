import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar expand="lg" style={{ padding: '20px', backgroundColor: 'gray' }} className='fixed-top'>
                <Container>
                    <Navbar.Brand href="#" style={{ fontWeight: 'bold', fontSize: '20px', textTransform: 'uppercase', color: 'coral' }}>Jonied Mirza Shakib</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="mx-auto my-3 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link style={{ fontWeight: 'bold', fontSize: '15px', color: 'coral', marginRight: '10px', textTransform: 'uppercase' }} as={Link} to="/">Home</Nav.Link>
                            <Nav.Link style={{ fontWeight: 'bold', fontSize: '15px', color: 'coral', marginRight: '10px', textTransform: 'uppercase' }} as={Link} to="/myMission">About Me</Nav.Link>
                            <Nav.Link style={{ fontWeight: 'bold', fontSize: '15px', color: 'coral', marginRight: '10px', textTransform: 'uppercase' }} as={Link} to="/hobbies">My Hobbies</Nav.Link>
                            <Nav.Link style={{ fontWeight: 'bold', fontSize: '15px', color: 'coral', marginRight: '10px', textTransform: 'uppercase' }} as={Link} to="/projects">Projects</Nav.Link>
                            <Nav.Link style={{ fontWeight: 'bold', fontSize: '15px', color: 'coral', textTransform: 'uppercase' }} as={Link} to="/contactMe">Contact Me</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;