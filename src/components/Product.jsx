import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";

export default function Product() {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWQ3MDk3MzhmMWMwNzg3NTk5NjZkNDgzZGZkYzkxNSIsIm5iZiI6MTcyODQwODMyMi4yNTMxNjEsInN1YiI6IjY3MDU2YTYyMWI5NmI4ZWY0YzY5ZTIzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AaCRMWLaaxtpRI3i_qbPC78rwbmdQku4iDcCQfDNPMw",
    },
  };

  const [products, setProducts] = useState([]);

  async function getProducts() {
    let data = await fetch(
      "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
      options
    )
      .then((response) => response.json())
      .then((response) => response.results);
    console.log(data);
    setProducts(data);
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (<>
    <Header/>
    <div className="bg-[#39445a] min-h-screen py-[100px]">
      <div className="flex flex-wrap justify-center gap-4  w-[1270px] m-auto bg-[#39445a]">
        {products &&
          products.map((element) => {
            return (
              <NavLink to={`/product/${element.id}`}
                key={element.id}
                className="group w-[230px] bg-gray-800 rounded-lg p-2 py-3 flex flex-col justify-between cursor-pointer transition-all duration-300 hover:bg-white"
              >
                <div className="flex flex-col justify-center items-center">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${element.backdrop_path}`}
                    alt="movie-picture"
                    className="w-full h-64"
                  />
                  <h2 className="text-bold text-white text-2xl mt-[5px] transition-all duration-300 group-hover:text-black">
                    {element.title}
                  </h2>
                </div>
                <div className="flex gap-5 justify-between text-white text-sm group-hover:text-black transition-all duration-300">
                  <p>Original: {element.original_language}</p>
                  <p>{element.release_date}</p>
                </div>
              </NavLink>
            );
          })}
      </div>
    </div>
    <Footer/>
    </>);
}
