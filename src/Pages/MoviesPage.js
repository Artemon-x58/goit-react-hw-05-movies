import { SearchMovies } from 'components/SearchMovies/SearchMovies';
import { Loader } from 'components/Loader/Loader';
import { apiResults } from '../API/api';

import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

const MoviesPage = () => {
  const [resultsSearch, setResultsSearch] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);
  const query = searchParams.get('query');

  useEffect(() => {
    setIsLoading(true);

    apiResults('search/movie', query)
      .then(res => {
        setResultsSearch(res.results);
      })
      .catch(err => console.log(err))
      .finally(() => setIsLoading(false));
  }, [query]);

  const searchMovie = query => {
    setSearchParams({ query });
  };
  return (
    <>
      <SearchMovies searchMovie={searchMovie} />
      {isLoading && <Loader />}
      {resultsSearch && <MoviesList list={resultsSearch} />}
    </>
  );
};
export default MoviesPage;
