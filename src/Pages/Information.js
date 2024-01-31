import React from "react";
import '../App.css';
import './CSS/Info.css';
import Personality from '../Assets/Images/Downloads/Personality.png';
import Resume from '../Assets/Images/Downloads/Resume.png';
import Transcript from '../Assets/Images/Downloads/Transcript.png';
import { Outlet, useNavigate } from "react-router-dom";
import { Footer } from "../Components/Layouts";

var currentURL = '';
var currentFile = '';
// AUTHOR : JUSTIN COTE

const Information = () => {
    return (
        <div className="scaffold">
            <Outlet />
            <Footer/>
        </div>
    );
}



const SelectFile = () => {
    const resumeURL = `${process.env.PUBLIC_URL}/Assets/COTE_RESUME.pdf`;
    const transcriptURL = `${process.env.PUBLIC_URL}/Assets/Cote_Justin-Transcript.pdf`;
    const personalityURL = `${process.env.PUBLIC_URL}/Assets/myPersonalityReport.pdf`;
    const navigate = useNavigate();
    const handleClick = (URL, file) => {
        currentURL = URL;
        currentFile = file;
        navigate('/downloads/viewfile');
    }

    const ImageWithOverlay = ({ imagePath, altText, onClick , date}) => {
        return (
            <div className="image-container" onClick={() => onClick()}>
                <img src={imagePath} alt={altText} />
                <div className="image-overlay">
                    <div>{altText}</div>
                    <div style={{fontSize:'18px'}}>Last Updated : {date}</div>
                </div>
            </div>
        )};

    return (
        <div className="docs-container">
            <ImageWithOverlay imagePath={Resume} altText="Resume" date='01/28/2024' onClick={()=>handleClick(resumeURL, 'Resume')} />
            <ImageWithOverlay imagePath={Transcript} altText="Transcript" date='01/01/2024' onClick={() => handleClick(transcriptURL, 'Transcript')} />
            <ImageWithOverlay imagePath={Personality} altText="Personality Report" date='08/28/2022' onClick={() => handleClick(personalityURL, 'Personality Report')} />
        </div>
    );
}

const ViewFile = () => {
    console.log(currentURL);
    const window_width = window.innerWidth;
    
    return (
        <>
            <div style={{ margin: '35px' }}>Download View</div>
            {window_width<=600 ? <div className='download-button' onClick={()=>{}}>Download {currentFile}</div> : null }
            <iframe title='PDFVIEW' src={currentURL} width='80%' height='70%'></iframe>
        </>
    );
}

export {Information, SelectFile, ViewFile};