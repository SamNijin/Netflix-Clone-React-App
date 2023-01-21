import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { image_URL } from "../../Constants/API";
import "./RowPost.css";

function RowPost(props) {
  useEffect(() => {
    axios
      .get(props.url)
      .then((resp) => setMovie(resp.data.results))
      .catch((err) => console.log(err));
  }, [props]);

  const [movie, setMovie] = useState([]);

  return (
    <div className="row-post">
      <h3>{props.title}</h3>
      <div className="img">
        {movie.map((movies) => {
          return (
            <div className="row">
              <img
                src={image_URL + movies.backdrop_path}
                alt="card"
                className={props.isBig ? `big-card` : `small-card`}
              />
              <p className={props.isBig && "big-title"}>
                {movies.title || movies.name}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RowPost;
