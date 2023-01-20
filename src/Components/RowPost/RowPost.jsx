import React, { useEffect, useState } from "react";
import axios from "../../axios";
import { image_URL, API_KEY } from "../../Constants/API";
import "./RowPost.css";

function RowPost() {
  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US`
      )
      .then((resp) => setMovie(resp.data.results));
  }, []);

  const [movie, setMovie] = useState([]);

  return (
    <div className="row-post">
      <h3>Title</h3>
      <div className="img">
        {movie.map((movies) => {
          return (
            <div>
              <img src={image_URL + movies.backdrop_path} alt="card" />
              <p>{movies.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default RowPost;
