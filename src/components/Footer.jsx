export default function Footer(){

 return <div className="bg-gray-800 fixed bottom-0 w-full cursor-pointer">
    <div className="flex justify-center items-center gap-28  text-white py-3 text-lg">
        <div className="flex items-center flex-col">
        <i class="fa-solid fa-fire"></i>
        <p>Trending</p>
        </div>
        <div className="flex items-center flex-col">
        <i class="fa-solid fa-film"></i>
        <p>Movies</p>
        </div>
        <div className="flex items-center flex-col">
        <i class="fa-solid fa-tv"></i>
        <p>TV</p>
        </div>
        <div className="flex items-center flex-col">
        <i class="fa-solid fa-magnifying-glass"></i>
        <p>Search</p>
        </div>
    </div>
 </div>
}