import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import logo from '../images/logo.png'
import {Navbar, Nav, Container} from 'react-bootstrap'
import '../App.css'
const Header = (props) => {
    return(
    <nav >
        <Container>
        <Navbar variant="dark" bg="dark" expand="md" fixed="top" >
            <Navbar.Brand classname="mr-0 mr-md2" href='/'>
                <img
                    src ={logo}
                    width="60"
                    height="30"
                    className="d-inline-block align-top"
                    alt="logo"
                />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex justify-content-end ml-auto light">
                <Nav.Item >
                    <Nav.Link href="/Our_Story">Our Story</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Blogs">Blogs</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Contact">Contact</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                    <Nav.Link href="/Videos">Videos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/Apps">Apps & games</Nav.Link>
                </Nav.Item>
            </Nav>
            </Navbar.Collapse>
            
        </Navbar>
        </Container>
    </nav>
    )
}
export default withRouter(Header)