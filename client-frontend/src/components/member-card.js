import React from "react";
import "./member-card.css";
import linkedin from "../assets/linkedin.png";
import github from "../assets/github.png";
import { Link } from "react-router-dom";

function MemberCard(props) {
	return (
		<div className="MemberCard">
			<h1>{props.name}</h1>
			<img className="prof-pic" src={props.png} alt="profile picture" />
			<p>{props.description}</p>
			<a href={props.linkedin} target="_blank">
				<img
					className={props.displayable1}
					id="linkedin"
					src={linkedin}
					alt="linkedin"></img>
			</a>
			<a href={props.github} target="_blank">
				<img
					className={props.displayable2}
					id="github"
					src={github}
					alt="github"></img>
			</a>
		</div>
	);
}

export default MemberCard;
