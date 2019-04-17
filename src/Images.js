import React from "react";
import event from "./event.png";
import ukraine from "./ukraine.png";
import sales from "./sales.png";
import backpack from "./Backpack.png";
import { Parallax, Background } from "react-parallax";
import Reveal from "react-reveal/Reveal";
import { Container, div, Col, Jumbotron } from "reactstrap";
import Fade from "react-reveal/Fade";
const Images = () => {
	return (
		<div
			className="projects"
			style={{
				background:
					"-webkit-radial-gradient(ellipse, red 0%, orange 100%)",
				margin: "0px",
				width: "100%"

			}}
		>
			<h1
				className="display-3 projectheader"
				style={{
					color: "black",
					margin: "0px",
					paddingTop: "50px",
					paddingBottom: "50px"
				}}
			>
				Projects
			</h1>
			<Fade top>
		
				<div
					style={{
						marginTop: "0px",
						
					}}
					className="projects4"
				>
					<a href="https://smartsaleseating.herokuapp.com" className="homepageImage">
						<img  src={sales} />
					</a>

					<blockquote className="description">
						<p
							className="lead"
							style={{
								color: "black",
								paddingTop: "5px",
								paddingBottom: "5px"
							}}
						>
							<cite>Sales-Finder:</cite> Web application enabling
							user to generate economical shopping lists based on
							local sale items and search recipes utilizing the
							items on sale. The user can add additional items
							based on recipe ingredients. The app utilizes React,
							Redux and api-data from Spoonacular. Upcoming
							version of the app will incorporate geographically
							sourced sales data.
						</p>
					</blockquote>

					<a
						style={{ paddingTop: "0px" }}
						className="github-button"
						href="https://github.com/eliashantula/Sales-Finder"
						aria-label="GitHub"
					>
						Github Repo
					</a>
				
			</div>

		
				<div
					style={{
						marginTop: "0px"
					}}
					className="projects4"
				>
					<a href="https://appbackpack.herokuapp.com" className="homepageImage">
						<img src={backpack} />
					</a>

					<blockquote className="description">
						<p
							className="lead description"
							style={{
								color: "black",
								paddingTop: "5px",
								paddingBottom: "5px"
							}}
						>
							<cite>Backpack:</cite> Web application enabling user
							to store links in their private accounts either
							through the website or through a Chrome extension.
							The application utilizes React, Redux, passport
							authentication, and MongoDB.
						</p>
					</blockquote>

					<a 
						style={{ paddingTop: "0px" }}
						className="github-button"
						href="http://www.github.com/eliashantula/Backpack"
						aria-label="GitHub"
					>
						Github Repo
					</a>
				
			</div>

		
				<div style={{ marginBottom: "10px" }} className="projects4">
					<a href="https://shielded-shore-35212.herokuapp.com/">
						<img src={event} />
					</a>

					<blockquote className="description">
						<p
							className="lead"
							style={{
								color: "black",
								paddingTop: "10px",
								marginBottom: "0px"
							}}
						>
							<cite>Event Guider:</cite> Web application to locate
							attractions by zip code taking place on the current
							day. The application utilizes data from Yelp's api
							and Eventbrite's api. A chat feature is implemented
							with websockets.{" "}
						</p>
					</blockquote>
					<a
						style={{ padding: "20px" }}
						className="github-button"
						href="http://www.github.com/eliashantula/Event_guider"
						aria-label="GitHub"
					>
						Github Repo
					</a>
			
			</div>


				<div className="projects4">
					<a href="https://quiet-cove-41555.herokuapp.com">
						<img src={ukraine} />
					</a>
					<p
						className="lead description"
						style={{
							color: "black",
							paddingTop: "10px",
							marginBottom: "0px"
						}}
					>
						<cite>Ukraine Travel Guide: </cite>
						Website hilighting interesting important attractions to
						see in Kyiv.{" "}
					</p>
				</div>
		</Fade>
		</div>
	);
};

export default Images;
