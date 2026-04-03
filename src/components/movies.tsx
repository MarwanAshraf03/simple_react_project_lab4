import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "./movieCard";
import type { Movie } from "../interfaces/Movie";

const Movies: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Equivalent to componentDidMount
    axios
      .get("https://api.themoviedb.org/3/movie/top_rated", {
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_TOKEN}`,
        },
      })
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch((err) => console.error("Failed to fetch movies", err))
      .finally(() => setIsLoading(false));

    return () => {
      // Equivalent to componentWillUnmount
      console.log("Cleanup on unmount");
    };
  }, []); // Empty dependency array ensures this runs once

  // Inline styles for the grid
  const gridStyle: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
    gap: "25px",
    padding: "20px",
    backgroundColor: "#121212", // Dark theme background
    minHeight: "100vh",
  };

  if (isLoading) {
    return (
      <div style={{ color: "white", textAlign: "center", marginTop: "50px" }}>
        <h2>Loading Amazing Movies...</h2>
      </div>
    );
  }

  return (
    <div style={gridStyle}>
      {movies.map((movie, index) => (
        <MovieCard key={movie.id} movie={movie} index={index} />
      ))}
    </div>
  );
};

export default Movies;
