import React, {Component} from "react";
import Mailto from 'react-protected-mailto'
import { Parallax, Background } from 'react-parallax'
import Scales from './scale.png';
import Javascript from './Javascript.png';
import HTML from './htmls.png';
import CSS from './csss.svg';
import PSQL from './post.png';
import REACT from './react.png';
import MONGTO from './mongob.png';
const Skills = () => {
  return <div className="container-fluid" style ={{background: "-webkit-radial-gradient(center, ellipse cover, #383838 0%, #C3C8D6 91%, #C3C8D6 92%)", margin: "0px", border: "0px solid black", paddingTop: "40px", paddingBottom: "-10px"}}>
  <h1 className="desc4" style={{color:"black", margin: "0px", paddingTop: "20px", paddingBottom: "30px"}}>Skills</h1>
<div className="row" style={{paddingBottom: "0", margin: "0px", paddingTop: "30px"}}>
   
<div className="col-md-4" style={{marginTop:"0px"}}>


<img src={REACT} style={{width:"30%", paddingTop: "20px", marginBottom: "0px"}} />

</div>
<div className="col-md-4">

<img src={Javascript} />

</div>

<div className="col-md-4">

<img src={HTML} style={{width: "50%", padding: "0px"}} />


</div>
<div className="col-md-4">

<img src={MONGTO} />

</div>
<div className="col-md-4">

<img src={PSQL} />

</div>

<div className="col-md-4">
<img src={CSS} style={{width: "40%", marginTop: "30px"}}/>

</div>
<div className="col-md-12">


<img src={Scales} style={{width: "30%"}} />

</div>
</div>
</div>

 
}


export default Skills; 