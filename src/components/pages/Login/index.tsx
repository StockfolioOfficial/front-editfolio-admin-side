import React from 'react';
import styled from 'styled-components';
import InputForm from 'components/InputForm/InputForm';
import LoginButton from 'components/Buttons/LoginButton';
import FetchData from 'service/fetch';
import { useHistory } from 'react-router';
import { useStores } from 'index';
import { observer } from 'mobx-react-lite';
import useInput from '../../../hooks/useInputs';
import useValidate from '../../../hooks/useValidate';

const Login = observer(() => {
  const history = useHistory();
  const { values, handleChange, handleSubmit, reset } = useInput({
    id: '',
    password: '',
  });

  const { isValid, error, handleError } = useValidate(values);

  const { login, getAdminData } = new FetchData();

  const { userStore } = useStores();
  const { setUser } = userStore;

  const submitData = async () => {
    if (!isValid) {
      reset();
      return;
    }
    const res = await login({
      username: values.id,
      password: values.password,
    });

    if (!res) return;

    const resData = await getAdminData();
    console.log(resData);
    if (!resData) return;
    setUser({
      name: resData.name,
      nickname: resData.nickname,
      email: resData.username,
      userId: resData.userId,
    });
    history.push('/');
  };

  return (
    <Container>
      <Box>
        <Logo src="/images/Logo.png" />
        <Img src="/images/login-image.png" />
        <Title>에딧폴리오 관리자 페이지</Title>
        <InputForm
          inputs={INPUTS}
          button={<LoginButton />}
          values={values}
          handleChange={handleChange}
          handleSubmit={() => handleSubmit(submitData)}
          handleError={handleError}
          error={error}
        />
      </Box>
    </Container>
  );
});

const Container = styled.div`
  width: 100%;
  height: 100%;
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

const INPUTS = [
  {
    id: 'id',
    type: 'text',
    label: '아이디',
    placeholder: '아이디를 입력해주세요.',
  },
  {
    id: 'password',
    type: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력해주세요.',
  },
];
