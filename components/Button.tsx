import React, { FC } from 'react';
import styled from 'styled-components';

interface ButtonProps {
  value: string;
  type?: 'submit';
  clickEvent?: Function;
}

const Button: FC<ButtonProps> = ({ value, type, clickEvent }) => {
  return (
    <StyledButton type={type} onClick={clickEvent as any}>
      {value}
    </StyledButton>
  );
};

export default Button;

const StyledButton = styled.button`
  background-color: black;
  color: white;
  padding: 5px 20px;
  &:hover {
    opacity: 0.7;
  }
`;
