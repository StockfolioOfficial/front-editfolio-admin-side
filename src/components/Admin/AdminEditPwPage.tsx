import React, { useState } from 'react';
import useInput from 'hooks/useInputs';
import FetchData from 'service/fetch';
import TitleHeader from 'components/TitleHeader';
import styled from 'styled-components';
import { useHistory, useParams } from 'react-router';
import UIButton, { LineButton } from 'components/Buttons/UIButton';
import InputForm from '../InputForm/InputForm';

const initValue = {
  password: '',
};

const AdminEditPwPage = () => {
  const history = useHistory();
  const param = useParams<{ id: string }>();
  const { editAdminPw } = new FetchData();
  const { values, handleChange, handleSubmit, reset } = useInput(initValue);
  const [error, setError] = useState('');

  const changeAdmin = async () => {
    if (!values.password) {
      window.alert('비밀번호를 입력해주세요.');
      return;
    }

    const regExpPw =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~\\])[A-Za-z\d!"#$%&'()*+,\-./:;<=>?@[\]^_`{|}~\\]{8,}$/;

    if (!regExpPw.test(values.password)) {
      setError('비밀번호 형식이 맞지 않습니다.');
      return;
    }

    const res = await editAdminPw(param.id, values.password);

    if (res) history.goBack();
    else window.alert('비밀번호를 변경하지 못했습니다.');
    reset();
  };

  const onChangePwInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (error) setError('');
    handleChange(e);
  };

  return (
    <>
      <TitleHeader title="비밀번호 변경" />
      <EditPwSection>
        <InputForm
          inputs={INPUTS}
          button={
            <EditButtonWrap>
              <LineButton
                type="button"
                width="100px"
                color="white"
                text="취소"
                onClick={() => history.goBack()}
              />
              <UIButton
                type="submit"
                width="228px"
                color="skyblue"
                text="비밀번호 수정"
              />
            </EditButtonWrap>
          }
          values={values}
          handleChange={onChangePwInput}
          handleSubmit={() => handleSubmit(changeAdmin)}
          error={error}
          handleError={() => undefined}
        />
      </EditPwSection>
    </>
  );
};

export default AdminEditPwPage;

const EditPwSection = styled.section`
  padding: 100px 0 0 calc(50% - 172px);
  border-top: 1px solid ${({ theme }) => theme.color.stone};

  > form {
    transform: translateX(-50%);
  }
`;

const EditButtonWrap = styled.div`
  display: flex;
  flex-flow: row wrap;
  gap: 8px;

  > button {
    font-weight: bold;
  }
`;

const INPUTS = [
  {
    id: 'password',
    type: 'text',
    label: '새 비밀번호',
    placeholder: '새 비밀번호를 입력해주세요.',
  },
];
