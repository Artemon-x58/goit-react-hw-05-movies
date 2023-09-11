import { useEffect, useState } from 'react';
import { Title } from './TopTodayStyled';
import { apiResults } from '../../API/api';
import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const TopToday = () => {
  const [topList, setTopList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

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
      {isLoading ? (
        <Loader />
      ) : (
        <MoviesList location={location} list={topList} />
        // <TopList>
        //   {topList.map(({ id, title, name }) => (
        //     <TopListItem key={id}>
        //       <TopListItemLink
        //         to={`movies/${id}`}
        //         state={{ from: location.pathname }}
        //       >
        //         {name ?? title}
        //       </TopListItemLink>
        //     </TopListItem>
        //   ))}
        // </TopList>
      )}
    </>
  );
};
