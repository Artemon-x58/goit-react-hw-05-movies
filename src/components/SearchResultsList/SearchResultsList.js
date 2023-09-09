import { addTopList } from '../../API/api';
import {
  SearchItem,
  SearchItemLink,
  SearchList,
} from './SearchResultsList.styled';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
const urlSerchMovies = 'search/movie';

export const SearchResultsList = () => {
  const [resultsSearch, setResultsSearch] = useState([]);

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query');

  useEffect(() => {
    const onSearchMovies = () => {
      addTopList(query, urlSerchMovies)
        .then(res => {
          setResultsSearch(res.results);
        })
        .catch(err => console.log(err));
    };
    onSearchMovies();
  }, [query]);
  return (
    <SearchList>
      {resultsSearch.map(item => (
        <SearchItem key={item.id}>
          <SearchItemLink>{item.name ?? item.title}</SearchItemLink>
        </SearchItem>
      ))}
    </SearchList>
  );
};
