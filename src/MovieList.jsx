import React from 'react';

function MovieList(props) {
  const removeHandler = (movieId) => {
    props.onRemoveMovie(movieId);
  };

  const movieItems = props.movies.map((movie) => (
    <tr key={movie.id}>
      <td>{movie.title}</td>
      <td>{movie.director}</td>
      <td>{movie.release_date}</td>
      <td>{movie.rating}</td>
      <td>{movie.genre}</td>
      <td>
        <button onClick={() => removeHandler(movie.id)}>Remove</button>
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Director</th>
          <th>Release Date</th>
          <th>Rating</th>
          <th>Genre</th>
          <th></th>
        </tr>
      </thead>
      <tbody>{movieItems}</tbody>
    </table>
  );
}

export default MovieList;
