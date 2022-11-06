import styled from 'styled-components'

export const NotFoundContainer = styled.div`
    max-width: 500px;
    height: calc(100vh - 80px);
    margin: 0 auto;
    font-family:  monospace;
    font-weight: bold;
    
    display: flex;
    justify-content: center;
    align-items: center;
`
export const NotFoundItens = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    flex-wrap: wrap;
    gap: .5em;

    a{
        background: var(--primary-color);
        color: var(--secondary-color);
        height: 40px;
        width: 100%;
        font-size: 1.5em;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5em;
        border: 1px solid var(--secondary-color);

    &:hover{
        background: var(--secondary-color);
        color: var(--primary-color);
    }
}   
    
`