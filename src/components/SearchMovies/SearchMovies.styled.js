import styled from 'styled-components';

export const SearchInput = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 300px;
  border: 2px solid #007bff;
  border-radius: 5px;
  outline: none;
  font-size: 16px;
`;

export const SearchBtn = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  margin-left: 10px;
`;

export const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px 0;
`;
