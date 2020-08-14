import React, { useState } from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import Button from '../components/Button';

const Form = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState<number | undefined>();
  const [memo, setMemo] = useState('');

  return (
    <StyledForm>
      <Input type='text' label='NAME' value={name} setValue={setName} />
      <Input type='number' label='NUM' value={number} setValue={setNumber} />
      <Input type='text' label='MEMO' value={memo} setValue={setMemo} />
      <Button type='submit' value='ADD' />
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form`
  grid-area: component;
`;
