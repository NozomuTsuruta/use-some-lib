import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';

const List = () => {
  return (
    <ListContainer>
      <Card />
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  grid-area: component;
`;
