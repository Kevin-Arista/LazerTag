import React, { useState } from "react";
import axios from "axios";
import uniqid from "uniqid";
import "./reservations.css";
import { useNavigate } from "react-router-dom";

// const alphabet = ["a", "A", "b", "B", "c", "C", "d", "D", "e", "E", "f", "F", "g", "G", "h", "H", "i", "I", "j", "J", "k", "K", "l", "L", "m", "M", "n", "N", "o", "O", "p", "P", "q", "Q", "r", "R", "s", "S", "t", "T", "u", "U", "v", "V", "w", "W", "x", "X", "y", "Y", "z", "Z"];
const numbers = [
	"0",
	"1",
	"2",
	"3",
	"4",
	"5",
	"6",
	"7",
	"8",
	"9",
	"-",
	"(",
	")",
	"+",
];
const randumb = uniqid("LAZZAR-");
export const reservationNum = randumb;

function Reservations(props) {
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		fname: "",
		lname: "",
		partysize: "",
		countrycode: "",
		phonenumber: "",
		resnum: randumb,
	});

	const handleSubmit = (e) => {
		let unfilteredCode = formData.countrycode;
		let filteredCode = "";
		for (let i = 0; i < unfilteredCode.length; i++) {
			if (numbers.includes(unfilteredCode[i])) {
				filteredCode += unfilteredCode[i];
			}
		}
		let unfilteredPhone = formData.phonenumber;
		let filteredPhone = "";
		for (let i = 0; i < unfilteredPhone.length; i++) {
			if (numbers.includes(unfilteredPhone[i])) {
				filteredPhone += unfilteredPhone[i];
			}
		}
		console.log("code: " + unfilteredCode + "\n filtered: " + filteredCode);
		console.log("phone: " + unfilteredPhone + "\n filtered: " + filteredPhone);

		if (
			formData.fname == "" ||
			formData.lname == "" ||
			formData.partysize == "" ||
			formData.countrycode == "" ||
			formData.phonenumber == ""
		) {
			e.preventDefault();
			alert("Please Complete The Form!");
		} else if (parseInt(formData.partysize) > 2) {
			e.preventDefault();
			alert("PartySize is too BIG!");
		} else if (filteredCode != unfilteredCode) {
			e.preventDefault();
			alert("Invalid CountryCode!");
		} else if (filteredPhone != unfilteredPhone || filteredPhone.length > 13) {
			e.preventDefault();
			alert("Invalid PhoneNumber!");
		} else {
			e.preventDefault();
			axios
				.post("https://lazzarx-server.onrender.com/appointments/post", formData)
				.then((res) => {
					console.log(res.status, res.data);
				});
			setFormData({
				fname: "",
				lname: "",
				partysize: "",
				countrycode: "",
				phonenumber: "",
			});
			navigate("/success");
		}
	};

	return (
		<div className="Reservations">
			<h1 id="header">Reservation</h1>

			<form onSubmit={handleSubmit}>
				<h3>First Name</h3>
				<input
					onChange={(e) => setFormData({ ...formData, fname: e.target.value })}
					value={formData.fname}
					type="text"
					name="fname"
					id="fname"
				/>
				<br />
				<h3>Last Name</h3>
				<input
					onChange={(e) => setFormData({ ...formData, lname: e.target.value })}
					value={formData.lname}
					type="text"
					name="lname"
					id="lname"
				/>
				<br />
				<h3>Party Size</h3>
				<label>2 members max</label>
				<input
					onChange={(e) =>
						setFormData({ ...formData, partysize: e.target.value })
					}
					value={formData.partysize}
					type="text"
					name="partysize"
					id="partysize"
				/>
				<br />
				<h3>Country Code</h3>
				<input
					onChange={(e) =>
						setFormData({ ...formData, countrycode: e.target.value })
					}
					value={formData.countrycode}
					type="text"
					name="countrycode"
					id="countrycode"
				/>
				<br />
				<h3>Phone Number</h3>
				<input
					onChange={(e) =>
						setFormData({ ...formData, phonenumber: e.target.value })
					}
					value={formData.phonenumber}
					type="text"
					name="phonenumber"
					id="phonenumber"
				/>
				<br />
				<input id="button" type="submit" value="Submit" />
			</form>
		</div>
	);
}

export default Reservations;
