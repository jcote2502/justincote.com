import '../App.css';
import './CSS/Project.css';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Footer } from '../Components/Layouts';
var project = {};

const setProject = (val) => {
    project = val;
}

const Project = () => {

    const buildDescription = () => {
        return Object.entries(project.description).map(([key, value]) => {
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
                            console.log(header);
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
            return project.tags.join(', ')
        }

        return (
            <div className='info-row items'>
                <div className='info-item title'>{project.title}</div>
                <div className='info-item bold'>{project.attribute}</div>
                <div className='info-item'>{project.duration ? project.duration : null} {project.dateRange ? `: ${project.dateRange}` : null}</div>
                {project.location ? <div className='info-item'>{project.location}</div> : null}
                <div className='info-item'>{getTags()}</div>
                {project.links.length > 0 ?
                    project.links.map((link, index) => {
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
                <p>{project.summary}</p>
            </div>
        )
    }

    const BuildCarousel = () => {
        return (
            <AliceCarousel mouseTracking items={project.images}/>
        );
    };



    return (
        <div className="scaffold">
            <div className='body-wrap'>
                {InfoSection()}
                {SummarySection()}
            </div>
            {buildDescription()}
            {project.images.length > 0 ? <div className='carousel'>{BuildCarousel()}</div> : <Footer/>}
        </div>
    )
}

export { Project, setProject };