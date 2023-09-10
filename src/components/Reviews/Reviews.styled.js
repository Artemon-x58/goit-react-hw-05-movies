import styled from 'styled-components';

export const ListReviews = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
  overflow-y: auto;
  max-height: 400px;
`;

export const ItemListReviews = styled.li`
  margin-bottom: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
`;

export const Author = styled.p`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ItemText = styled.p`
  font-size: 16px;
  margin: 0;
`;
