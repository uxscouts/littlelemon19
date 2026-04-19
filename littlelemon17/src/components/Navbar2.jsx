
import { useState } from 'react';
import { Collapse, Navbar, NavbarBrand, NavbarToggler, Nav, NavItem, NavLink } from 'reactstrap';
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
          <NavItem><NavLink href="/">Home</NavLink></NavItem>
          <NavItem><NavLink><Link to="/about">About</Link></NavLink></NavItem>
          <NavItem><NavLink><Link to="/reservation">Reservation</Link></NavLink></NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default SiteNavbar;


// Home - About - Menu - Reservations -  Order Online - Login