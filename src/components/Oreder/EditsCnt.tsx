import React from 'react';
import styled from 'styled-components';

interface EditsCntProps {
  editCount: number;
}

const EditsCnt = ({ editCount }: EditsCntProps) => {
  return (
    <>
      <CorrectionTitle>수정 가능 횟수</CorrectionTitle>
      <ButtonWraper>
        <CorrectionButton type="submit">
          수정 완료({editCount})
        </CorrectionButton>
      </ButtonWraper>
    </>
  );
};

const CorrectionTitle = styled.div`
  margin-bottom: 8px;
  color: #77828b;
  font-size: 13px;
  line-height: 20px;
  text-align: center;
`;

const ButtonWraper = styled.div`
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CorrectionButton = styled.button`
  width: 105px;
  height: 32px;
  color: #ffffff;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  background-color: #5d4ee8;
  align-items: center;
`;
export default EditsCnt;
