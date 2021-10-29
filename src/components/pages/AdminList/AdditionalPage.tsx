import React from 'react';
import styled from 'styled-components';
import useInput from 'hooks/useInputs';
import useValidate from 'hooks/useValidate';
import FetchData from 'service/fetch';
import TitleHeader from 'components/TitleHeader/TitleHeader';
import InputForm from '../../InputForm/InputForm';
import AddButton from '../../Buttons/AddButton';

const AdditionalPage = () => {
  const { values, handleChange, handleSubmit, reset } = useInput({
    name: '',
    email: '',
    nickname: '',
    password: '',
  });

  const { handleError } = useValidate(values);

  const fetch = new FetchData();

  const addCustom = () => {
    if (!values.name || !values.email || !values.nickname || !values.password)
      return;
    fetch.fetchAdd(values).then((res) => console.log(res));
    reset();
  };

  return (
    <>
      <TitleHeader
        title="어드민 추가"
        placeholder=""
        isSearch={false}
        isButton={false}
        buttonTitle=""
        click=""
      />
      <Margin />
      <InputForm
        inputs={INPUTS}
        button={<AddButton />}
        values={values}
        handleChange={handleChange}
        handleSubmit={() => handleSubmit(addCustom)}
        handleError={handleError}
      />
    </>
  );
};

const Margin = styled.div`
  margin-bottom: 100px;
`;

export default AdditionalPage;

const INPUTS = [
  {
    id: 'email',
    type: 'email',
    label: '이메일',
    placeholder: '이메일을 입력해주세요.',
  },
  {
    id: 'password',
    type: 'password',
    label: '비밀번호',
    placeholder: '비밀번호를 입력해주세요',
  },
  {
    id: 'name',
    type: 'text',
    label: '이름',
    placeholder: '이름를 입력해주세요.',
  },
  {
    id: 'nickname',
    type: 'text',
    label: '닉네임',
    placeholder: '닉네임를 입력해주세요.',
  },
];
