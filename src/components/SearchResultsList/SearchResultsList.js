import { Loader } from 'components/Loader/Loader';
import { apiResults } from '../../API/api';
import {
  SearchItem,
  SearchItemLink,
  SearchList,
} from './SearchResultsList.styled';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

const urlSerchMovies = 'search/movie';

export const SearchResultsList = () => {
  const [resultsSearch, setResultsSearch] = useState([]);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    apiResults(query, urlSerchMovies)
      .then(res => {
        setResultsSearch(res.results);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [query]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SearchList>
          {resultsSearch.map(({ id, title, name }) => (
            <SearchItem key={id}>
              <SearchItemLink
                to={`/movies/${id}`}
                state={{ from: location.pathname }}
              >
                {name ?? title}
              </SearchItemLink>
            </SearchItem>
          ))}
        </SearchList>
      )}
    </>
  );
};
