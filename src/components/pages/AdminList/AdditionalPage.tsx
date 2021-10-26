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
    id: '',
    mobile: '',
  });

  const { handleError } = useValidate(values);

  const fetch = new FetchData();

  const addCustom = () => {
    if (!values.name || !values.id || !values.mobile) return;
    fetch.fetchAdd(values).then((res) => console.log(res));
    reset();
  };

  return (
    <>
      <TitleHeader title="고객추가" placeholder="" isSearch={false} />
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
    id: 'name',
    type: 'text',
    label: '고객명',
    placeholder: '이름을 입력해주세요.',
  },
  {
    id: 'id',
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
