import React from 'react';
import './member-card.css';

function MemberCard(props){
    return(
        <div className="MemberCard">
            <h1>{props.name}</h1>
            <img src={props.png} alt="profile picture"/>
            <p>{props.description}</p>
        </div>
    );
}

export default MemberCard;