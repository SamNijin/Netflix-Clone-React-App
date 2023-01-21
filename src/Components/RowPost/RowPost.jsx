import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import axios from "../../axios";
import { image_URL } from "../../Constants/API";
import "./RowPost.css";

function RowPost(props) {
  // const [time, setTime] = useState(true);

  useEffect(() => {
    axios
      .get(props.url)
      .then((resp) => {
        setMovie(resp.data.results);
        // setTime(false);
      })
      .catch((err) => console.log(err));
    // setTime(true);
    // setTimeout(() => {
    //   setTime(false);
    // }, 2000);
  }, [props]);

  const [movie, setMovie] = useState([]);

  return (
    <div className="row-post">
      <h3>{props.title}</h3>
      <div className="img">
        {movie.map((movies) => {
          return (
            <div className="row">
              <LazyLoadImage
                effect="blur"
                delayTime={1000000000}
                placeholderSrc={image_URL + movies.poster_path}
                src={image_URL + movies.poster_path}
                alt="card"
                className={props.isBig ? `big-card` : `small-card`}
              />
              )
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
