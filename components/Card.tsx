import React, { FC } from 'react';
import styled from 'styled-components';
import Button from './Button';
import { Product } from '../redux/types';
import { useDispatch } from '../redux/store';
import { deleteProduct } from '../redux/actions';

type Props = {
  product: Product;
};

const Card: FC<Props> = ({ product }) => {
  const dispatch = useDispatch();
  const { name, memo, id } = product;

  const deleteProductEvent = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <CardContainer>
      <p>{name}</p>
      <p>{memo}</p>
      <Button value='削除' clickEvent={deleteProductEvent}/>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  width: 200px;
  height: 200px;
  margin: 0 auto;
`;
