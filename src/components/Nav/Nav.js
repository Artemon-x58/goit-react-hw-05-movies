import React from 'react';
import {
  Header,
  NavStyled,
  ListNav,
  ItemNav,
  NavLinkStyled,
} from './Nav.styled';

export const Nav = () => {
  return (
    <Header>
      <NavStyled>
        <ListNav>
          <ItemNav>
            <NavLinkStyled to="/">Home</NavLinkStyled>
          </ItemNav>
          <ItemNav>
            <NavLinkStyled to="/movies">Movies</NavLinkStyled>
          </ItemNav>
        </ListNav>
      </NavStyled>
    </Header>
  );
};
