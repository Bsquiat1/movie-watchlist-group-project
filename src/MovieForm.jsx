import React, { useState } from 'react';

function MovieForm(props) {
  const [newMovie, setNewMovie] = useState({ title: '', director: '', year: '', rating: '', genre: '' });

  const submitHandler = (event) => {
    event.preventDefault();
    if (newMovie.title.trim() && newMovie.director.trim() && newMovie.year.trim() && newMovie.rating.trim() && newMovie.genre.trim()) {
      props.onAddMovie(newMovie);
      setNewMovie({ title: '', director: '', year: '', rating: '', genre: '' });
    }
  };

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewMovie((prevMovie) => ({ ...prevMovie, [name]: value }));
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">Title:</label>
      <input type="text" name="title" value={newMovie.title} onChange={changeHandler} />
      <label htmlFor="director">Director:</label>
      <input type="text" name="director" value={newMovie.director} onChange={changeHandler} />
      <label htmlFor="year">Release date:</label>
      <input type="text" name="year" value={newMovie.year} onChange={changeHandler} />
      <label htmlFor="rating">Rating:</label>
      <input type="text" name="rating" value={newMovie.rating} onChange={changeHandler} />
      <label htmlFor="genre">Genre:</label>
      <input type="text" name="genre" value={newMovie.genre} onChange={changeHandler} />
      <button type="submit">Add Movie</button>
    </form>
  );
}

export default MovieForm;
