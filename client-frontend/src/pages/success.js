import React from "react";
import "./success.css";
import { reservationNum } from "./reservations";
function Success(props) {
	return (
		<div className="success">
			<section className="greeting">
				<h3>Reservation Number:</h3>
				<h1 id="resNum">{reservationNum}</h1>
				<div className="message">
					<p>Hello soldier, you will receive a text message when your up!</p>
					<p>Due to a high volume of reservations</p>
					<p> you will have up to 5 minutes to claim your spot!</p>
					<p>Just show us your reservation number!</p>
					<h4 className="warning">DO NOT RELOAD THIS PAGE</h4>
					<p>Screenshot this page or something!</p>
				</div>
			</section>
		</div>
	);
}

export default Success;
