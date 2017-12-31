import React from 'react'
import event from './event.png'
import ukraine from './ukraine.png'
import player from './rmplayer.png'

const Images = () =>{

return (

<div className="container-fluid">
<div className="row">
<div className="col-md-4">
<a href="https://shielded-shore-35212.herokuapp.com/"><img src={event} />
</a>
<p>Local Event Guide</p>
</div>
<div className="col-md-4">
<a href="https://quiet-cove-41555.herokuapp.com"><img src={ukraine} />
</a>
<p>Ukraine Travel Guide</p>

</div>
<div className="col-md-4">
<a href="https://blooming-cliffs-48752.herokuapp.com">
<img src={player} /></a>

<p>Music Player</p>
</div>



</div>
</div>




	)






}




export default Images