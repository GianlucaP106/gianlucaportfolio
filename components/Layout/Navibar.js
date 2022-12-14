import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useState, useEffect } from "react";
import Image from 'next/image';


export default function Navibar() {

    const [open, setOpen] = useState(false);
    const [burger, setBurger] = useState(false);

    return(
        
        <div className="myNavbar" id="">
            <Navbar collapseOnSelect expand="lg" className="" variant="dark" > 
            {/* //style={{boxShadow: "0px 4px 2px 0px #c6c6c6"}} */}
                <Container>
                    <Navbar.Brand href="/"><Image src="/assets/logos/G LOGO.png" width={75} height={75}/></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto ms-auto">
                            <Nav.Link className="navLink myfont400" href="/">Home</Nav.Link>
                            <Nav.Link className="navLink myfont400" href="/experience" > Experience</Nav.Link>
                            <Nav.Link className="navLink myfont400" href="/skills" > Skills</Nav.Link>
                            <Nav.Link className="navLink myfont400" href="/assets/Gianluca Piccirillo C.V. 2022.pdf" target={"_blank"} > Download my Resume</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link style={{marginLeft: "10px"}} href="/contact"><button className="contactMeButton"><p style={{margin: "0"}} className="">Contact Me</p></button></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
        
    );
}