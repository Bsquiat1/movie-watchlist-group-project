// // AddMovie.js

// import React, { useState } from 'react';

// function AddMovie(props) {
//   const [newMovie, setNewMovie] = useState('');

//   const submitHandler = (event) => {
//     event.preventDefault();
//     props.onAddMovie(newMovie);
//     setNewMovie('');
//   };

//   return (
//     <form onSubmit={submitHandler}>
//       <input
//         type="text"
//         value={newMovie}
//         onChange={(event) => setNewMovie(event.target.value)}
//       />
//       <button type="submit">Add Movie</button>
//     </form>
//   );
// }

// export default AddMovie;
