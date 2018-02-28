<nav className="navbar navbar-inverse">
<div className="container-fluid">
        <div className="navbar-header">
       
          <a className="navbar-brand" href="#">
         
              Elias Hantula
              
          </a>
        
         
        <ul className="nav navbar-nav">
          <NavbarItem section={{title:''}} active={true} />
          {sections.map(section => {
            return <NavbarItem section={section} />;
          })}
        </ul>
      </div>
      </div>
     </nav>