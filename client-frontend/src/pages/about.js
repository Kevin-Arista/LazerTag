import React from "react";
import "./about.css";

function About(props) {
	return (
		<div className="About">
			<section className="section">
				<h1 className="heading">What is LazzarX?</h1>
				<hr />
				<p>
					LazzarX is a project for Using a few 5mW lasers, along with custom
					designed circuits and parts, we have made the most convoluted cat
					distraction device in the world{" "}
				</p>
			</section>

			<section className="section">
				<h1 className="heading">How does it work?</h1>
				<hr />
				<p>LazzarX is a project for </p>
			</section>

			<section className="section">
				<h1 className="heading">What tools does it use?</h1>
				<hr />
				<p>
					The actual specs are just 2 5mW lasers, a few micro controllers, photo
					transistors, and a lot of time to make it all come together. It
					would've been enough to just build one, but through our superb
					planning and expertise, ventured to encapsulate the true multi player
					experience of laser tag.{" "}
				</p>
			</section>

			<section className="section">
				<h1 className="heading">Where was it made?</h1>
				<hr />
				<p>LazzarX is a project for </p>
			</section>
		</div>
	);
}

export default About;
