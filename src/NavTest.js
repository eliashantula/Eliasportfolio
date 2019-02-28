import React from 'react';
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
  DropdownItem } from 'reactstrap';
  import ResModal from "./resmodal.js";
  import AnchorLink from 'react-anchor-link-smooth-scroll'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeNav() {
    this.setState({ isOpen: this.state.isOpen });
  }

  render() {
    return (
     
        <Navbar className="anotherTest" sticky={'top'} expand="sm" light  >
          <NavbarBrand className="desc4 mr-auto" style={{ fontSize: "25px", color: "white"}}href="/">Elias Hantula</NavbarBrand>
          <NavbarToggler onClick={this.toggle}/>
          <Collapse isOpen={this.state.isOpen}  onClick={this.toggle} navbar>
            <Nav  navbar className="ml-auto" tabs>
             <NavItem>
          <NavLink style={{ fontSize: "15px", color: "black", }}> <AnchorLink style={{color: 'black'}}href="#Projects">
            Projects
            </AnchorLink>
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ fontSize: "15px", color: "black" }}>
          <AnchorLink style={{color: 'black'}} href="#Skills">
            Skills
          </AnchorLink> </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ fontSize: "15px", color: "black" }} href="#">
            <ResModal />
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink style={{ fontSize: "15px", color: "black" }}> <AnchorLink style={{color: 'black'}} href="#Contact">
            Contact
            </AnchorLink>
          </NavLink>

        </NavItem>
              
            </Nav>
          </Collapse>
        </Navbar>
   
    );
  }
}