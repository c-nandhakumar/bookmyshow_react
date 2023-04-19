import React, { useEffect, useState } from "react";
import tmdb from "../../api/tmdb";
import MovieContainer from "./MovieContainer";
import styles from "../movielist/moviecontainer.module.css";

function MovieList() {
  const [movieslist, getMovies] = useState([]);
  useEffect(() => {
    const fetchMovies = async () => {
      let response = await tmdb.get("/discover/movie");
      console.log(response);
      getMovies(response.data.results);
    };
    console.log("Movie List Mounted");
    fetchMovies();
    return console.log("Movie List Unmounted");
  }, []);

  console.log("Rendering MovieList ...");

  return (
    <div className={styles.childdiv}>
      <div className={`${styles.categorydiv} ${styles.mobilepadding}`}>
        <h2>Recommended Movies</h2>
        <p>
          See All{" "}
          <img
            src="https://img.icons8.com/ios-glyphs/30/DE5462/chevron-right.png"
            style={{ height: "0.5rem" }}
          />
        </p>
      </div>
      <div className={styles.maindiv}>
        {movieslist
          .filter((movie) => movie.backdrop_path != null)
          .map((movie) => (
            <MovieContainer key={movie.id} movies={movie}></MovieContainer>
          ))}
      </div>
      <img
        className={styles.banner}
        src="https://assets-in.bmscdn.com/discovery-catalog/collections/tr:w-1440,h-120:q-80/stream-leadin-web-collection-202210241242.png"
      />
    </div>
  );
}

export default MovieList;
