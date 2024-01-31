import React from "react";
import experience from "../Data/Experience";
import '../App.css';
import './CSS/Experience.css';
import { Footer } from "../Components/Layouts";

// AUTHOR : JUSTIN COTE

const Experience = () => {
    const leftP = '(';
    const rightP = ')';
    return (
        // job 1 
        <div className="scaffold">

            {/* MDI */}
            <div className="EXPR-container">
                {/* image 1 */}
                <div className="EXPR-img-col">
                    <img src={experience.MDI().icon1} alt="logo" className="EXPR-img" />
                    <img src={experience.MDI().icon2} alt="logo" className="EXPR-img" />
                </div>
                {/* column of data */}
                <div className="EXPR-data-col">
                    <div className="EXPR-title">{experience.MDI().company}</div>
                    <div className="EXPR-position">{experience.MDI().position}</div>
                    <div className="EXPR-location">{experience.MDI().location}</div>
                    <div className="EXPR-longevity">Duration : {experience.MDI().duration} {leftP} {experience.MDI().start} - {experience.MDI().end} {rightP}</div>
                    <div className="EXPR-description">{experience.MDI().description}</div>
                    <div className="EXPR-tags">Tags: &nbsp;{experience.MDI().tags.join(', ')}</div>
                </div>
            </div>

            {/* Research */}
            <div className="EXPR-container">
                <div className="EXPR-img-col">
                    <img src={experience.RESEARCH().icon1} alt="logo" className="EXPR-img" />
                </div>
                {/* column of data */}
                <div className="EXPR-data-col">
                    <div className="EXPR-title">{experience.RESEARCH().company}</div>
                    <div className="EXPR-position">{experience.RESEARCH().position}</div>
                    <div className="EXPR-location">{experience.RESEARCH().location}</div>
                    <div className="EXPR-longevity">Duration : {experience.RESEARCH().duration} {leftP} {experience.RESEARCH().start} - {experience.RESEARCH().end} {rightP}</div>
                    <div className="EXPR-description">{experience.RESEARCH().description}</div>
                    <div className="EXPR-tags">Tags: &nbsp;{experience.RESEARCH().tags.join(', ')}</div>
                </div>
            </div>

            {/* iCode */}
            <div className="EXPR-container">
                <div className="EXPR-img-col">
                    <img src={experience.ICODE().icon1} alt="logo" className="EXPR-img" />
                </div>
                {/* column of data */}
                <div className="EXPR-data-col">
                    <div className="EXPR-title">{experience.ICODE().company}</div>
                    <div className="EXPR-position">{experience.ICODE().position}</div>
                    <div className="EXPR-location">{experience.ICODE().location}</div>
                    <div className="EXPR-longevity">Duration : {experience.ICODE().duration} {leftP} {experience.ICODE().start} - {experience.ICODE().end} {rightP}</div>
                    <div className="EXPR-description">{experience.ICODE().description}</div>
                    <div className="EXPR-tags">Tags: &nbsp;{experience.ICODE().tags.join(', ')}</div>
                </div>
            </div>

            {/* StateFarm */}
            <div className="EXPR-container">
            <div className="EXPR-img-col">
                    <img src={experience.STATEFARM().icon1} alt="logo" className="EXPR-img" />
                </div>
                {/* column of data */}
                <div className="EXPR-data-col">
                    <div className="EXPR-title">{experience.STATEFARM().company}</div>
                    <div className="EXPR-position">{experience.STATEFARM().position}</div>
                    <div className="EXPR-location">{experience.STATEFARM().location}</div>
                    <div className="EXPR-longevity">Duration : {experience.STATEFARM().duration} {leftP} {experience.STATEFARM().start} - {experience.STATEFARM().end} {rightP}</div>
                    <div className="EXPR-description">{experience.STATEFARM().description}</div>
                    <div className="EXPR-tags">Tags: &nbsp;{experience.STATEFARM().tags.join(', ')}</div>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Experience;