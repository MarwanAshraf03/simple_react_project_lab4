export interface Movie {
  id: string;
  poster_path: string;
  original_title: string;
  original_language: string;
  overview: string;
  vote_average: number;
  backdrop_path: string;
  // poster_path: string;
  // title: string;
  title: string;
  tagline: string;
  genres: [{ id: string; name: string }];
  runtime: string;
  // vote_average: string;
  // overview: string;
  release_date: string;
  budget: string;
  revenue: string;
  status: string;
}

/*
movie.backdrop_path: string;
movie.poster_path: string;
movie.title: string;
movie.title: string;
movie.tagline: string;
movie.genres: string;
movie.runtime: string;
movie.vote_average: string;
movie.overview: string;
movie.release_date: string;
movie.budget: string;
movie.revenue: string;
movie.status: string;
*/
