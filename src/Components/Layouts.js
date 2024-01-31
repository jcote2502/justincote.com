import React from "react";
import './Styles.css';

//Author : Justin Cote

const TitleAboveText = (props) => {
    const { title, contents } = props.data

    return (
        // will be a fixed size and hold a column
        <div className="TAT-container">
            <h3 className="TAT-title">{title}</h3>
            <div className="LIST-container">
                {Array.isArray(contents) ?
                    contents.map((item, index) => (
                        <div key={index} className="LIST-element">
                            - {item}
                        </div>
                    )) :
                    <div className="TAT-message">
                        {contents}
                    </div>
                }
            </div>
        </div>
    )

}

const Footer = () => {
    return (
        <div className="FTR">
            <p>Justin Cote</p>
            <p>610-739-0861</p>
            <p>justin.cote25@gmail.com</p>
        </div>
    )
}

export { TitleAboveText, Footer };