import React, {Component} from "react";
import Mailto from 'react-protected-mailto'
import { Parallax, Background } from 'react-parallax'

const Contact = () => {
  return <div className="container1" style={{color: "black", background: "-webkit-radial-gradient(center, ellipse cover, #383838 0%, #C3C8D6 91%, #C3C8D6 92%)", marginTop: "0px", paddingTop: "25px", paddingBottom: "25px"}}>
  <h1 className="desc4" style={{color:"black", margin: "0px", paddingTop: "30px", paddingBottom: "20px"}}>Contact</h1>
   <p className="desc" style={{color:"black"}}>Feel free to contact me with any questions, ideas and opportunities in software engineering and intellectual property</p>
    Email Me: <Mailto email="sunvision@gmail.com"  obfuscate={true}>
    </Mailto>
   <div className="LI-profile-badge"  style={{marginTop: "20px"}} data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="eliashantula"><a class="LI-simple-link" href='https://www.linkedin.com/in/eliashantula?trk=profile-badge'>Elias H.</a></div>
  </div>
}



export default Contact; 