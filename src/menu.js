import React, { Component } from "react";
import faker from 'faker';

const menuItems = Array(20).map(=> {
	return {name: faker.food.dish, description: faker.lorem.sentence, price: faker.commerce.price}

})


const Menuitem = ({menuItem}) => {
return <div className="menuItem">
<h4>{menuItem.name}</h4>
<p>{menuItem.description}</p>
<h5>{menuItem.price}</h5>
</div>
}

class Menu extends Component {
	  render(){
	  <div id="menu">
	  
	  </div>


	  }	

} 

export default Menu