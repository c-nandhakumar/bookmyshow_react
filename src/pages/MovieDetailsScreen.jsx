import { useParams } from "react-router-dom";
import NavBar from "../components/navbar/NavBar";
import SecondaryNavBar from "../components/navbar/SecondaryNavBar";

export default function MovieDetailsScreen() {
  const { movieData } = useParams();
  return (
    <>
      <NavBar />
      <SecondaryNavBar/>
      <div>
        <h1>{movieData}</h1>
      </div>
    </>
  );
}
