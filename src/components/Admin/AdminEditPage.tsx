import React from 'react';
import useInput from 'hooks/useInputs';
import FetchData from 'service/fetch';
import TitleHeader from 'components/TitleHeader';
import styled from 'styled-components';
import { useHistory, useLocation, useParams } from 'react-router';
import UIButton, { LineButton } from 'components/Buttons/UIButton';
import InputForm from '../InputForm/InputForm';

const initValue = {
  name: '',
  email: '',
  nickname: '',
};

const AdminEditPage = () => {
  const history = useHistory();
  const location = useLocation<{ data?: typeof initValue }>();
  const param = useParams<{ id: string }>();
  const { data } = location.state;
  const { editAdmin } = new FetchData();
  const { values, handleChange, handleSubmit, reset } = useInput(
    data || initValue,
  );

  const changeAdmin = async () => {
    if (!values.name || !values.email || !values.nickname) {
      window.alert('모든 값을 입력해주세요.');
      return;
    }
    const res = await editAdmin(param.id, values);

    if (res) history.push('/admin-list');
    else window.alert('계정 정보를 수정하지 못했습니다.');
    reset();
  };

  return (
    <>
      <TitleHeader title="어드민 수정" />
      <EditSection>
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
                text="수정완료"
              />
              <ChangePwButton
                type="button"
                onClick={() => history.push(`/admin-edit-pw/${param.id}`)}
              >
                비밀번호 변경
              </ChangePwButton>
            </EditButtonWrap>
          }
          values={values}
          handleChange={handleChange}
          handleSubmit={() => handleSubmit(changeAdmin)}
          handleError={() => undefined}
        />
      </EditSection>
    </>
  );
};

export default AdminEditPage;

const EditSection = styled.section`
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

const ChangePwButton = styled.button`
  margin: 0 auto;
  padding: 11px 22px;
  font-size: 12px;
  color: ${({ theme }) => theme.color.skyblue};
`;

const INPUTS = [
  {
    id: 'email',
    type: 'email',
    label: '이메일',
    placeholder: '이메일을 입력해주세요.',
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
