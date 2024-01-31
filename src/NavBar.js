import React from "react";
import './navbar.css';
import { useLocation, useNavigate } from "react-router-dom";

// AUTHOR : JUSTIN COTE

const NavBar = () => {
    const buttonProps = {
        home: {
            path: '/home', text: 'Home'
        },
        experience: {
            path: '/experience', text: 'Experience'
        },
        projects: {
            path: '/projects', text: 'Projects'
        },
        information: {
            path: '/downloads/selectfile', text: 'Download Files'
        },
        contact: {
            path: '/contact', text: 'Contact'
        },
        about: {
            path: '/about', text: 'About Me'
        }
    }
    return (
        // flex row + fixed position 
        <div className="navbar-container">
            {/* Image here maybe ? idk */}
            <div className="title">JustinCote.COM</div>
            <div className="button-container">
                <NavButton details={buttonProps.home} />
                <NavButton details={buttonProps.experience} />
                <NavButton details={buttonProps.projects} />
                <NavButton details={buttonProps.information} />
                <NavButton details={buttonProps.contact} />
                <NavButton details={buttonProps.about} />
            </div>
        </div>
    );
}

const NavButton = (props) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { path, text } = props.details;
    const goTo = () => {
        navigate(path)
    }
    return (
        <div className={`nav-button ${location.pathname === path ? 'active' : ''}`} onClick={() => goTo()}>
            {text}
        </div>
    );
}


export default NavBar;