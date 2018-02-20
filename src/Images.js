import React from 'react'
import event from './event.png'
import ukraine from './ukraine.png'
import player from './rmplayer.png'
import backpack from './Backpack.png'
import { Parallax, Background } from 'react-parallax'

const Images = () =>{

return (


<div>
   <Parallax
      blur={3}
      bgImage={require('./code.jpg')}
     
      strength={600}
    >   
      <div style={{ height: '500px' }} />
  </Parallax>
<div className="container-fluid" style={{backgroundColor: "white"}}>
   

<div className="row">
   <h1 className="desc4" style={{color:"black"}}>Projects</h1>
<div className="col-md-6">

<a href="https://appbackpack.herokuapp.com">
<img src={backpack} /></a>

<p className="desc1" style={{color:"black"}}>Backpack: Save all of your favorite articles, links and videos!</p>
</div>
<div className="col-md-6">
<a href="https://shielded-shore-35212.herokuapp.com/"><img src={event} />
</a>
<p className="desc1" style={{color:"black"}}>Event Guider: Find local restaurants and events for today!</p>
</div>
<div className="col-md-6">
<a href="https://quiet-cove-41555.herokuapp.com"><img src={ukraine} />
</a>
<p className="desc1" style={{color:"black"}}>Ukraine Travel Guide</p>

</div>
<div className="col-md-6 mPlayer">
<a href="https://blooming-cliffs-48752.herokuapp.com">
<img src={player} /></a>

<p className="desc1" style={{color:"black"}}>Music Player</p>
</div>



</div>
</div>

</div>


	)






}




export default Images