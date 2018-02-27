import React, {Component} from "react";

import { Parallax, Background } from 'react-parallax'

const Contact = () => {
  return <div className="container1" style={{background: "-webkit-radial-gradient(center, ellipse cover, #383838 0%, #C3C8D6 91%, #C3C8D6 92%)", marginTop: "0px", paddingTop: "25px", paddingBottom: "25px"}}>
  <h1 className="desc4" style={{color:"black", margin: "0px", paddingBottom: "20px"}}>Welcome</h1>
   <p className="desc" style={{color:"black"}}>Thank you for visiting. I am an attorney turned full stack software developer with a passion for technology, 
   the arts, <br/> and the law. I welcome the opportunity to contribute to and advance projects through my full stack software 
   expertise as well as my legal tech knowledge. <br/>Feel free to contact me with questions, ideas and opportunities in Software Engineering or Intellectual Property law.</p>
   
   <div className="LI-profile-badge"  style={{marginTop: "20px"}} data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="eliashantula"><a class="LI-simple-link" href='https://www.linkedin.com/in/eliashantula?trk=profile-badge'>Elias H.</a></div>
  </div>
}


export default Contact; 