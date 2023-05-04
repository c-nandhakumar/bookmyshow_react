import { useParams } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import SecondaryNavBar from "../components/navbar/SecondaryNavBar";
import MovieDetails from "../components/moviedetail/MovieDetails";

export default function MovieDetailsScreen() {
  const { index } = useParams();

  return (
    <>
      <NavBar />
      <SecondaryNavBar />
      <MovieDetails index={index} />
    </>
  );
}
