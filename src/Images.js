import React from 'react'
import event from './event.png'
import ukraine from './ukraine.png'
import player from './rmplayer.png'
import backpack from './Backpack.png'
import { Parallax, Background } from 'react-parallax'

const Images = () =>{

return (


<div>

   

<div className="container-fluid" style ={{background: "-webkit-radial-gradient(center, ellipse cover, #383838 0%, #C3C8D6 91%, #C3C8D6 92%)", margin: "0px", border: "0px solid black", paddingTop: "40px", paddingBottom: "-10px"}}>
   
<h1 className="desc4" style={{color:"black", margin: "0px", paddingTop: "20px", paddingBottom: "20px"}}>Projects</h1>
<div className="row" style={{paddingBottom: "0px", margin: "0px", paddingTop: "40px"}}>
   
<div className="col-lg-6" style={{marginTop:"0px"}}>

<a href="https://appbackpack.herokuapp.com">
<img src={backpack} /></a>

 <blockquote><p className="desc1" style={{color:"black", paddingTop: "10px"}}><cite>Backpack:</cite> Web Application enabling user to store links in their private accounts either through the website or through a Chrome extension. The application utilizes React, Redux, passport authentication, and MongoDB.</p></blockquote>

<a style={{padding: "0px"}}class="github-button" href="http://www.github.com/eliashantula/Backpack" aria-label="GitHub">Github Repo</a>
</div>
<div className="col-lg-6" style={{marginTop: '0px'}}>

<a href="https://shielded-shore-35212.herokuapp.com/"><img src={event} />
</a>

<blockquote><p className="desc1" style={{color:"black", paddingTop: "10px"}}><cite>Event Guider:</cite> Web Application to locate attractions by zip code taking place on the current day. The application utilizes data from Yelp's api and Eventbrite's api. A chat feature is implemented with websockets. </p></blockquote>
<a style={{padding: "0px"}}class="github-button" href="http://www.github.com/eliashantula/Event_guider" aria-label="GitHub">Github Repo</a>
</div>


<div className="col-lg-6" style={{paddingTop: "10px"}}>
<a href="https://quiet-cove-41555.herokuapp.com"><img src={ukraine}/>
</a>
<p className="desc1" style={{color:"black"}}><cite>Ukraine Travel Guide</cite></p>

</div>
</div>

</div>

</div>



	)






}




export default Images