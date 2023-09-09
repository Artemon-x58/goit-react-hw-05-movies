import { SearchBtn, SearchInput } from './SearchMovies.styled';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const SearchMovies = () => {
  const [title, setTitle] = useState('');

  const navigate = useNavigate();

  const addTitleState = e => {
    setTitle(e.target.value);
  };
  const onSearchMovies = () => {
    if (title.trim() === '') {
      return;
    }
    navigate(`/movies/results?query=${title}`);
  };

  return (
    <>
      <SearchInput onChange={addTitleState} />
      <SearchBtn onClick={onSearchMovies}>Search</SearchBtn>
    </>
  );
};
