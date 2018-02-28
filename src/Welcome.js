import React, {Component} from "react";
import Mailto from 'react-protected-mailto'
import { Parallax, Background } from 'react-parallax'
const Welcome = () => {
  return <div className="container1" style={{background: "-webkit-radial-gradient(center, ellipse cover, #383838 0%, #C3C8D6 91%, #C3C8D6 92%)", marginTop: "0px", paddingTop: "25px", paddingBottom: "25px"}}>
  <h1 className="desc4" style={{color:"black", margin: "0px", paddingTop: "30px",paddingBottom: "20px"}}>Welcome</h1>
   <p align="center" className="desc" style={{color:"black", wordWrap: "breakWord", marginTop: "50px"}}>Thank you for visiting. 
   I am an attorney turned full stack software developer with a passion for technology, <br/>
   the arts, and the law. I love working on projects which promote and stimulate creativity, knowledge and enhanced life experience. <br/>To that end some of my contributions include securing intellectual 
   property protection for <br/>mom and pop restaurants, craft breweries and internet startups. I welcome the opportunity <br/>to work on and advance projects through my software engineering
   expertise as well as my legal knowledge. 
  </p>
  </div>
}

export default Welcome;
