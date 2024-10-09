// import { useParams } from "react-router-dom";

// export default function ProductDetail(){
//     const options = {
//         method: 'GET',
//         headers: {
//           accept: 'application/json',
//           Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWQ3MDk3MzhmMWMwNzg3NTk5NjZkNDgzZGZkYzkxNSIsIm5iZiI6MTcyODQwODMyMi4yNTMxNjEsInN1YiI6IjY3MDU2YTYyMWI5NmI4ZWY0YzY5ZTIzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AaCRMWLaaxtpRI3i_qbPC78rwbmdQku4iDcCQfDNPMw'
//         }
//       };

//       const params = useParams()

//         const [product, setProduct] = useState({});


//   async function getProducts() {
//     let data = await  fetch(`https://api.themoviedb.org/3/movie/${params.id}?language=en-US`, options)
//     .then(response => response.json())
//     console.log(data);
//     setProduct(data);             
//   }

//   useEffect(() => {
//     getProducts();
//   }, []);
    
//   return  <div>
//   {
//   product.id==params.id &&
//   <div>
//       <h1>Id:{params.id}</h1>
//       <h1>Id:{product.id}</h1>

//   </div>

//   }
// </div>

// }


import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();

  const [product, setProduct] = useState({}); 

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwZWQ3MDk3MzhmMWMwNzg3NTk5NjZkNDgzZGZkYzkxNSIsIm5iZiI6MTcyODQwODMyMi4yNTMxNjEsInN1YiI6IjY3MDU2YTYyMWI5NmI4ZWY0YzY5ZTIzMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.AaCRMWLaaxtpRI3i_qbPC78rwbmdQku4iDcCQfDNPMw",
    },
  };

  async function getProduct() {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${id}?language=en-US`,
      options
    )
      .then((response) => response.json())
      .catch((err) => console.error(err)); 

    console.log(data);
    setProduct(data);
  }

  useEffect(() => {
    getProduct(); 
  }, []); 

  return  <div>
  {
  product &&
 <div className="bg-[#39445a] h-screen flex justify-center items-center">
   <div className=" w-[1100px] h-[500px] bg-gray-800 p-3 rounded-lg flex gap-14 ">
   <div className="w-[340px]">
    <img className="w-auto h-[455px] rounded-xl mt-[10px]  " src={`https://image.tmdb.org/t/p/w500/${product.backdrop_path}`} alt="picture" />
   </div>
   <div className="w-[650px]  flex flex-col items-center py-7">
    <h1 className="text-white text-bold text-4xl">{product.title}</h1>
    <p className="text-white text-lg border border-black rounded-lg p-2 mt-5">{product.overview}</p>
    <p className="flex  gap-3 text-red-900  text-2xl mt-5">Genres: {product.genres && product.genres.map((genre)=>genre.name).join(", ")}</p>
    <h2 className="text-white text-xl mt-[20px]">Release: {product.release_date}</h2>
    <div>
   <p className="bg-cyan-700 rounded-lg w-[630px] p-2 flex justify-center items-center text-white text-xl mt-[45px] cursor-pointer hover:bg-cyan-900 ">
  <a href={product.homepage}>Trailer</a>
   </p>
    </div>
   </div>
</div>
   </div>

  }
</div>

}
