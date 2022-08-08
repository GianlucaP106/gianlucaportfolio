import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Collapse from "react-bootstrap/Collapse";
import Link from "next/link";

import { useState, useEffect } from "react";


export default function Navibar() {

    const [open, setOpen] = useState(false);
    const [burger, setBurger] = useState(false);

    return(
        
        <div className="myNavbar" id="">
            <Navbar collapseOnSelect expand="lg" className="" variant="dark" > 
            {/* //style={{boxShadow: "0px 4px 2px 0px #c6c6c6"}} */}
                <Container>
                    <Navbar.Brand href="/"></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-auto">
                            <Nav.Link className="navLink myfont400" href="/">Home</Nav.Link>
                            {/* <NavDropdown className="centerItemV navPadFix navPosFix" title="Services" id="dropdownNav">
                                <NavDropdown.Item className="" href="">About Me</NavDropdown.Item>
                                <NavDropdown.Item className="" href="">Skills</NavDropdown.Item>
                                <NavDropdown.Item className="" href="">Experience</NavDropdown.Item>
                                {/* <NavDropdown.Divider /> */}
                                {/* <NavDropdown.Item className="dropDownElements" href="">Separated link</NavDropdown.Item> 
                            </NavDropdown> */}

                            {/* <Nav.Link className="" href="" id="collapseMobile">
                                <button className="" aria-controls="example-collapse-text" aria-expanded={open} onClick={() => setOpen(!open)}>
                                    Services
                                </button>
                            </Nav.Link> */}
                            {/* <Collapse in={open} id="collapseMobile">
                                <div className="collapseTextMobile" id="example-collapse-text">
                                    <Nav.Link className="" href="">Web Development</Nav.Link>
                                    <Nav.Link className="" href="">Graphic Design</Nav.Link>
                                    <Nav.Link className="" href="">Marketing</Nav.Link>
                                </div>
                            </Collapse> */}

                            {/* <Nav.Link className="text-white navPadFix navPosFix" href="" style={{textDecoration: "none", color: "black", display: "flex", alignItems: "center"}}>About Us </Nav.Link> */}
                            <Nav.Link className="navLink myfont400" href="" > Experience</Nav.Link>
                            <Nav.Link className="navLink myfont400" href="" > Skills</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href=""><button className="contactMeButton"><p style={{margin: "0"}} className="">Contact Me</p></button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        
    );
}