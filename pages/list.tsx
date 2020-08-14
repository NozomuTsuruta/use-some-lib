import React from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import { useGrobalState } from './../redux/store';
import { Product } from '../redux/types';

const List = () => {
  const products: Product[] = useGrobalState('products');

  return (
    <ListContainer>
      {products ? (
        products.map((product) => <Card product={product} />)
      ) : (
        <h1>商品がありません</h1>
      )}
    </ListContainer>
  );
};

export default List;

const ListContainer = styled.div`
  grid-area: component;
`;
