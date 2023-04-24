import React from "react";
import "./about.css";
import testing from "../assets/testing.png";
import soldering from "../assets/soldering.png";
import detailing from "../assets/detailing.png";
import assembling from "../assets/assembling.png";
import designing from "../assets/designing.png";
import prototyping from "../assets/prototyping.png";

function About(props) {
	return (
		<div className="About">
			<section className="section">
				<h1 className="heading">What is this for?</h1>
				<hr />
				<p>
					This project was developed by our team to fullfill our Common Project
					in
					<a id="columbia" href="//columbia.edu" target="_blank">
						Columbia University
					</a>
					famous Art of Engineering course. What initially started as a simple
					sketch, eventually came to production.
				</p>
			</section>

			<section className="desc-modeling">
				<h1 className="heading">3-D Modeling</h1>
				<hr />
				<p>
					Feel free to interact to learn more about the strucuture and
					schematics for our blasters!
				</p>
			</section>

			<iframe
				src="https://myhub.autodesk360.com/ue2cef0c7/shares/public/SH512d4QTec90decfa6ea388d3703f71b0c3?mode=embed"
				width="60%"
				height="764"
				allowfullscreen="true"
				webkitallowfullscreen="true"
				mozallowfullscreen="true"
				frameborder="0"></iframe>

			<div className="filler"></div>

			<section className="desc-modeling">
				<h1 className="heading">Testing</h1>
				<hr />
				<br />
				<img className="camera-pic" src={testing} alt="soldering"></img>
			</section>

			<section className="desc-modeling">
				<h1 className="heading">Soldering</h1>
				<hr />
				<br />
				<img className="camera-pic" src={soldering} alt="soldering"></img>
			</section>

			<section className="desc-modeling">
				<h1 className="heading">Detailing</h1>
				<hr />
				<br />
				<img className="camera-pic" src={detailing} alt="soldering"></img>
			</section>

			<section className="desc-modeling">
				<h1 className="heading">Assembling</h1>
				<hr />
				<br />
				<img className="camera-pic" src={assembling} alt="soldering"></img>
			</section>

			<section className="desc-modeling">
				<h1 className="heading">Designing</h1>
				<hr />
				<br />
				<img className="camera-pic" src={designing} alt="soldering"></img>
			</section>

			<section className="desc-modeling">
				<h1 className="heading">Prototyping</h1>
				<hr />
				<br />
				<img className="camera-pic" src={prototyping} alt="soldering"></img>
			</section>
		</div>
	);
}

export default About;
