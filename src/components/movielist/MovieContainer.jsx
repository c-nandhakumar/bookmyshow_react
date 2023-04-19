import React, { Suspense, lazy } from "react";
import styles from "../movielist/moviecontainer.module.css";
import Shimmer from "../fallback/Shimmer";
import { Link, Navigate } from "react-router-dom";

function navigateToDetailsScreen(event, movieName) {
  console.log(`You've clicked the Movie Card : ${JSON.stringify(movieName)}`);
  // <Link to="movie/JSON.stringify(props.movies)" />;
}

function MovieContainer(props) {
  return (
    // <Link to="movie/JSON.stringify(props.movies)">
    <Link
      // style={{ display: "block" }}
      to={`movie/${props.movies.title}`}
      key={props.movies.id}
      className={styles.moviecontainer}
      // onClick={(e) => navigateToDetailsScreen(e, props.movies)}
    >
      <Suspense fallback={<Shimmer />}>
        {props.movies.backdrop_path != null ? (
          <img
            className={styles.image}
            loading="lazy"
            src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${props.movies.poster_path}`}
          />
        ) : null}
      </Suspense>
      <div className={styles.text}>
        <p style={{ width: "100%" }}>{props.movies.title}</p>
      </div>
    </Link>
    // </Link>
  );
}

export default MovieContainer;
