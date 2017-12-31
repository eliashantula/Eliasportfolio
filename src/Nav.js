import React, {Component} from 'react';

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
    <nav role="navigation" className={`navbar ${colorStyle}`}>
      <div className="container-fluid">
        <div className="navbar-header">
          <a className="navbar-brand" href="#">
            Elias Hantula
          </a>
        </div>
        <ul className="nav navbar-nav navbar-inverse">
          <NavbarItem section={{title:'Home'}} active={true} />
          {sections.map(section => {
            return <NavbarItem section={section} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
