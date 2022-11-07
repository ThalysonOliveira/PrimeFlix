import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ListMovies = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1em;

    padding: 1em 0;
    font-family: 'JetBrains Mono', monospace;
    font-weight: bold;
`

export const Title = styled.strong`
    width: 100%;
    height: 70px;
    background: var(--secondary-color);
    color: var(--primary-color);
    padding: 5px;
    text-align: center;
    border-radius: .5em .5em 0 0;
    font-size: 22px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Acessar = styled(Link)`
    border: 1px solid var(--secondary-color);
    width: 90%;
    padding: .5em;
    border-radius: .5em;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: .8em;
    color: var(--secondary-color); 

        &:hover{
            background: var(--secondary-color);
            color: var(--primary-color); 
    }
`

export const Movies = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
    flex-basis: 400px;
    border-radius: .5em;


    img {
        width: 300px;
        height: 300px;
        border-radius: 50%;
        padding: 15px 0;
} 
    
`