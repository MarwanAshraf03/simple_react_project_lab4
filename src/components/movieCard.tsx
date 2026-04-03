// import { useEffect, useState } from "react";
import type { Movie } from "../interfaces/Movie";
import { Link } from "react-router-dom";
const MovieCard = ({ movie, index }: { movie: Movie; index: number }) => {
  return (
    <div className="group relative w-full max-w-sm overflow-hidden rounded-2xl bg-white p-6 shadow-md border border-gray-100">
      <div className="relative flex flex-col items-center text-center">
        <div className="mb-4 h-24 w-24 overflow-hidden rounded-full border-4 border-white ring-2 ring-blue-100 shadow-inner">
          <img
            src={
              `https://image.tmdb.org/t/p//%20%20https://image.tmdb.org/t/p/w500${movie.poster_path}` ||
              "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png?_=20170328184010"
            }
            alt={movie.original_title}
            className="h-full w-full object-cover "
          />
        </div>
        <h3 className="text-xl font-bold text-gray-800 tracking-tight">
          {movie.original_title}
        </h3>
        <span className="text-sm font-medium text-gray-400">
          Rating {movie.vote_average}
        </span>
        <button className="mt-6 w-full rounded-xl bg-gray-900 py-2.5 text-sm font-bold text-white hover:cursor-default">
          <Link to={`/movie_details/${movie.id}`}>Movie Details</Link>
        </button>
      </div>
    </div>
  );
};

export default MovieCard;
