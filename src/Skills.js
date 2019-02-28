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
import REL from './relativity.png';
import Reveal from 'react-reveal/Reveal';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import Fade from 'react-reveal/Fade';
const Skills = () => {

  return <div className="container2" style={{background: "-webkit-radial-gradient( cover, white 0%, white 100%)", marginTop: "0px"}}>
  <Jumbotron className="alter skills" fluid>
  <Container fluid>
  <h1 className="display-3" style={{color:"black", margin: "0px", paddingTop: "50px", paddingBottom: "50px"}}>Skills</h1>
  <hr className="my-2"/>
 <Fade top>
<Row style={{paddingBottom: "0px", margin: "0px", paddingTop: "20px"}}>
   


<Col>
<img src={CSS} style={{width: "50%", marginTop: "0px"}}/>

</Col>
<Col>

<img src={Javascript} style={{width: "50%"}} />

</Col>

<Col>

<img src={HTML} style={{width: "50%", padding: "0px"}} />


</Col>
<Col>
<img src={REACT} style={{width:"50%", paddingTop: "0px", marginBottom: "0px"}} />
</Col>
</Row>

<Row style={{ paddingTop: "20px"}}>
<Col style={{marginTop:"0px"}}>
  


<img src={MONGTO} />

</Col>
<Col>
<img src={REL} style={{paddingTop: "40px", width: "80%"}}/>

</Col>
<Col>

<img src={PSQL} />

</Col>


<Col>


<img src={Scales} style={{width: "80%"}} />

</Col>
</Row>
</Fade>
</Container>
</Jumbotron>
 </div>
}


export default Skills; 