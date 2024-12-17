import React from "react";
import { Link } from "react-router-dom";
import "./Bucket.css";

export default function BucketPage({ bucketName, favourites }) {
  return (
   <div className="container-bucket">
     <div className="bucket-page">
      <h1 className="inp-text">{bucketName || "Your Bucket"}</h1>
        {favourites.map((movie) => (
           <div className="bucket-box">
             <div className="bucket-box-left">
             <img src={movie.Poster} alt="picture" />
             <p key={movie.imdbID}>
            <span>{movie.Title}</span>
            <a
              href={`https://www.imdb.com/title/${movie.imdbID}`}
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
          </p>
             </div>
              <div className="bucket-box-right">
              <button>IMDB</button>
              </div>
           </div>
        ))}     
    </div>
         <Link to="/">
        <button className="bucket-btn">Back to Home</button>
      </Link>
   </div>
  );
}
