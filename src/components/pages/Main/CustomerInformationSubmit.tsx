import TitleHeader from 'components/TitleHeader/TitleHeader';
import React, { useEffect } from 'react';
import styled from 'styled-components';

const CustomerInformationSubmit = () => {
  return (
    <>
      <TitleHeader placeholder="" isSearch={false} />
      <CustomerInfoLayout>
        <CustomerDirectLayout>
          <BoxLayout>
            <CustomerInfoTitle>고객명</CustomerInfoTitle>
            <InfoTextArea />
          </BoxLayout>
          <BoxLayout>
            <CustomerInfoTitle>채널명</CustomerInfoTitle>
            <InfoTextArea />
          </BoxLayout>
          <BoxLayout>
            <CustomerInfoTitle>채널주소</CustomerInfoTitle>
            <InfoMiddleTextArea />
          </BoxLayout>
        </CustomerDirectLayout>
        <CustomerDirectLayout>
          <BoxLayout>
            <CustomerInfoTitle>이메일</CustomerInfoTitle>
            <InfoTextArea />
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
