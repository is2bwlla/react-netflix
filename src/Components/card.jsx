export function Card({ movie }) {
    return (
        <div className="relative ml-8 mb-[25px] m-2 overflow-hidden bg-[#141414] w-[300px] h-[450px] flex rounded-[9px] transition-transform duration-300 hover:scale-110 hover:shadow-[0_0_15px_rgba(213,173,53,1)] flex-col">
            <h2 className="text-[#fff] text-xl m-2">{movie.title}</h2>
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="mt-3 w-full h-auto block rounded-[5px]"/>
            <p/>
            <p className="text-sm text-[#e5e5e5] p-2 bg-black bg-opacity-70 absolute bottom-0 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100 line-clamp-4 text-justify">{movie.overview}</p>
        </div>
    )
}