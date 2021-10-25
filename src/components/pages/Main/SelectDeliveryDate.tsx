import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowSvg } from '../../../assets/styles/arrowPurple.svg';

const SelectDeliveryDate = () => {
  return (
    <>
      <OrderDateTitle>납품 예정일</OrderDateTitle>
      <DateBox>
        <DateSelect type="date" />
        <ArrowIcon />
      </DateBox>
    </>
  );
};

const OrderDateTitle = styled.div`
  margin: 26px 0 0 56px;
  color: #77828b;
  font-size: 13px;
  line-height: 20px;
`;

const DateBox = styled.div`
  margin: 8px 0 0 56px;
  border-radius: 6px;
  background-color: #ffffff;
`;

const DateSelect = styled.input`
  padding: 14px 0 14px 16px;
  font-size: 13px;
  line-height: 20px;
`;

const ArrowIcon = styled(ArrowSvg)`
  margin-right: 21px;
`;

export default SelectDeliveryDate;
