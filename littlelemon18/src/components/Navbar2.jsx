
import { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink, Button } from 'reactstrap';
import logo from '../assets/images/LemonLogo.png';
import { Link } from 'react-router-dom';


const SiteNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);


  return (
    <Navbar light expand="md">
      <NavbarBrand href="/">
        <img src={logo} alt="Little Lemon Company Logo" />
      </NavbarBrand>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ms-auto" navbar>
          <Link to="/"><NavItem>Home</NavItem></Link>
          <NavItem><NavLink href="/about">About</NavLink></NavItem>
          <NavItem><NavLink href="/">Menu</NavLink></NavItem>
          <NavItem><Link to="/reservation">Reservation</Link></NavItem>
          <NavItem><NavLink href="/">Order Online</NavLink></NavItem>
          <NavItem><NavLink href="/"><Button color="warning">Login</Button></NavLink></NavItem>
        {/*  <NavItem><NavLink><Link to="/about">About</Link></NavLink></NavItem>
          <NavItem><NavLink><Link to="/reservation">Reservation</Link></NavLink></NavItem> */}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default SiteNavbar;


// Home - About - Menu - Reservations -  Order Online - Login