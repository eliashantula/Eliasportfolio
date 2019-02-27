import React from "react";
import Typing from 'react-typing-animation';
import { Parallax, Background } from 'react-parallax'

import { Jumbotron, Button, Container, Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap';
const Welcome = (props) => {

  return <div className="container1" style={{marginTop: "0px", paddingTop: "30px", paddingBottom: "30px"}}>
  <Jumbotron className="alter" fluid>
  <Container fluid>
  <Card inverse>
  <CardImgOverlay>
  <CardTitle className="display-3 welcome" style={{color:"black", margin: "0px", paddingTop: "30px",paddingBottom: "30px"}}>Welcome</CardTitle>
<div className="restrict">
    <CardText className="my-1 fontTest"><Typing speed={60}>
   Thanks for coming by! I am an attorney turned full stack software developer with a passion for technology, learning,
   the arts, and intellectual property. My expertise includes working with a wide ranging entities including mom and pop businesses, craft breweries and celebrities. I am always eager to work on projects which promote and stimulate creativity, knowledge and enhanced life experiences. 
  </Typing></CardText>
</div>
</CardImgOverlay>
</Card>
  </Container>
  </Jumbotron>

  </div>
  
}

export default Welcome;
