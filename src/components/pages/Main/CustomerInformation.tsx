import React from 'react';
import styled from 'styled-components';
import CustomerSubInformation from './CustomerSubInformation';

const CustomerInformation = () => {
  return (
    <>
      <Linner />
      <ProductSubTitle>고객 정보</ProductSubTitle>
      <CustomerInfoBox>
        <CustomerSubInformation />
      </CustomerInfoBox>
    </>
  );
};

const CustomerInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 24px 18px 138px 32px;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 6px;
`;
const ProductSubTitle = styled.div`
  width: 71px;
  height: 26px;
  margin: 24px 8px 26px 40px;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

const Linner = styled.span`
  height: 1px;
  margin: 47px 18px 0 32px;
  background-color: ${({ theme }) => theme.color.stone};
`;

export default CustomerInformation;
