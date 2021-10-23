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
}

const InputForm = ({ inputs, button }: inputsProps) => {
  return (
    <Form>
      {inputs.map((input) => (
        <Inputs key={input.id} input={input} />
      ))}
      {button}
    </Form>
  );
};

const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 336px;
  margin: 100px auto;
`;

export default InputForm;
