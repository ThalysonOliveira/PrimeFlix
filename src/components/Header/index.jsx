import { HeaderContainer, Logo, Favorites } from './styles'

function Header() {
    return (
        <HeaderContainer>
            <Logo to='/'> PrimeFlix</Logo>  
            <Favorites to='/favorites'>Meus Filmes</Favorites>
        </HeaderContainer>
    );
}

export default Header;