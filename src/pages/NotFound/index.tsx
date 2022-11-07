import React from 'react';
import { Link } from 'react-router-dom';
import { NotFoundContainer, NotFoundItens } from './styles';

function NotFound() {
  return (
    <NotFoundContainer>
      <NotFoundItens>
        <h1>Ops, pagina não encontrada</h1>
        <p>Erro 404</p>
        <Link to='/'>Voltar para a home</Link>
      </NotFoundItens>
    </NotFoundContainer>
  );
}

export default NotFound;
