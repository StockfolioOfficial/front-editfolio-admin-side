import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';

const Login = () => {
  return (
    <Container>
      <Box>
        <Logo src="/images/Logo.png" />
        <Img src="/images/login-image.png" />
        <Title>에딧폴리오 관리자 페이지</Title>
        <LoginForm />
      </Box>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #fafafa;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 348px;
  margin: 0 auto;
`;

const Logo = styled.img`
  width: 120px;
  height: 32px;
  margin: 40px 0 32px;
`;

const Img = styled.img`
  width: 348px;
  height: 244px;
  margin-bottom: 16px;
`;

const Title = styled.h1`
  margin-bottom: 80px;
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4166666667;
  letter-spacing: 0.2px;
`;

export default Login;
