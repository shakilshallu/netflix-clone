import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MovieSearch = () => {
  const [movieTitle, setMovieTitle] = useState('');
  const [movieDetails, setMovieDetails] = useState(null);
  const [totalMovies, setTotalMovies] = useState(0);
  const [error, setError] = useState(null);
  const [popularMovies, setPopularMovies] = useState([]);

  const apiKey = '47a54afabcd47abc6ba8d8ae2772df77'; // Replace with your TMDB API key

  useEffect(() => {
    async function fetchPopularMovies() {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    }

    fetchPopularMovies();
  }, [apiKey]);

  const handleChange = (event) => {
    setMovieTitle(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${movieTitle}`
      );

      setTotalMovies(response.data.total_results);

      if (response.data.total_results > 0) {
        setMovieDetails(response.data.results[0]);
        setError(null);
      } else {
        setMovieDetails(null);
        setError('Movie not found.');
      }
    } catch (error) {
      console.error('Error fetching movie:', error);
      setError('Error fetching movie. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter movie title"
          value={movieTitle}
          onChange={handleChange}
        />
        <button type="submit">Search</button>
      </form>
      {totalMovies > 0 && <p>Total movies found: {totalMovies}</p>}
      {error && <p>{error}</p>}
      {movieDetails && (
        <div>
          <h2>{movieDetails.title}</h2>
          <p>Release Date: {movieDetails.release_date}</p>
          <p>Overview: {movieDetails.overview}</p>
        </div>
      )}
      {!movieTitle && (
        <div>
          <h2>Popular Movies</h2>
          <ul>
            {popularMovies.map((movie) => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieSearch;
