import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./movie.css";

export default function Movie({ setBucketName, setFavourites }) {
  const [movieData, setMovieData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [favourites, setLocalFavourites] = useState([]);
  const [bucketName, setLocalBucketName] = useState("");
  const [isSaved, setIsSaved] = useState(false);
  const navigate = useNavigate();

  async function getData(query) {
    let data = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=69b71180`).then((res) =>
      res.json()
    );
    if (data.Response === "True") {
      setMovieData(data.Search);
    } else {
      setMovieData([]);
    }
  }

  useEffect(() => {
    getData("sniper");
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      getData(searchQuery);
    }
  };

  const handleAddFavourite = (movie) => {
    if (!favourites.some((fav) => fav.imdbID === movie.imdbID) && !isSaved) {
      setLocalFavourites([...favourites, movie]);
    }
  };

  const handleRemoveFavourite = (movie) => {
    setLocalFavourites(favourites.filter((fav) => fav.imdbID !== movie.imdbID));
  };

  const handleSave = () => {
    setBucketName(bucketName.trim());
    setFavourites(favourites);
    setIsSaved(true);
  };

  const handleGoBucket = () => {
    navigate("/bucket");
    setLocalBucketName("");
    setLocalFavourites([]);
    setIsSaved(false);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>MOVIELAND</h1>
      </div>
      <div className="main">
        <div className="left-main">
          <div className="inp">
            <input
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              disabled={isSaved} 
            />
            <button onClick={handleSearch}>
              Search
            </button>
          </div>
          <div className="movie-list">
            {movieData.length > 0 ? (
              movieData.map((movie) => (
                <div key={movie.imdbID} className="box">
                  <div className="img">
                    <img src={movie.Poster} alt={movie.Title} />
                  </div>
                  <div className="about">
                    <p>{movie.Title}</p>
                    <p>{movie.Year}</p>
                    <button
                      onClick={() => handleAddFavourite(movie)}
                      disabled={isSaved}
                    >
                      Add Favourite
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p>No movies found. Try a different search!</p>
            )}
          </div>
        </div>
        <div className="right-main">
          <input
            className="add-inp"
            type="text"
            placeholder="Enter bucket name"
            value={bucketName}
            onChange={(e) => setLocalBucketName(e.target.value)}
            disabled={isSaved}
          />
          <div className="add">
            {favourites.map((fav) => (
              <div key={fav.imdbID} className="favourite-item">
                <p>{fav.Title}</p>
                <button onClick={() => handleRemoveFavourite(fav)}>
                  X
                </button>
              </div>
            ))}
          </div>
          <button className="btn" onClick={handleSave} disabled={isSaved}>
            Save
          </button>
          <button className="btn" onClick={handleGoBucket}>
            Go to Bucket
          </button>
        </div>
      </div>
    </div>
  );
}
