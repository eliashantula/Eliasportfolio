import React, { Component } from "react";
import Scales from "./scales.png";


import Resumes from "./resume.pdf";
import ResModal from "./resmodal.js";
import { Parallax, Background } from "react-parallax";

import {
    Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Navbars extends Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }
  toggleNavbar() {
    this.setState({
      isOpen: !this.state.collapsed
    });
  }

  render() {
    return (
        
         <div className="testing1">
          <Nav navbar horizontal pills>
       <Navbar fixed={'top'} className="testing" expand="md">
        <NavbarBrand className="desc4 mr-auto" style={{ fontSize: "30px", color: "white"}}href="/">Elias Hantula</NavbarBrand>
         <Collapse isOpen={!this.state.collapsed} navbar>
         <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
      
       
     
        <NavItem>
          <NavLink style={{ fontSize: "15px", color: "black", }} href="#Projects">
            Projects
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ fontSize: "15px", color: "black" }} href="#Skills">
            Skills
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ fontSize: "15px", color: "black" }} href="#">
            <ResModal />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ fontSize: "15px", color: "black" }} href="#Contact">
            Contact
          </NavLink>
        </NavItem>

      
</Collapse>

       </Navbar>
       </Nav>
       </div>
       
    );
  }
}
export default Navbars;
