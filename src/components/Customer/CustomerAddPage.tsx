import React from 'react';
import useInput from 'hooks/useInputs';
import useValidate from 'hooks/useValidate';
import FetchData from 'service/fetch';
import TitleHeader from 'components/TitleHeader';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import InputForm from '../InputForm/InputForm';
import AddButton from '../Buttons/AddButton';

const CustomerAddPage = () => {
  const { values, handleChange, handleSubmit, reset } = useInput({
    name: '',
    email: '',
    mobile: '',
  });
  const { handleError } = useValidate({
    id: values.email,
    password: values.mobile,
  });
  const history = useHistory();
  const { createCustomer } = new FetchData();

  const addCustomer = async () => {
    if (!values.name || !values.email || !values.mobile) return;
    const res = await createCustomer(values);
    reset();
    if (!res) window.alert('고객을 생성하지 못했습니다.');
    else history.push('/customer-list');
  };

  return (
    <>
      <TitleHeader title="고객추가" />
      <AddSection>
        <InputForm
          inputs={INPUTS}
          button={<AddButton />}
          values={values}
          handleChange={handleChange}
          handleSubmit={() => handleSubmit(addCustomer)}
          handleError={handleError}
        />
      </AddSection>
    </>
  );
};

export default CustomerAddPage;

const AddSection = styled.section`
  padding: 100px 0 0 calc(50% - 172px);
  border-top: 1px solid ${({ theme }) => theme.color.stone};

  > form {
    transform: translateX(-50%);
  }
`;

const INPUTS = [
  {
    id: 'name',
    type: 'text',
    label: '고객명',
    placeholder: '이름을 입력해주세요.',
  },
  {
    id: 'email',
    type: 'email',
    label: '이메일',
    placeholder: '이메일을 입력해주세요.',
  },
  {
    id: 'mobile',
    type: 'tel',
    label: '전화번호',
    placeholder: '전화번호를 입력해주세요.',
  },
];
