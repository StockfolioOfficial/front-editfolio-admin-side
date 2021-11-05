import React from 'react';
import useInput from 'hooks/useInputs';
import useValidate from 'hooks/useValidate';
import FetchData from 'service/fetch';
import TitleHeader from 'components/TitleHeader';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import InputForm from '../InputForm/InputForm';
import AddButton from '../Buttons/AddButton';

const AdminAddPage = () => {
  const { values, handleChange, handleSubmit, reset } = useInput({
    name: '',
    email: '',
    nickname: '',
    password: '',
  });
  const { handleError } = useValidate({
    id: values.email,
    password: values.password,
  });
  const history = useHistory();
  const { createAdmin } = new FetchData();

  const addAdmin = async () => {
    if (!values.name || !values.email || !values.nickname || !values.password) {
      window.alert('모든 값을 입력해주세요.');
      return;
    }
    const res = await createAdmin(values);

    if (res) history.push('/admin-list');
    else window.alert('계정을 생성하지 못했습니다.');
    reset();
  };

  return (
    <>
      <TitleHeader title="어드민 추가" />
      <AddSection>
        <InputForm
          inputs={INPUTS}
          button={<AddButton />}
          values={values}
          handleChange={handleChange}
          handleSubmit={() => handleSubmit(addAdmin)}
          handleError={handleError}
        />
      </AddSection>
    </>
  );
};

export default AdminAddPage;

const AddSection = styled.section`
  padding: 100px 0 0 calc(50% - 172px);
  border-top: 1px solid ${({ theme }) => theme.color.stone};

  > form {
    transform: translateX(-50%);
  }
`;

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
    placeholder: '비밀번호를 입력해주세요.',
  },
  {
    id: 'name',
    type: 'text',
    label: '이름',
    placeholder: '이름을 입력해주세요.',
  },
  {
    id: 'nickname',
    type: 'text',
    label: '닉네임',
    placeholder: '닉네임을 입력해주세요.',
  },
];
