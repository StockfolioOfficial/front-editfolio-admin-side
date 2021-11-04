import React from 'react';
import styled from 'styled-components';

interface CustomerRequestsProps {
  content?: string;
}

const CustomerRequests = ({ content }: CustomerRequestsProps) => {
  return (
    <>
      <OrderDateTitle>고객 요청사항</OrderDateTitle>
      <CutomerRequestBox>
        {content || '고객 요청 사항이 없습니다.'}
      </CutomerRequestBox>
    </>
  );
};

CustomerRequests.defaultProps = {
  content: undefined,
};

const OrderDateTitle = styled.div`
  margin: 38px 0 0 8px;
  color: #77828b;
  font-size: 13px;
  line-height: 20px;
`;

const CutomerRequestBox = styled.div`
  height: 240px;
  margin-top: 8px;
  padding: 16px;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  background-color: #ffffff;
  font-size: 13px;
  line-height: 20px;
`;
export default CustomerRequests;
