import React, { useState } from 'react';

function SearchBar(props) {
  const [searchTerm, setSearchTerm] = useState('');

  const searchHandler = () => {
    props.onSearch(searchTerm);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      searchHandler();
    }
  };

  return (
    <div>
      <input type="text" value={searchTerm} onChange={(event) => setSearchTerm(event.target.value)} placeholder="Search by title" onKeyPress={handleKeyPress} />
      <button type="button" onClick={searchHandler}>Search</button>
    </div>
  );
}

export default SearchBar;
