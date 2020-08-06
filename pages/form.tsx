import React from 'react';
import styled from 'styled-components';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

const Form = () => {
  
  return (
    <StyledForm>
      <Input />
      <Input />
      <TextArea />
      <Button />
    </StyledForm>
  );
};

export default Form;

const StyledForm = styled.form``;
