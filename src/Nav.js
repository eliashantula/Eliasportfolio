import React, {Component} from 'react';
import Scales from './scales.png'
import { Parallax, Background } from 'react-parallax'
import { Navbar, Nav, NavItem } from 'react-bootstrap';


const Navbars = ({sections, colorStyle}) => {
  return (
    <div>
<Navbar fixedTop inverse collapseOnSelect className="nav">

  <Navbar.Header className="head" style={{float: "left"}}>

    <Navbar.Brand className="desc2" style={{paddingRight: "200px", fontSize: "30px", color: "white", fontFamily: "Lato, sans-serif"}}>

      Elias Hantula
    

    </Navbar.Brand>

    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav style={{fontSize: "15px"}}>

      <NavItem eventKey={1} href="#Welcome" style={{fontSize: "15px", padding: "0px"}}>
        Welcome
      </NavItem>
      <NavItem eventKey={2} href="#Projects">
        Projects
      </NavItem>
      </Nav>
      <Nav style={{fontSize: "15px", padding: "0px"}}>
        <NavItem eventKey={3} href="#Skills">
        Skills
      </NavItem>
      
        <NavItem eventKey={4} href="#Contact">
        Contact
      </NavItem>
   
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
     </div>
 
  );
};

export default Navbars;
