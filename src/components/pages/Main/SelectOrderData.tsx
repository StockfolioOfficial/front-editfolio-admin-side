import React from 'react';
import styled from 'styled-components';

const SelectOrderData = () => {
  return (
    <>
      <OrderDateTitle>주문 일시</OrderDateTitle>
      <OrderDate>2021/09/24(월) • 10:22:43</OrderDate>
    </>
  );
};

const OrderDateTitle = styled.div`
  margin: 26px 0 0 40px;
  color: #77828b;
  font-size: 13px;
  line-height: 20px;
`;

const OrderDate = styled.div`
  margin: 22px 0 0 40px;
  font-size: 13px;
  line-height: 20px;
`;

export default SelectOrderData;
