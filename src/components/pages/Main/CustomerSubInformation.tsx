import React from 'react';
import styled from 'styled-components';

const CustomerSubInformation = () => {
  return (
    <>
      <DirectionLayout>
        <CustomerFirstSubLayout>
          <CustomerInfoTitle>고객명</CustomerInfoTitle>
          <CustomerLine>김승찬(프론트엔드)</CustomerLine>
        </CustomerFirstSubLayout>
        <CustomerFirstSubLayout>
          <CustomerInfoTitle>UID</CustomerInfoTitle>
          <CustomerLine>b733c0ef-d66b-434f-9240-7caa9b08d2e4</CustomerLine>
        </CustomerFirstSubLayout>
      </DirectionLayout>
      <DirectionLayout>
        <CustomerFirstSubLayout>
          <CustomerInfoTitle>이메일</CustomerInfoTitle>
          <CustomerLine>misomiin11@gmail.com</CustomerLine>
        </CustomerFirstSubLayout>
        <CustomerFirstSubLayout>
          <CustomerInfoTitle>전화번호</CustomerInfoTitle>
          <CustomerLine>010-1234-5678</CustomerLine>
        </CustomerFirstSubLayout>
      </DirectionLayout>
      <DirectionLayout>
        <CustomerFirstSubLayout>
          <CustomerPersonaTitle>페르소나</CustomerPersonaTitle>
          <CustomerLine href="https://https://stockfolio.notion.site/Stockers-1-657e6a9b069544758d5012ec9d0988e0">
            https://https://stockfolio.notion.site/Stockers-1-657e6a9b069544758d5012ec9d0988e0
          </CustomerLine>
        </CustomerFirstSubLayout>
      </DirectionLayout>
      <DirectionLayout>
        <CustomerFirstSubLayout>
          <CustomerPersonaTitle>OneDrive</CustomerPersonaTitle>
          <CustomerLine href="https://www.microsoft.com/ko-kr/microsoft-365/onedrive/online-cloud-storage">
            https://www.microsoft.com/ko-kr/microsoft-365/onedrive/online-cloud-storage
          </CustomerLine>
        </CustomerFirstSubLayout>
      </DirectionLayout>
      <DirectionLayout>
        <CustomerFirstSubLayout>
          <CustomerPersonaTitle>비고</CustomerPersonaTitle>
          <CustomerNote>
            가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사가나다라마바사
          </CustomerNote>
        </CustomerFirstSubLayout>
      </DirectionLayout>
    </>
  );
};

const DirectionLayout = styled.div`
  display: flex;
`;

const CustomerFirstSubLayout = styled.div`
  display: flex;
  width: 100%;
  margin: 24px 132px 0 0px;
`;

const CustomerInfoTitle = styled.div`
  display: flex;
  width: 124px;
  font-size: 13px;
  color: #77828b;
  font-weight: 400;
  line-height: 20px;
  padding: 14px 12px 14px 0px;
  margin: 0 0 0 36px;
`;

const CustomerPersonaTitle = styled.div`
  display: flex;
  width: 124px;
  font-size: 13px;
  color: #77828b;
  font-weight: 400;
  line-height: 20px;
  padding: 14px 12px 14px 0px;
  margin: 0 -15px 0 36px;
`;

const CustomerLine = styled.a`
  width: 100%;
  padding: 14px 0 0 12px;
  font-size: 13px;
  line-height: 20px;
  border-bottom: 1px solid #becbd8;
`;

const CustomerNote = styled.div`
  margin: 14px 0 74px 0;
  width: 100%;
  font-size: 13px;
  line-height: 20px;
`;

export default CustomerSubInformation;
