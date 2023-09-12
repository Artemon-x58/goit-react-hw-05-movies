import { useLocation } from 'react-router-dom';
import {
  MoviesListItem,
  MoviesListItemLink,
  MoviesListStyled,
} from './MoviesList.styled';

export const MoviesList = ({ list }) => {
  const location = useLocation();
  return (
    <MoviesListStyled>
      {list.map(({ id, title, name }) => {
        return (
          <MoviesListItem key={id}>
            <MoviesListItemLink to={`/movies/${id}`} state={{ from: location }}>
              {name ?? title}
            </MoviesListItemLink>
          </MoviesListItem>
        );
      })}
    </MoviesListStyled>
  );
};
