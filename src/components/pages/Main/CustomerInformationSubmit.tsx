import TitleHeader from 'components/TitleHeader/TitleHeader';
import React, { useEffect } from 'react';
import styled from 'styled-components';
import useInput from 'hooks/useInputs';

// interface userInfo {
//   assignee: string;
//   due_data: string;
//   end: string;
//   id: string;
//   name: string;
//   orderable_cnt: string;
//   ordered_at_datetime: string;
//   start: string;
//   state: number;
// }

const CustomerInformationSubmit = () => {
  const { values, handleChange, setValues } = useInput({
    assignee: '',
    due_data: '',
    end: '',
    id: '',
    name: '',
    orderable_cnt: '',
    ordered_at_datetime: '',
    start: '',
    state: 1,
  });

  const fetchData = () => {
    fetch(`/data/proceeding1.json`)
      .then((res) => res.json())
      .then((users) => {
        setValues(users);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <TitleHeader title="고객정보" placeholder="" isSearch={false} />
      <CustomerInfoLayout>
        <CustomerDirectLayout>
          <BoxLayout>
            <CustomerInfoTitle>고객명</CustomerInfoTitle>
            <InfoTextArea
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </BoxLayout>
          <BoxLayout>
            <CustomerInfoTitle>채널명</CustomerInfoTitle>
            <InfoTextArea
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </BoxLayout>
          <BoxLayout>
            <CustomerInfoTitle>채널주소</CustomerInfoTitle>
            <InfoMiddleTextArea
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </BoxLayout>
        </CustomerDirectLayout>
        <CustomerDirectLayout>
          <BoxLayout>
            <CustomerInfoTitle>이메일</CustomerInfoTitle>
            <InfoTextArea
              name="name"
              value={values.name}
              onChange={handleChange}
            />
          </BoxLayout>
          <BoxLayout>
            <CustomerInfoTitle>전화번호</CustomerInfoTitle>
            <InfoTextArea />
          </BoxLayout>
          <BoxLayout>
            <CustomerInfoTitle>페르소나</CustomerInfoTitle>
            <InfoMiddleTextArea />
          </BoxLayout>
        </CustomerDirectLayout>
        <CustomerDirectLayout>
          <BoxLayout>
            <CustomerInfoTitle>OneDrive</CustomerInfoTitle>
            <InfoLongTextArea />
          </BoxLayout>
        </CustomerDirectLayout>
        <CustomerDirectLayout>
          <BoxLayout>
            <CustomerInfoTitle>비고</CustomerInfoTitle>
            <InfoNoteTextArea />
          </BoxLayout>
        </CustomerDirectLayout>
      </CustomerInfoLayout>
    </>
  );
};

const CustomerInfoLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

const CustomerDirectLayout = styled.div`
  display: flex;
`;

const BoxLayout = styled.div`
  display: flex;
  flex-direction: column;
  margin: 32px 32px 0 32px;
`;

const CustomerInfoTitle = styled.div`
  display: flex;
  width: 124px;
  font-size: 13px;
  color: #77828b;
  font-weight: 400;
  line-height: 20px;
  padding: 14px 12px 14px 0px;
`;

const InfoTextArea = styled.input`
  width: 240px;
  height: 48px;
  padding: 14px 0 14px 12px;
  font-size: 13px;
  border: 1px solid #eeeeee;
  background-color: #ffffff;
  border-radius: 6px;
`;

const InfoMiddleTextArea = styled.input`
  width: 672px;
  height: 48px;
  padding: 14px 0 14px 12px;
  border: 1px solid #eeeeee;
  font-size: 13px;
  background-color: #ffffff;
  border-radius: 6px;
`;

const InfoLongTextArea = styled.input`
  width: 1278px;
  height: 48px;
  padding: 14px 0 14px 12px;
  border: 1px solid #eeeeee;
  font-size: 13px;
  background-color: #ffffff;
  border-radius: 6px;
`;

const InfoNoteTextArea = styled.input`
  width: 1278px;
  height: 256px;
  padding: 14px 0 14px 12px;
  border: 1px solid #eeeeee;
  font-size: 13px;
  background-color: #ffffff;
  border-radius: 6px;
`;

export default CustomerInformationSubmit;
