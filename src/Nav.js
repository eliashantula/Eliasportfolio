import React, {Component} from 'react';
import Scales from './scales.png'
import { Parallax, Background } from 'react-parallax'
const NavbarItem = ({section, active}) => {
  let activeState = '';

  if (active) {
    activeState = 'active';
  }

  return (
    <li className={activeState}>
      <a href={`#${section.title}`}>{section.title}</a>
    </li>
  );
};

const Navbar = ({sections, colorStyle}) => {
  return (

    <nav role="navigation" className={`navbar ${colorStyle} navig`} style={{margin: "0", border: "2px solid white", backgroundColor: "black"}}>
     

        <div className="navbar-header">
       
          <a className="navbar-brand" href="#">
         
              Elias Hantula
              
          </a>
        </div>
         
        <ul className="nav navbar-nav">
          <NavbarItem section={{title:''}} active={true} />
          {sections.map(section => {
            return <NavbarItem section={section} />;
          })}
        </ul>
      
     
    </nav>
  );
};

export default Navbar;
