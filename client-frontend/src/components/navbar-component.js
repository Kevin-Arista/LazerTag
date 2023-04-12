import React from 'react';
import './navbar-component.css';
import {Link} from 'react-router-dom';

function NavComponent(props){
    return(
        <div className="NavComponent">
            <ul>
                <li>
                    <Link to="/">LazzarX</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/reservations">Reservations</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
}

export default NavComponent;