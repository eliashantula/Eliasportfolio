import React, { Component } from "react";
import Mailto from "react-protected-mailto";
import { Parallax, Background } from "react-parallax";
import Scales from "./scale.png";
import Javascript from "./UIHere.png";
import HTML from "./htmls.png";
import CSS from "./csss.svg";
import PSQL from "./post.png";
import REACT from "./react.png";
import MONGTO from "./mongob.png";
import REL from "./relativity.png";
import Reveal from "react-reveal/Reveal";
import Redux from './redux.png'
import { Container, Row, Col, Jumbotron } from "reactstrap";
import Fade from "react-reveal/Fade";
const Skills = () => {
	return (
		<div
			className="container2"
			style={{
				background:
					"-webkit-radial-gradient( cover, white 0%, white 100%)",
				marginTop: "0px"
			}}
		>
			<div className="alter skills">
				<h1
					className="display-3"
					style={{
						color: "black",
						margin: "0px",
						paddingTop: "50px",
						paddingBottom: "50px",
						fontWeight: 900

					}}
				>
					Skills
				</h1>
			</div>
			<Fade top>
			<div className="icons">
				<div className="icon">
					<img src={CSS} style={{ width: "30%", marginTop: "0px" }} />
				</div>
				<div className="icon">
					<img src={Javascript} style={{ width: "100%" }} />
				</div>

				<div className="icon">
					<img src={HTML} style={{ width: "50%", padding: "0px" }} />
				</div>
				<div className="icon">
					<img
						src={REACT}
						style={{
							width: "50%",
							paddingTop: "0px",
							marginBottom: "0px"
						}}
					/>
				</div>
				<div className="icon">
					<img
						src={Redux}
						style={{
							width: "50%",
							paddingTop: "0px",
							marginBottom: "0px"
						}}
					/>
				</div>
				<div className="icon">
					<img src={MONGTO} />
				</div>
				<div className="icon">
					<img
						src={REL}
						style={{ paddingTop: "40px", width: "80%" }}
					/>
				</div>
				<div className="icon">
					<img src={PSQL} />
				</div>

				<div className="icon">
					<img src={Scales} style={{ width: "80%" }} />
				</div>
				</div>
			</Fade>
		</div>
	);
};

export default Skills;
