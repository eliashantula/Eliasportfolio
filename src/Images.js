import React from 'react'
import event from './event.png'
import ukraine from './ukraine.png'

import backpack from './Backpack.png'
import { Parallax, Background } from 'react-parallax'
import Reveal from 'react-reveal/Reveal';
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import Fade from 'react-reveal/Fade';
const Images = () =>{

return (



<div className="projects">         
<Jumbotron className="alter" fluid style={{paddingTop: "0px, marginBottom: 0px"}}>      
<Container fluid style ={{background: "-webkit-radial-gradient(ellipse, red 0%, orange 100%)", margin: "0px", border: "0px solid black", paddingTop: "30px", paddingBottom: "30px"}}>
        <Parallax blur={0}  strength={800}>
        

       <h1 className="display-3" style={{color:"black", margin: "0px", paddingTop: "30px", paddingBottom: "20px"}}>Projects</h1>
       <hr className="my-2"/>

</Parallax>

<Fade top>
<Row style={{paddingBottom: "0px", paddingTop: "30px", paddingBottom: "40px"}}>
    
<Col style={{marginTop:"0px", marginBottom: "30px"}}>

<a href="https://appbackpack.herokuapp.com">
<img src={backpack} /></a>

 <blockquote><p className="lead" style={{color:"black", paddingTop: "5px", paddingBottom: "5px"}}><cite>Backpack:</cite> Web Application enabling user to store links in their private accounts either through the website or through a Chrome extension. The application utilizes React, Redux, passport authentication, and MongoDB.</p></blockquote>

<a style={{paddingTop: "0px"}}className="github-button" href="http://www.github.com/eliashantula/Backpack" aria-label="GitHub">Github Repo</a>
</Col>
</Row>

<Row style={{paddingTop: "90px", paddingBottom: "40px"}}>
<Col style={{marginBottom: "10px"}}>

<a href="https://shielded-shore-35212.herokuapp.com/"><img src={event} />
</a>

<blockquote><p className="lead" style={{color:"black", paddingTop: "10px", marginBottom: "0px"}}><cite>Event Guider:</cite> Web Application to locate attractions by zip code taking place on the current day. The application utilizes data from Yelp's api and Eventbrite's api. A chat feature is implemented with websockets. </p></blockquote>
<a style={{padding: "20px"}}className="github-button" href="http://www.github.com/eliashantula/Event_guider" aria-label="GitHub">Github Repo</a>
</Col>
</Row>

<Row style={{paddingTop: "90px"}}>
<Col>
<a href="https://quiet-cove-41555.herokuapp.com"><img src={ukraine}/>
</a>
<p className="lead" style={{color:"black"}}><cite>Ukraine Travel Guide</cite></p>
</Col>
</Row>

</Fade>



</Container>
</Jumbotron>
</div>

	)






}




export default Images