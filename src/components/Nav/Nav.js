import { ItemNav, ListNav, NavStyled, NavLinkStyled } from './Nav.styled';

export const Nav = () => {
  return (
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
  );
};
