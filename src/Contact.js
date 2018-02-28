import React, {Component} from "react";
import Mailto from 'react-protected-mailto'
import { Parallax, Background } from 'react-parallax'
import Email from './email.png'

const Contact = () => {
  return <div className="container-fluid" style={{color: "black", background: "-webkit-radial-gradient(center, ellipse cover, #383838 0%, #C3C8D6 91%, #C3C8D6 92%)", marginTop: "0px", paddingTop: "25px", paddingBottom: "25px"}}>
  <h1 className="desc4" style={{color:"black", margin: "0px", paddingTop: "30px", paddingBottom: "20px"}}>Contact</h1>
   <p className="desc" style={{color:"black", paddingBottom: "20px"}}>Feel free to contact me with any questions, ideas and opportunities in software engineering and intellectual property.</p>
   <div className="row" style={{paddingTop:"10px"}}>
   <div className="col-lg-6" style={{marginTop:"0px"}}>
    <a href="mailto:sunvision@gmail.com"><img src={Email} style={{width: "50%"}} /> </a>
    </div>
   <div className="col-lg-6" style={{marginTop:"0px"}}>
   <div className="LI-profile-badge"  style={{marginTop: "0px"}} data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="eliashantula"><a class="LI-simple-link" href='https://www.linkedin.com/in/eliashantula?trk=profile-badge'>Elias H.</a></div>
   </div>

 </div>
  </div>
}



export default Contact; 