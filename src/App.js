import React, { Component } from "react";
import myimage from "./landscape.jpg";
import "./App.css";
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
import Navbars from "./Nav";
import Section from "./Section";
import Welcome from "./Welcome";
import Images from "./Images";
import Justice from "./justice.png";
import Code from "./code.jpg";
import { Parallax, Background } from "react-parallax";
import Skills from "./Skills";
import Contact from "./Contact";
import Reveal from "react-reveal/Reveal";
import NavTest from './NavTest'


const sections = [
  {
    title: "Welcome",
    content: <Welcome />
  },
  {
    title: "Projects",
    content: <Images />
  
  },
  {
    title: "Skills",
    content: <Skills />
  },

  { title: "Resume" },

  {
    title: "Contact",
    content: <Contact />
  }
];

class App extends Component {
  render() {
    return (
      <div className="App">
      
         
          <NavTest />
   
      
        

        <div className="parts">
          {sections.map((section, i) => {

            return <Section id={section.title} child={section.content} key={i} />;

          })}
        </div>

        <Parallax blur={0} bgImage={require("./code.jpg")} strength={800}>
          <div style={{ height: "700px" }} />
        </Parallax>
      </div>
    );
  }
}

export default App;
