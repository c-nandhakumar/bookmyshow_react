import { useSelector } from "react-redux";
import styles from "./moviedetails.module.css";
const MovieDetails = (props) => {
  const movieList = useSelector((state) => state.movielist?.data);

  return (
    <div className={styles.superdiv}>
      <div
        className={styles.parentdiv}
        style={{
          backgroundRepeat: "no-repeat",
          backgroundImage: `url("https://www.themoviedb.org/t/p/w1000_and_h450_bestv2/${
            movieList[props.index].backdrop_path
          }")`,
        }}
      >
        <img
          className={styles.poster}
          src={`https://www.themoviedb.org/t/p/w300_and_h450_bestv2/${
            movieList[props.index].poster_path
          }`}
        />
        <div className={styles.centerdiv}>
          <p className={styles.title}>{movieList[props.index].title}</p>
          <p className={styles.rating}>8.6/10</p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
