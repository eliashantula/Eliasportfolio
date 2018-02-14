import React from 'react'
import event from './event.png'
import ukraine from './ukraine.png'
import player from './rmplayer.png'
import backpack from './Backpack.png'


const Images = () =>{

return (

<div className="container-fluid">
<div className="row">
<div className="col-md-6">
<a href="https://appbackpack.herokuapp.com">
<img src={backpack} /></a>

<p className="desc1">Backpack: Save all of your favorite articles, links, videos and sounds in one place!</p>
</div>
<div className="col-md-6">
<a href="https://shielded-shore-35212.herokuapp.com/"><img src={event} />
</a>
<p className="desc1">Event Guider: Find local restaurants and events for today!</p>
</div>
<div className="col-md-6">
<a href="https://quiet-cove-41555.herokuapp.com"><img src={ukraine} />
</a>
<p className="desc1">Ukraine Travel Guide</p>

</div>
<div className="col-md-6 mPlayer">
<a href="https://blooming-cliffs-48752.herokuapp.com">
<img src={player} /></a>

<p className="desc1">Music Player</p>
</div>



</div>
</div>




	)






}




export default Images