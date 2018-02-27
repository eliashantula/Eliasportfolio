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

    <nav role="navigation" className={`navbar ${colorStyle}`} style={{margin: "0", border: "1px"}}>
      <div className="container-fluid">

        <div className="navbar-header">
       
          <a className="navbar-brand" href="#">
         
              Elias Hantula - Software Developer - Attorney 
              
          </a>
        </div>
         
        <ul className="nav navbar-nav navbar-inverse">
          <NavbarItem section={{title:'Home'}} active={true} />
          {sections.map(section => {
            return <NavbarItem section={section} />;
          })}
        </ul>
      </div>

      <Parallax
      blur={2}
      bgImage={require('./code.jpg')}
     
      strength={600}
    >   
      <div style={{ height: '400px' }} />
  </Parallax>
     
    </nav>
  );
};

export default Navbar;
