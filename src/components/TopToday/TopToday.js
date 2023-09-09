import { useEffect, useState } from 'react';
import { Title, TopList, TopListItem, TopListItemLink } from './TopTodayStyled';
import { addTopList } from '../../API/api';

const urlTopList = 'trending/all/day';

export const TopToday = () => {
  const [topList, setTopList] = useState([]);

  useEffect(() => {
    addTopList(null, urlTopList)
      .then(res => {
        setTopList(res.results);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Title>Trending today</Title>
      <TopList>
        {topList.map(item => (
          <TopListItem key={item.id}>
            <TopListItemLink to={`movies/${item.id}`}>
              {item.name ?? item.title}
            </TopListItemLink>
          </TopListItem>
        ))}
      </TopList>
    </>
  );
};
