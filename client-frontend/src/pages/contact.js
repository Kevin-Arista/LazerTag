import React from "react";
import MemberCard from "../components/member-card";
import "./contact.css";
import Kevin from "../assets/Kevin.jpg";
import Evelio from "../assets/Evelio.jpeg";
import Ezzadin from "../assets/Ezzadin.jpeg";
import Sophya from "../assets/Sophya.jpg";
import Rosnel from "../assets/Rosnel.jpg";
import Hannah from "../assets/Hannah.JPG";

function Contact(props) {
	return (
		<div className="Contact">
			<h1 className="team">Electrical Team</h1>
			<hr />

			<div className="team-section">
				<MemberCard
					name="Hannah"
					description="worked on circuit design and schematics of the blaster model"
					major="Intended Major: Electrical Engineering"
					png={Hannah}
				/>
				<MemberCard
					name="Rosnel Leyva"
					description="worked on circuit design and schematics of the blaster model"
					major="Intended: Electrical Engineering B.S."
					png={Rosnel}
				/>
			</div>

			<h1 className="team">Mechanical Team</h1>
			<hr />

			<div className="team-section">
				<MemberCard
					name="Sophya Elkihel"
					description="researched and sampled different architecture for the blaster design"
					major="Intended Major: Mechanical Engineering"
					png={Sophya}
				/>
				<MemberCard
					id="ezzy"
					name="Ezzy Aldaylam"
					description="designed and developed the blaster's design into production"
					major="Intended Major: Mechanical Engineering"
					png={Ezzadin}
				/>
			</div>

			<h1 className="team">Software Team</h1>
			<hr />

			<div className="team-section">
				<MemberCard
					name="Evelio Velez"
					description="designed, tested, and developed software for the blasters"
					major="Intended Major: Computer Science"
					png={Evelio}
				/>
				<MemberCard
					name="Kevin Arista"
					description="UX/UI, developed application for LazzarX using MERNstack"
					major="Intended Major: Computer Science"
					png={Kevin}
				/>
			</div>
		</div>
	);
}

export default Contact;
