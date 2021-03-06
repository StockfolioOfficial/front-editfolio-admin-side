import React from 'react';
import styled from 'styled-components';
import { inputProps as inputItem } from './InputForm';

interface inputProps {
  input: inputItem;
  value: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs = ({ input, value, handleChange }: inputProps) => {
  return (
    <>
      <Label>{input.label}</Label>
      <Input
        placeholder={input.placeholder}
        name={input.id}
        value={value}
        onChange={handleChange}
        type={input.type}
      />
    </>
  );
};

const Label = styled.label`
  width: 100%;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.gray};
  font-size: 11px;
  line-height: 1.4545454545;
`;

const Input = styled.input`
  width: 336px;
  margin-bottom: 32px;
  padding: 14px 12px;
  border: 1px solid ${({ theme }) => theme.color.stone};
  border-radius: 6px;

  &::placeholder {
    color: ${({ theme }) => theme.color.paleBlue};
    font-size: 13px;
    line-height: 1.5384615385;
  }
`;

export default Inputs;
