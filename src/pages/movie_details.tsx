import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/navBar";
import axios from "axios";
import type { Movie } from "../interfaces/Movie";
const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?language=en-US`, {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
        },
      })
      .then((res) => {
        setMovie(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);
  if (loading)
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white text-2xl font-bold">
        Loading...
      </div>
    );
  if (!movie)
    return (
      <div className="h-screen bg-black flex items-center justify-center text-white">
        Movie not found
      </div>
    );
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <NavBar />
      <div
        className="relative w-full h-[60vh] bg-cover bg-center"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
        }}
      >
        <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent" />
      </div>
      <div className="max-w-6xl mx-auto px-4 -mt-40 relative z-10">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="shrink-0 mx-auto md:mx-0">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="w-64 rounded-xl shadow-2xl border-4 border-gray-800"
            />
          </div>
          <div className="flex flex-col justify-end pb-4">
            <h1 className="text-5xl font-extrabold mb-2">{movie.title}</h1>
            <p className="italic text-gray-400 text-lg mb-4">
              "{movie.tagline}"
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-blue-600 rounded-full text-sm font-medium"
                >
                  {genre.name}
                </span>
              ))}
              <span className="px-3 py-1 bg-gray-700 rounded-full text-sm font-medium">
                {movie.runtime} min
              </span>
              <span className="px-3 py-1 bg-yellow-500 text-black rounded-full text-sm font-bold">
                ★ {movie.vote_average.toFixed(1)}
              </span>
            </div>
            <h3 className="text-2xl font-bold mb-2">Overview</h3>
            <p className="text-gray-300 leading-relaxed text-lg max-w-3xl">
              {movie.overview}
            </p>
            <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6 border-t border-gray-800 pt-6">
              <div>
                <p className="text-gray-500 text-sm uppercase">Release Date</p>
                <p className="font-semibold">{movie.release_date}</p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase">Budget</p>
                <p className="font-semibold">
                  ${movie.budget?.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase">Revenue</p>
                <p className="font-semibold">
                  ${movie.revenue?.toLocaleString()}
                </p>
              </div>
              <div>
                <p className="text-gray-500 text-sm uppercase">Status</p>
                <p className="font-semibold">{movie.status}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
