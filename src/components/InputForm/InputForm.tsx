import React from 'react';
import styled from 'styled-components';
import Inputs from './Inputs';

export interface inputProps {
  id: string;
  type: string;
  label: string;
  placeholder: string;
}

export interface inputsProps {
  inputs: inputProps[];
  button: JSX.Element;
  values: any;
  error?: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: () => void;
  handleError: () => void;
}

const InputForm = ({
  inputs,
  button,
  values,
  error,
  handleChange,
  handleSubmit,
  handleError,
}: inputsProps) => {
  return (
    <Form
      onSubmit={(e) => {
        handleError();
        handleSubmit();
        e.preventDefault();
      }}
    >
      {inputs.map((input) => (
        <Inputs
          key={input.id}
          input={input}
          value={values[input.id]}
          handleChange={handleChange}
        />
      ))}
      {error && <ErrorMessage>{error}</ErrorMessage>}
      {button}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 336px;
  margin: 0 auto;
`;

const ErrorMessage = styled.p`
  width: 100%;
  margin-top: -24px;
  padding: 0 0 0 12px;
  color: ${({ theme }) => theme.color.purple};
  font-size: 13px;
  line-height: 1.5384615385;
`;

export default InputForm;
