import React from "react";
import Typing from 'react-typing-animation';
import { Parallax, Background } from 'react-parallax'

import { Jumbotron, Button, Container, Card, CardTitle, CardText, CardImg, CardImgOverlay} from 'reactstrap';
const Welcome = (props) => {

  return (
  <div className="container1">
  <Jumbotron className="alter welcome" fluid>
  <Container fluid>
  <Card inverse>
  <CardImgOverlay>
<div className="restrict">
    <CardText className="my-1 fontTest"><Typing speed={55}>
   Thanks for visiting! I am an attorney turned developer with a passion for technology, learning,
   the arts, and intellectual property. I am experienced working with diverse entities such as small businesses, craft breweries and celebrities and am always eager to develop innovative solutions which enhance life experiences. 
  </Typing></CardText>
</div>
</CardImgOverlay>
</Card>
  </Container>
  </Jumbotron>

  </div>
  )
}

export default Welcome;
