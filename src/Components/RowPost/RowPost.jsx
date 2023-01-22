import React, { useEffect, useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import YouTube from "react-youtube";
import axios from "../../axios";
import { API_KEY, base_URL, image_URL } from "../../Constants/API";
import "./RowPost.css";

function RowPost(props) {
  useEffect(() => {
    axios
      .get(props.url)
      .then((resp) => {
        setMovie(resp.data.results);
      })
      .catch((err) => console.log(err));
  }, [props]);

  const [movie, setMovie] = useState([]);

  const errorMessage =
    "Sorry for the inconvinience :(\nThis Trailer is not Available right now\nPlease try again later";

  const [movieKey, setMovieKey] = useState("");

  const handleMovieClick = (id) => {
    axios
      .get(`${base_URL}/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((res) => setMovieKey(res.data.results[0]))
      .catch((err) => {
        console.log(err);
        alert(errorMessage);
      });
    console.log(id);
  };

  const opts = {
    height: "600px",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const trailerEndHandler = () => {
    setMovieKey("");
  };

  return (
    <div className="row-post">
      <h3>{props.title}</h3>
      <div className="img">
        {movie.map((movies) => {
          return (
            <div className="row">
              <LazyLoadImage
                onClick={() => handleMovieClick(movies.id)}
                effect="blur"
                delayTime={1000000000}
                placeholderSrc={image_URL + movies.poster_path}
                src={image_URL + movies.poster_path}
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
      {movieKey && (
        <YouTube videoId={movieKey.key} opts={opts} onEnd={trailerEndHandler} />
      )}
    </div>
  );
}

export default RowPost;
