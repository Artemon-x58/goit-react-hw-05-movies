import { useEffect, useState } from 'react';
import { Title } from './TopTodayStyled';
import { apiResults } from '../../API/api';
import { Loader } from 'components/Loader/Loader';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const TopToday = () => {
  const [topList, setTopList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    apiResults('trending/movie/day')
      .then(res => {
        setTopList(res.results);
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      {isLoading ? <Loader /> : <MoviesList list={topList} />}
    </>
  );
};
