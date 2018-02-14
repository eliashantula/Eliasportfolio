import React, { Component } from "react";

const Section = ({id, child}) => (
	<section id={id}>
		<a name={id}> </a>
		<h1 className="desc3">{id}</h1>
    <div className="container">
    {child}
    </div>
	</section>
);

export default Section;
