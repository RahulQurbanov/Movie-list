import { useEffect, useState } from "react";
import "./movie.css";

export default function Movie() {
  const [movieData, setMovieData] = useState([]);
  const [select, setSelect] = useState("sniper");
  const [searchQuery, setSearchQuery] = useState("");

  async function getData(query) {
    let data = await fetch(`http://www.omdbapi.com/?s=${query}&apikey=69b71180`).then((res) => res.json());
    if (data.Response === "True") {
      setMovieData(data.Search);
      console.log(movieData)
    } else {
      setMovieData([]);
      console.log(movieData)
    }
  }

  useEffect(() => {
    getData(select);
  }, [select]);

  const handleSearch = () => {
    if (searchQuery.trim() !== "") {
      setSelect(searchQuery);
    }
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
            />
            <button onClick={handleSearch}>Search</button>
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
                    <button>View Details</button>
                  </div>
                </div>
              ))
            ) : (
              <p>No movies found. Try a different search!</p>
            )}
          </div>
        </div>
        <div className="right-main">
            <input type="text" value="Bura favori yazirsan" />
            <div className="add">
             <div className="add-box">
                <p>American Sniper</p>
                <i class="fa-solid fa-xmark"></i>
             </div>
             <div className="add-box">
                <p>American Sniper</p>
                <i class="fa-solid fa-xmark"></i>
             </div>
             <div className="add-box">
                <p>American Sniper</p>
                <i class="fa-solid fa-xmark"></i>
             </div>
             <div className="add-box">
                <p>American Sniper</p>
                <i class="fa-solid fa-xmark"></i>
             </div>
             <div className="add-box">
                <p>American Sniper</p>
                <i class="fa-solid fa-xmark"></i>
             </div>
             <div className="add-box">
                <p>American Sniper</p>
                <i class="fa-solid fa-xmark"></i>
             </div>
             <div className="add-box">
                <p>American Sniper</p>
                <i class="fa-solid fa-xmark"></i>
             </div>
             <div className="add-box">
                <p>American Sniper</p>
                <i class="fa-solid fa-xmark"></i>
             </div>
             <div className="add-box">
                <p>American Sniper</p>
                <i class="fa-solid fa-xmark"></i>
             </div>
             <div className="add-box">
                <p>American Sniper</p>
                <i class="fa-solid fa-xmark"></i>
             </div>
            </div>
            <button className="btn">Save</button>
        </div>
      </div>
    </div>
  );
}
