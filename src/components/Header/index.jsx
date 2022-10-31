import { Link } from 'react-router-dom'
import './style.css'

function Header() {
    return (
        <header className="header">
            <Link className='logo' to='/'>PrimeFlix</Link>
            <Link className='favorites' to='/favorites'>Meus Filmes</Link>
        </header>
    );
}

export default Header;