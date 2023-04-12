import React from 'react';
import MemberCard from '../components/member-card';
import './about.css';
import Kevin from '../assets/Kevin.jpg';
import Ezzadin from '../assets/Ezzadin.jpeg';
import Sophya from '../assets/Sophya.jpg';
import Rosnel from '../assets/Rosnel.jpg'
import Hannah from '../assets/Hannah.JPG';

function About(props){
    return(
        <div className="About">
            <h1>Meet the Team!</h1>
            
            <div className='team-section'>
            <h2>Electrical Team</h2>
            <MemberCard name="Hannah" description="- worked on circuit design and schematics of the blaster model" major="Intended Major: Electrical Engineering" png={Hannah}/>
            <MemberCard name="Rosnel Leyva" description="- worked on circuit design and schematics of the blaster model"  major="Intended: Electrical Engineering B.S." png={Rosnel}/>
            </div>
            
            <div className='team-section'>
            <h2>Mechanical Team</h2>
            <MemberCard name="Sophya Elkihel" description="- researched and sampled different architecture for the blaster design" major="Intended Major: Mechanical Engineering" png={Sophya}/>
            <MemberCard name="Ezzadin Aldaylam" description="- designed and developed the blaster's design into production" major="Intended Major: Mechanical Engineering" png={Ezzadin}/>
            </div>
            
            <div className='team-section'>
            <h2>Software Team</h2>
            <MemberCard name="Evelio Velez" description="- designed, tested, and developed software for the blasters" major="Intended Major: Computer Science" png={Rosnel}/>
            <MemberCard name="Kevin Arista" description="- designed UX/UI, developed application for LazzarX using MERNstack" major="Intended Major: Computer Science" png={Kevin}/>
            </div>
        </div>
    );
}

export default About;