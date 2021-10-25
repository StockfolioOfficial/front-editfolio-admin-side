import React from 'react';
import styled from 'styled-components';

const EditsCnt = () => {
  return (
    <>
      <CorrectionTitle>수정 가능 횟수</CorrectionTitle>
      <CorrectionButton>수정 완료(2)</CorrectionButton>
    </>
  );
};

const CorrectionTitle = styled.div`
  margin: 26px 0 0 40px;
  color: #77828b;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
`;

const CorrectionButton = styled.button`
  width: 105px;
  height: 32px;
  color: #ffffff;
  margin: 15px 0 0 40px;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  background-color: #5d4ee8;
  align-items: center;
`;
export default EditsCnt;
