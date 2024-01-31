import React from "react";
import { TitleAboveText, Footer } from "../Components/Layouts";
import './CSS/Home.css'
import '../App.css'
import ProfilePicture from '../Assets/Images/ProfilePicture.jpg'
import Banner from '../Assets/Images/Banner.jpg'
import homeData from "../Data/Home";
import { SchoolCard } from "../Components/Cards";
// AUTHOR : JUSTIN COTE


const Home = () => {

    return (
        <div className="scaffold">
            {/* Banner/image section goes here */}
            <div className="banner" src={Banner}>
                <img src={Banner} alt="banner" className="banner" />
                <div className="circle">
                    <img src={ProfilePicture} alt='profile' className="image" />
                </div>
            </div>
            <div className="row-section" style={{ marginBottom: "35px" }}>
                <TitleAboveText data={homeData.Summary()} />
                <TitleAboveText data={homeData.Skills()} />

            </div>
            {/* column */}
            <div className="edu-column">
                {/* title */}
                <h1 style={{ color: 'rgb(239,244,30)', textAlign: 'center' }}>Education</h1>
                {/* education row */}
                <div className="row-section" style={{ justifyContent: 'space-evenly' }}>

                    {/* Emmaus */}
                    <SchoolCard data={homeData.Education().schools[1]} />

                    {/* PSU */}
                    <SchoolCard data={homeData.Education().schools[0]} />


                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Home;