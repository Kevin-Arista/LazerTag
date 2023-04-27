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
			<h1 className="team">Software Team</h1>
			<hr />

			<div className="team-section">
				<MemberCard
					name="Evelio Velez"
					description="designed, tested, and developed software for the blasters &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;"
					major="Intended Major: Computer Science"
					png={Evelio}
					linkedin="//linkedin.com"
					github="//https://youtu.be/MP8n0kysdkA"
					displayable1="no"
				/>
				<MemberCard
					name="Kevin Arista"
					description="UX/UI, developed application for LazzarX using MERNstack"
					major="Intended Major: Computer Science"
					png={Kevin}
					linkedin="https://www.linkedin.com/in/kevin-arista/"
					github="https://github.com/Kevin-Arista"
				/>
			</div>
			<h1 className="team">Electrical Team</h1>
			<hr />

			<div className="team-section">
				<MemberCard
					name="Hannah Chen"
					description="worked on circuit design and schematics of the blaster model"
					major="Intended Major: Electrical Engineering"
					png={Hannah}
					linkedin="//linkedin.com/in/hannahchen-"
					github="//github.com"
					displayable2="no"
				/>
				<MemberCard
					name="Rosnel Leyva"
					description="worked on circuit design and schematics of the blaster model"
					major="Intended: Electrical Engineering B.S."
					png={Rosnel}
					linkedin="//linkedin.com/in/rosnel-leyva-cortes-926608200"
					github="//github.com/Rosnel14"
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
					linkedin="//linkedin.com/in/sophya-elkihel-3009851a2"
					github="//github.com"
					displayable2="no"
				/>
				<MemberCard
					name="Ezzaddin Aldaylam "
					description="designed and developed the blaster's design into production"
					major="Intended Major: Mechanical Engineering"
					png={Ezzadin}
					linkedin="//linkedin.com/in/ezzaddin-aldaylam-4472981b1"
					github="//github.com"
					displayable2="no"
					special="ezzy"
				/>
			</div>
		</div>
	);
}

export default Contact;
