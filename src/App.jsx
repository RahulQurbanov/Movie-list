import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Bucket from "./components/Bucket";

export default function App() {
  const [bucketName, setBucketName] = useState("");
  const [favourites, setFavourites] = useState([]);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Movie
              setBucketName={setBucketName}
              setFavourites={setFavourites}
            />
          }
        />
        <Route
          path="/bucket"
          element={<Bucket bucketName={bucketName} favourites={favourites} />}
        />
      </Routes>
    </Router>
  );
}
