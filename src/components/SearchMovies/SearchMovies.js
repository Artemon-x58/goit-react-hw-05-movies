import { SearchBtn, SearchForm, SearchInput } from './SearchMovies.styled';
import { useState } from 'react';

export const SearchMovies = ({ searchMovie }) => {
  const [title, setTitle] = useState('');
  const addTitleState = e => {
    setTitle(e.target.value);
  };

  const onSearchMovies = e => {
    e.preventDefault();
    if (title.trim() === '') {
      return;
    }
    searchMovie(title);
  };

  return (
    <SearchForm onSubmit={onSearchMovies}>
      <SearchInput
        type="text"
        placeholder="Search for movies..."
        onChange={addTitleState}
      />
      <SearchBtn>Search</SearchBtn>
    </SearchForm>
  );
};
