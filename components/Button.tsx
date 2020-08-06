import React, { FC } from 'react'
import styled from 'styled-components'

interface ButtonProps {
  handleSubmit: Function;
  value: string;
  type: 'button'|'submit';
}

const Button: FC<ButtonProps> = ({value,handleSubmit,type}) => {
  return (
  <StyledButton type={type} onSubmit = {handleSubmit}>{value}</StyledButton>>
  )
}

export default Button

const StyledButton = styled.button`
  background-color: black;
  color: white;
  padding: 5px 20px;
  &:hover {
    opacity: 0.7;
  }
`
