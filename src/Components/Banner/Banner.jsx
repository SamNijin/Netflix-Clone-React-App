import React from "react";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <div className="overlay-text">
        <h1>Movie Name</h1>
        <div className="overlay-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi
          dicta esse quisquam. Unde impedit incidunt nam quas repellat error?
        </div>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
