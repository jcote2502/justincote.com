import React from "react";
import '../App.css';
import './CSS/Contact.css';
import ContactInfo from "../Data/Contact";
import linkedIn from '../Assets/Images/icons/linkedIn.png';
import github from '../Assets/Images/icons/github.png';
import instagram from '../Assets/Images/icons/instagram.png';

// AUTHOR : JUSTIN COTE


const Contact = () => {

    const socialContact = (tag, link, image) => {
        return (
            <div className="social-row">
                <img src={image} alt="icon" className="social-image" />
                <div className="social-wrapper">
                    <div className="social-item">
                        @{tag}
                    </div>
                    {
                        link !== ''?
                        <div className="social-item">
                            <a href={link} rel="noreferrer" target='_blank'className="social-link">
                                Click To Visit
                            </a>
                        </div>
                        :null
                    }
                </div>

            </div>
        )
    }
    return (
        <div className="scaffold">
            <div className="container">
                <div className="contact-item">{ContactInfo.email}</div>
                <div className="contact-item">{ContactInfo.phone}</div>
                <div className="contact-item">{ContactInfo.location}</div>
                
                {socialContact(ContactInfo.linkedIn,
                    ContactInfo.linkedInLink,
                    linkedIn
                )}
                {socialContact(ContactInfo.github,
                    ContactInfo.githubLink,
                    github
                )}
                {socialContact(ContactInfo.instagram,
                    '',
                    instagram
                )}
            </div>
        </div>
    );
}

export default Contact;