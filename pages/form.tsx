import React, { useState, FormEvent } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';
import { useDispatch } from '../redux/store';
import { addProduct } from '../redux/actions';

const Form = () => {
  const [name, setName] = useState('');
  const [memo, setMemo] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addProduct({ name, memo }));
    setName('');
    setMemo('');
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <Input type='text' label='NAME' value={name} setValue={setName} />
      <Input type='text' label='MEMO' value={memo} setValue={setMemo} />
      <Button type='submit' value='ADD' />
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  grid-area: component;
  margin: 0 30px;
`;
