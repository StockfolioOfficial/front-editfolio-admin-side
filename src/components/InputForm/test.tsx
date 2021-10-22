import React from 'react';
import styled from 'styled-components';
import AddAdmin from 'components/Buttons/AddAdmin';
import InputForm from './InputForm';

const Test = () => {
  return (
    <Container>
      <InputForm inputs={INPUTS} button={<AddAdmin />} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const INPUTS = [
  {
    id: 'email',
    type: 'email',
    label: '이메일',
    placeholder: '이메일을 입력해주세요.',
  },
  {
    id: 'phone',
    type: 'tel',
    label: '전화번호',
    placeholder: '전화번호를 입력해주세요.',
  },
];

export default Test;
