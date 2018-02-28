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
<div className="row" style={{paddingBottom: "0", margin: "0px", paddingTop: "40px"}}>
   
<div className="col-lg-6" style={{marginTop:"0px"}}>

<a href="https://appbackpack.herokuapp.com">
<img src={backpack} /></a>

<p align="center" className="desc1" style={{color:"black", marginTop: "20px"}}>Backpack: Web Application enabling user to store links in their private accounts either through<br/> the website or through a Chrome extension. The application utilizes React, Redux, passport authentication, and MongoDB. <br/>   </p>
</div>
<div className="col-lg-6">
<a href="https://shielded-shore-35212.herokuapp.com/"><img src={event} />
</a>
<p align="center" className="desc1" style={{color:"black", marginTop: "20px"}}>Event Guider: Web Application to locate attractions by zip code taking place on the current day. <br/>The application utilizes data from Yelp's api and Eventbrite's api. A chat feature is implemented with websockets. </p>
</div>

<div className="col-lg-6 mPlayer">
<a href="https://blooming-cliffs-48752.herokuapp.com">
<img src={player} /></a>

<p className="desc1" style={{color:"black"}}>Music Player</p>
</div>
<div className="col-lg-6">
<a href="https://quiet-cove-41555.herokuapp.com"><img src={ukraine}/>
</a>
<p className="desc1" style={{color:"black"}}>Ukraine Travel Guide</p>

</div>
</div>

</div>

</div>



	)






}




export default Images