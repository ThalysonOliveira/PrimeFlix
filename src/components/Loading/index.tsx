import React from 'react';
import { LoadingContainer } from './styles';

type Movie = {
  status: string;
};

const Loading: React.FC<Movie> = ({ status }) => {
  return (
    <LoadingContainer>
      <h2>{status}</h2>
    </LoadingContainer>
  );
};

export default Loading;
