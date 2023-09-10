import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  background-color: #333;
  color: white;
  padding: 20px 0;
`;

export const NavStyled = styled.nav`
  display: flex;
  justify-content: center;
`;

export const ListNav = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
  padding: 0;
  margin: 0;
`;

export const ItemNav = styled.li`
  &:first-child {
    margin-right: 20px;
  }
`;

export const NavLinkStyled = styled(NavLink)`
  text-decoration: none;
  color: white;
  font-weight: bold;

  &.active {
    color: #00ffff;
  }
`;
