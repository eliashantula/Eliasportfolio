import React, {Component} from "react";
import Mailto from 'react-protected-mailto'

const Welcome = () => {
  return <div className="container">
   <p className="desc">Thank you for visiting. I am an attorney turned full stack software developer with a passion for technology, 
   the arts, and the law. I welcome the opportunity to contribute to and advance projects through my full stack software 
   expertise as well as my legal technology knowledge. Feel free to contact me with questions, ideas and opportunities in Software Engineering or Intellectual Property law.</p>
    Email Me: <Mailto email="sunvision@gmail.com" obfuscate={true}/><br />
    <div className="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="eliashantula"><a class="LI-simple-link" href='https://www.linkedin.com/in/eliashantula?trk=profile-badge'>Elias H.</a></div>
  </div>
}

export default Welcome;
