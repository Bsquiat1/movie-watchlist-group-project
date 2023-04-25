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
      <div>
        <label htmlFor="title">Title:</label>
      <input type="string" name="title" value={newMovie.title} onChange={changeHandler} />
      </div>
      <div>
        <label htmlFor="director">Director:</label>
      <input type="string" name="director" value={newMovie.director} onChange={changeHandler} />
      </div>
      <div>
         <label htmlFor="year">Release date:</label>
      <input type="date" name="year" value={newMovie.year} onChange={changeHandler} />
      </div>
      <div> <label htmlFor="rating">Rating:</label>
      <input type="number" name="rating" value={newMovie.rating} onChange={changeHandler} />
      </div>
      <div> 
        <label htmlFor="genre">Genre:</label>
      <input type="string" name="genre" value={newMovie.genre} onChange={changeHandler} />
      </div>
      <div> <button type="submit">Add Movie</button></div>
     
     
     
     
    </form>
  );
}

export default MovieForm;
