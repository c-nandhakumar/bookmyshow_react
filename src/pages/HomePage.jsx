import MovieList from "../components/movielist/MovieList";
import NavBar from "../components/navbar/NavBar";
import SecondaryNavBar from "../components/navbar/SecondaryNavBar";

function HomePage() {
  return (
    <>
      <NavBar />
      <SecondaryNavBar />
      <MovieList />
    </>
  );
}

export default HomePage;
