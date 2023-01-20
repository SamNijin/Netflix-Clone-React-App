import React, { useEffect, useState } from "react";
import "./Banner.css";
import { API_KEY, base_URL, image_URL } from "../../Constants/API";
import axios from "../../axios";

function Banner() {
  useEffect(() => {
    axios
      .get(`/trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then((response) =>
        setImage(
          response.data.results[
            Math.floor(Math.random() * response.data.results.length)
          ]
        )
      );

    // setImage(resp).catch((error) => alert(error));
  }, []);

  const [image, setImage] = useState("");

  return (
    <div
      className="banner"
      style={{ backgroundImage: `url(${image_URL + image.backdrop_path})` }}
    >
      <div className="overlay-text">
        <h1>{image.name}</h1>
        <div className="overlay-buttons">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <div className="description">{image.overview}</div>
      </div>
      <div className="fade"></div>
    </div>
  );
}

export default Banner;
