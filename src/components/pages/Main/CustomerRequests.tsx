import React from 'react';
import styled from 'styled-components';

const CustomerRequests = () => {
  return (
    <>
      <OrderDateTitle>고객 요청사항</OrderDateTitle>
      <CutomerRequestBox>이러쿵 저러쿵</CutomerRequestBox>
    </>
  );
};

const OrderDateTitle = styled.div`
  margin: 38px 0 0 40px;
  color: #77828b;
  font-size: 13px;
  line-height: 20px;
`;

const CutomerRequestBox = styled.div`
  height: 240px;
  margin: 8px 18px 0 32px;
  padding: 16px 16px 0 16px;
  border: 1px solid #eeeeee;
  border-radius: 6px;
  background-color: #ffffff;
  font-size: 13px;
  line-height: 20px;
`;
export default CustomerRequests;
