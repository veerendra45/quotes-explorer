import React from "react";
import "./Body.css"
const Body = () => {
    return(
        <div className="body-container">
            <p className="first-para">Choose a category to explore</p>
            <select className="selector" defaultValue={""}>
                <option value="" disabled> Select a category...</option>
                <option value="life">Life</option>
                <option value="love">Love</option>
                <option value="success">Success</option>
                <option value="happiness">Happiness</option>
            </select>
            <br/>
            <img className="spark-img" src="https://twemoji.maxcdn.com/v/latest/svg/2728.svg" alt="sparkles"/>
            <h2 className="last-one-para">Welcome to Quotes Explorer</h2>
            <p className="last-line">Select a category above to start discovering inspiring quotes.</p>
        </div>
    )
}

export default Body;