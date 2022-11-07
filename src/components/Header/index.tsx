import { HeaderContainer, Logo, Favorites } from './styles'
import React from "react";

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo to="/"> PrimeFlix</Logo>
      <Favorites to="/favorites">Meus Filmes</Favorites>
    </HeaderContainer>
  );
};

export default Header;
