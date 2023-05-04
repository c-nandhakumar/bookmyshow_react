import React, { Suspense } from "react";
import PageRoute from "./routes/PageRoute";
import { useSelector } from "react-redux";

function App() {
  console.log(<PageRoute />);
  return (
    <div className="App">
      <PageRoute />
    </div>
  );
}

export default App;
