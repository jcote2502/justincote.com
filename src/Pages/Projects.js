import React from "react";
import project from "../Data/Projects";
import './CSS/Project.css';
import '../App.css';
import { ProjectCard } from "../Components/Cards";
import { useNavigate } from "react-router-dom";
import { Footer } from "../Components/Layouts";

// AUTHOR : JUSTIN COTE

const Projects = () => {
    const navigate = useNavigate();

    const featureRow = (items,label) => {

        const goToProject = (data) => {
            // setProject(data);
            navigate(`/projects/${encodeURIComponent(data.title)}`);
        }

        return (
            <div className="feature-container">
                <div className="feature-title">{label}</div>
                <div className="feature-scroll">
                    {items.map((item, index) => {
                        return (<div className="feature-item" key={index} onClick={()=>goToProject(item)}>{<ProjectCard data={item} />} </div>)
                    })}
                </div>
            </div>
        )

    }

    return (
        <div className="scaffold">
            <div className="page-container">
                {featureRow([project.NFL_Fanshop(),project.HeardTHT()],"Application Development")}
                {featureRow([project.SentimentalAnalysis(),project.LexicalAnalysis()],"Machine Learning")}
                {featureRow([project.ThreadSystem(),project.MiniOS(),project.DynamicMemory(),project.FileSystem()],"Systems Programming")}
            </div>
            <Footer/>
        </div>
    );
}

export default Projects;