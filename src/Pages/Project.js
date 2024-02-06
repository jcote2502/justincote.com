import '../App.css';
import './CSS/Project.css';
import React, { useEffect, useState } from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Footer } from '../Components/Layouts';
import { useParams } from 'react-router-dom';
import project from '../Data/Projects';
// var project = {};

// const setProject = (val) => {
//     project = val;
// }

const Project = () => {
    const {pName} = useParams();
    const [thisProject, setProject] = useState({
        title: '',
        attribute: '',
        duration: '',
        dateRange: '',
        location: '',
        tags: [],
        links: [],
        summary: '',
        description: {},
        images: []
    });
    useEffect(()=>{
        const fetchProjectData = () => {
            const projectName = pName;
            if (projectName === 'Sentimental Analysis Project'){
                setProject(project.SentimentalAnalysis())
            }
            if (projectName === 'NFL Fanshop'){
                setProject(project.NFL_Fanshop())
            }
            if (projectName === 'POS Prediction'){
                setProject(project.LexicalAnalysis())
            }
            if (projectName === 'Malloc Library'){
                setProject(project.DynamicMemory())
            }
            if (projectName === 'Mini OS'){
                setProject(project.MiniOS())
            }
            if (projectName === 'Concurrency and Threads'){
                setProject(project.ThreadSystem())
            }
            if (projectName === 'HeardTHT'){
                setProject(project.HeardTHT())
            }
            if (projectName === 'File System'){
                setProject(project.FileSystem())
            }
        }
        fetchProjectData();
    },[pName]);

    const buildDescription = () => {
        return Object.entries(thisProject.description).map(([key, value]) => {
            if (typeof value === 'string') {
                return (
                    <div className='description-box' key={key}>
                        <div className='header'>{key}</div>
                        <p className='content'>{value}</p>
                    </div>
                )
            }
            if (typeof value === 'object') {
                return (
                    <div className='description-list' key={key}>
                        <p className='header'>{key}</p>
                        {Object.entries(value).map(([header, desc]) => {
                            return (
                                <div key={header}>
                                    <p className='sub-head'>{header}</p>
                                    <p className='content'>{desc}</p>
                                </div>
                            )
                        })}
                    </div>
                )
            }
            return null;

        });
    }

    const InfoSection = () => {
        const getTags = () => {
            return thisProject.tags.join(', ')
        }

        return (
            <div className='info-row items'>
                <div className='info-item title'>{thisProject.title}</div>
                <div className='info-item bold'>{thisProject.attribute}</div>
                <div className='info-item'>{thisProject.duration ? thisProject.duration : null} {thisProject.dateRange ? `: ${thisProject.dateRange}` : null}</div>
                {thisProject.location ? <div className='info-item'>{thisProject.location}</div> : null}
                <div className='info-item'>{getTags()}</div>
                {thisProject.links.length > 0 ?
                    thisProject.links.map((link, index) => {
                        return (
                            <a className='proj-link' target='_blank' rel="noreferrer" href={link} key={index}>{link}</a>
                        )
                    })
                    : null}
            </div>
        )
    }

    const SummarySection = () => {

        return (
            <div className='info-row summary'>
                <h1 style={{ color: 'rgb(239,244,30)' }}>Summary</h1>
                <p>{thisProject.summary}</p>
            </div>
        )
    }

    const BuildCarousel = () => {
        return (
            <AliceCarousel mouseTracking items={thisProject.images}/>
        );
    };



    return (
        <div className="scaffold">
            <div className='body-wrap'>
                {InfoSection()}
                {SummarySection()}
            </div>
            {buildDescription()}
            {thisProject.images.length > 0 ? <div className='carousel'>{BuildCarousel()}</div> : <Footer/>}
        </div>
    )
}

export default Project;