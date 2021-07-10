//import {Navbar,Nav,NavDropdown} from "react-bootstrap"
import Navbar from 'react-bootstrap/NavBar'

import Nav from 'react-bootstrap/Nav'



const NavBar = () =>{

        return(



<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
<Navbar.Brand href="#home">4x4.COM</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />
<Navbar.Collapse id="responsive-navbar-nav">
<Nav className="mr-auto">
        <Nav.Link href="#features">Toyota</Nav.Link>
        <Nav.Link href="#pricing">Jeep</Nav.Link>
        <Nav.Link href="#pricing">Land Rover</Nav.Link>
        <Nav.Link href="#pricing">Mitsubishi</Nav.Link>
</Nav>
    
</Navbar.Collapse>
</Navbar>



        )




}


export default NavBar