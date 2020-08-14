import React, { FC, useState } from 'react';
import styled, { css } from 'styled-components';

interface InputProps {
  setValue: Function;
  label: string;
  value: string;
  type: 'text' | 'number';
}

const Input: FC<InputProps> = ({ label, value, setValue, type }) => {
  const [focus, setFocus] = useState(false);

  return (
    <Group>
      <Label value={value as any} focus={focus}>
        {label}
      </Label>
      <StyledInput
        type={type}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
    </Group>
  );
};

export default Input;

const Color = {
  GRAY: '#101010',
  BLACK: '#000000',
};

const mixinShrinkLabel = css`
  top: -14px;
  font-size: 12px;
  color: ${Color.BLACK};
`;

const StyledInput = styled.input`
  background: none;
  background-color: white;
  color: ${Color.GRAY};
  font-size: 18px;
  padding: 10px 10px 10px 5px;
  display: block;
  width: 100%;
  border: none;
  border-radius: 0;
  border-bottom: 1px solid ${Color.GRAY};
  margin: 25px 0;

  &:focus {
    outline: none;
  }
`;

const Label = styled.label<{ value: string; focus: boolean }>`
  color: ${Color.GRAY};
  font-size: 16px;
  font-weight: normal;
  position: absolute;
  pointer-events: none;
  left: 5px;
  top: 10px;
  transition: 300ms ease all;

  ${({ focus }) => focus && mixinShrinkLabel}
  ${({ value }) => value?.length > 0 && mixinShrinkLabel}
`;

const Group = styled.div`
  position: relative;
  margin: 45px 0;
`;
