import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 20px;
  font-size: 24px;
  color: #333;
`;

export const TopList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const TopListItem = styled.li`
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

export const TopListItemLink = styled(Link)`
  text-decoration: none;
  color: #333;
  font-weight: bold;
  font-size: 16px;
  display: block;
`;

export const TopListItemImage = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;
