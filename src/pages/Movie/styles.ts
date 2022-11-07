import styled from 'styled-components';

export const MovieDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5em;

  margin: 1em auto;
  max-width: 700px;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 1em;
  font-family: 'JetBrains Mono', monospace;
  text-align: center;

  img {
    width: 100%;
    height: 400px;
  }
`;

export const AreaButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  margin-bottom: 0.5em;

  button {
    flex-grow: 1;
    height: 40px;
    background: var(--primary-color);
    border: 1px solid var(--secondary-color);
    cursor: pointer;
    font-family: 'JetBrains Mono', monospace;
    font-weight: bold;

    &:hover {
      background: var(--secondary-color);
      color: var(--primary-color);
    }
  }
`;
