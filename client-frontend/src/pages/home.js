import React from "react";
import "./page-theme.css";
import "./home.css";
import genbodymeeting from "../assets/genbodymeeting.png";

function Home(props) {
	return (
		<div className="Home">
			<h1 id="hero-text">LazzarX</h1>
			<p>By</p>
			<h3>
				<span className="warning">The</span> Manhattan Project 2.0
			</h3>

			<div className="filler"></div>

			<div className="section show1">
				<section>
					<h1 className="heading">What is LazzarX?</h1>
					<hr />
					<p>
						LazzarX is a top-secret project that has been developed exclusively
						for AoE students! Using a few lasers, along with custom designed
						circuits and parts, we have made our fun and interactive version of
						Laser Tag!... or the most convoluted cat distraction device in the
						world!
					</p>
				</section>
			</div>

			<div className="section show2">
				<section>
					<h1 className="heading">What tools does it use?</h1>
					<hr />
					<p>
						5mW lasers, a few micro controllers, photo transistors, and a lot of
						time to make it all come together. It would've been enough to just
						build one, but through our super-awsome-fantastic planning and
						expertise, our team ventured to encapsulate the true multi player
						experience of laser tag!
					</p>
				</section>
			</div>

			<div className="section show3">
				<section>
					<h1 className="heading">Where was it made?</h1>
					<hr />
					<p>
						LazzarX was brainstormed throughout Columbia's beatiful morningside
						campus. From Furnald, to John Jay, to Wallach, to Carman Hall--
						every hall has bits and pieces of historic "a-ha" moments. Assembled
						in the one and only Makerspace!
					</p>
				</section>
			</div>

			<img id="mudd" src={genbodymeeting} alt="mudd building"></img>
		</div>
	);
}

export default Home;
