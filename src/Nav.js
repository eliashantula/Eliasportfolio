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
        
          <Nav fixed={'top'} tabs horizontal>
        <NavbarBrand className="desc4" style={{ fontSize: "30px", color: "white", float: "left"}}href="/">Elias Hantula</NavbarBrand>
        
         
         
      
       
     
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

      


       </Nav>
       </div>
       
    );
  }
}
export default Navbars;
