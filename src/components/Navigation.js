import React from 'react';
import { NavLink } from 'react-router-dom';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';

function Navigation() {
    return (
        <div>
            <div>
                <NavLink exact to="/">About</NavLink>
            </div>
            <div>
                <NavLink to="/projects">Projects</NavLink>
            </div>
            <div>
                <NavLink to="/contact">Contact</NavLink>
            </div>
        </div>
    )
}

export default Navigation
