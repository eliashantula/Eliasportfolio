import React, { Component } from "react";
import { Parallax, Background } from 'react-parallax'
const Section = ({id, child}) => (
	<section id={id}>
	    
		<a name={id}> </a>
	
		
		
		
   
   
    
    {child}

 
 
	</section>
);

export default Section;
