import { SearchBtn, SearchForm, SearchInput } from './SearchMovies.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchMovies = () => {
  const [title, setTitle] = useState('');

  const navigate = useNavigate();

  const addTitleState = e => {
    setTitle(e.target.value);
  };

  const onSearchMovies = e => {
    e.preventDefault();
    if (title.trim() === '') {
      return;
    }
    navigate(`/movies/results?query=${title}`);
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
