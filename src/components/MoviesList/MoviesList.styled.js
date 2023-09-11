import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MoviesListStyled = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const MoviesListItem = styled.li`
  margin: 0 10px 20px;
  text-align: center;
  background-color: #f5f5f5;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background-color: #add8e6;
  }
`;

export const MoviesListItemLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 16px;
  display: block;
`;
