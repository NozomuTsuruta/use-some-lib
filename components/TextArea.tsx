import React, { FC } from 'react';
import styled from 'styled-components';

interface TextAreaProps {
  value: string;
  setValue: Function;
}

const TextArea: FC<TextAreaProps> = ({ value, setValue }) => {
  return (
    <StyledTextArea
      value={value}
      onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
        setValue(e.target.value)
      }
      row={3}
    ></StyledTextArea>
  );
};

export default TextArea;

const StyledTextArea = styled.textarea`
  border-radius: 10px;
  &:hover {
    border-color: blue;
  }
`;
