import { Loader } from 'components/Loader/Loader';
import { apiResults } from '../../API/api';

import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const SearchResultsList = () => {
  const [resultsSearch, setResultsSearch] = useState([]);
  const [searchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query');
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);

    apiResults('search/movie', query)
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
        <MoviesList location={location} list={resultsSearch} />
      )}
    </>
  );
};
