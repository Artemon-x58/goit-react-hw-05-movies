import {
  MoviesListItem,
  MoviesListItemLink,
  MoviesListStyled,
} from './MoviesList.styled';

export const MoviesList = ({ list, location }) => {
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
