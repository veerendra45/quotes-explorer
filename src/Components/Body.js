import React, { useState } from "react";
import "./Body.css"
const Body = () => {

    const[quote, setQuote] = useState(null);

    const fetchQuote = async () => {
        console.log("button clicked");
    try {
      const res = await fetch("http://localhost:8080/api/quote");
      const data = await res.json();
      setQuote(data[0]);
    } catch (err) {
      console.error("Error fetching quote:", err);
    }
  };

    return(
        <div className="body-container">
            <p className="first-para">Discover a random quote</p>
            <button onClick={fetchQuote} className="main-btn">
                Get Quote
            </button>

            {quote && (<div className="quote-box">
                <p className="quote-content">"{quote.quote}"</p>
                <p className="quote-author">- {quote.author}</p>
            </div>)}
            <br/>
            <img className="spark-img" src="https://twemoji.maxcdn.com/v/latest/svg/2728.svg" alt="sparkles"/>
            <h2 className="last-one-para">Welcome to Quotes Explorer</h2>
            <p className="last-line">Click on above button to start discovering inspiring quotes.</p>
        </div>
    )
}

export default Body;