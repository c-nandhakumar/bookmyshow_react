import React, { useEffect, useState } from "react";
import tmdb from "../../api/tmdb";
import MovieContainer from "./MovieContainer";
import styles from "../movielist/moviecontainer.module.css";
import { useDispatch, useSelector } from "react-redux";
import { movieListActions } from "../../features/movieListSlice";

function MovieList() {
  const [movieList, setMovieList] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchMovies = async () => {
      let response = await tmdb.get("/discover/movie");
      console.log(response);
      setMovieList(response.data.results);
      // console.log(response);
      dispatch(movieListActions.setMovieData(response.data.results));

      // console.log(`State Value==>${movieList}`);
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
        {movieList
          .filter((movie) => movie.backdrop_path != null)
          .map((movie,index) => (
            <MovieContainer key={movie.id} movies={movie} index={index}></MovieContainer>
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
