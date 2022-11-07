import styled from 'styled-components';

export const Tittle = styled.h1`
  text-align: center;
  margin: 30px 0;
  font-family: 'JetBrains Mono', monospace;
`;

export const FavoriteMovies = styled.div`
  display: flex;
  max-width: 500px;
  justify-content: space-between;
  align-items: center;
  margin: 0 auto;
  height: 40px;
  font-family: 'JetBrains Mono', monospace;
  font-weight: bold;
  list-style: none;
`;

export const FavoriteOptions = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5em;

  a,
  button {
    text-decoration: none;
    width: 120px;
    border: 1px solid;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid var(--secondary-color);
    border-radius: 0.5em;
    color: var(--secondary-color);
    background: var(--primary-color);
    cursor: pointer;
    font-family: 'JetBrains Mono', monospace;
    font-weight: bold;

    &:hover {
      background: var(--secondary-color);
      color: var(--primary-color);
    }
  }
`;
