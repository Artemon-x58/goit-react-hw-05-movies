import { useEffect, useState } from 'react';
import { Title, TopList, TopListItem, TopListItemLink } from './TopTodayStyled';
import { apiResults } from '../../API/api';
import { Loader } from 'components/Loader/Loader';
import { useLocation } from 'react-router-dom';

const urlTopList = 'trending/all/day';

export const TopToday = () => {
  const [topList, setTopList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsLoading(true);
    apiResults(null, urlTopList)
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
        <TopList>
          {topList.map(({ id, title, name }) => (
            <TopListItem key={id}>
              <TopListItemLink
                to={`movies/${id}`}
                state={{ from: location.pathname }}
              >
                {name ?? title}
              </TopListItemLink>
            </TopListItem>
          ))}
        </TopList>
      )}
    </>
  );
};
