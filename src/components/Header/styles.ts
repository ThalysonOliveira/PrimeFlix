import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
    height: 80px;
    background: var(--secondary-color);
    padding: 2em;
    font-family: 'JetBrains Mono', monospace;
    font-weight: bold;

    display: flex;
    justify-content: space-between;
    align-items: center;

    a{
    color: var(--primary-color);

    }
`

export const Logo = styled(Link)`
    font-size: 1.5em;
`

export const Favorites = styled(Link)`
    border: 1px solid var(--primary-color);
    padding: .8em;
    border-radius: .3em;

    &:hover{
        background: var(--primary-color);
        color: var(--secondary-color);
    }
`