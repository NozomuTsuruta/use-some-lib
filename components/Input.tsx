import React, { FC } from 'react';
import styled from 'styled-components';

interface InputProps {
  setValue: Function;
  label: string;
  value: string;
  type: 'text' | 'number';
}

const Input: FC<InputProps> = ({ label, value, setValue }) => {
  return (
    <StyledInput type={type} onChange={() => setValue(value)} label={label} />
  );
};

export default Input;

const StyledInput = styled.input`
  width: 70vw;
  max-width: 400px;
  border-radius: 5px;
  &:hover {
    border-color: blue;
  }
`;
