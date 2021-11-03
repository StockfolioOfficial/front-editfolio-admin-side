import React, { Fragment } from 'react';
import styled from 'styled-components';

const LoginForm = () => {
  return (
    <Form>
      {INPUTS.map((item) => (
        <Fragment key={item.id}>
          <Label htmlFor={item.id}>{item.label}</Label>
          <Input placeholder={item.placeholder} id={item.id} name={item.id} />
        </Fragment>
      ))}
      <Button type="submit">로그인</Button>
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Label = styled.label`
  width: 100%;
  margin-bottom: 8px;
  color: ${({ theme }) => theme.color.gray};
  font-size: 11px;
  line-height: 1.4545454545;
`;

const Input = styled.input`
  width: 100%;
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

const Button = styled.button`
  width: 336px;
  height: 48px;
  margin-top: 60px;
  background-color: ${({ theme }) => theme.color.purple};
  border-radius: 6px;
  color: ${({ theme }) => theme.color.white};
`;

export default LoginForm;

const INPUTS = [
  {
    id: 'id',
    label: '아이디',
    placeholder: '아이디를 입력해주세요.',
  },
  {
    id: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력해주세요.',
  },
];
