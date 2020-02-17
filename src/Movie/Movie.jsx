import * as React from "react";
import "./styles.css";

function Movie(props) {
  return (
    <div className="movie-card">
      <img src={props.banner} />
      <label>
        {props.likes} {props.name}
      </label>
    </div>
  );
}

export default Movie;
