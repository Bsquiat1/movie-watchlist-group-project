import React, { useState, useEffect } from 'react';
import MovieForm from './MovieForm';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import './App.css'

function App() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data));
  }, []);

  const addMovieHandler = (movie) => {
    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(movie),
    })
      .then((response) => response.json())
      .then((data) => setMovies((prevMovies) => [...prevMovies, data]));
  };

  const removeMovieHandler = (id) => {
    fetch(`http://localhost:3000/movies/${id}`, {
      method: 'DELETE',
    })
      .then(() => setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== id)));
  };

  const searchHandler = (searchTerm) => {
    const filtered = movies.filter(movie => movie.title.toLowerCase().includes(searchTerm.toLowerCase()));
    setFilteredMovies(filtered);
  };


  return (
    <div>
      <h1>Movie Watchlist</h1>
      <SearchBar onSearch={searchHandler} />
      <MovieList movies={filteredMovies} onRemoveMovie={removeMovieHandler} />
      <MovieForm onAddMovie={addMovieHandler} />

    </div>
  );
}

export default App;
