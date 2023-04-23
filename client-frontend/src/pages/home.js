import React from "react";
import "./page-theme.css";
import "./home.css";

function Home(props) {
	return (
		<div className="Home">
			<h1 id="hero-text">LazzarX</h1>
			<p>Present By</p>
			<h3>
				<span className="warning">The</span> Manhattan Project
			</h3>

			<div className="filler"></div>

			<iframe
				src="https://myhub.autodesk360.com/ue2cef0c7/shares/public/SH512d4QTec90decfa6ea388d3703f71b0c3?mode=embed"
				width="75%"
				height="764"
				allowfullscreen="true"
				webkitallowfullscreen="true"
				mozallowfullscreen="true"
				frameborder="0"></iframe>
		</div>
	);
}

export default Home;
