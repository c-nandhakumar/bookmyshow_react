import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import MovieDetailsScreen from "../pages/MovieDetailsScreen";

export default function PageRoute() {
  const pageRoutes = [
    { path: "/", element: <HomePage /> },
    { path: "movie/:movieData", element: <MovieDetailsScreen /> },
  ];
  return (
    <Routes>
      {pageRoutes.map((route) => {
        return (
          <Route key={route.path} path={route.path} element={route.element} />
        );
      })}
    </Routes>
  );
}
