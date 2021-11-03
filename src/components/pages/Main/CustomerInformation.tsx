import React from 'react';
import styled from 'styled-components';
import CustomerSubInformation from './CustomerSubInformation';

interface customerProps {
  customerId: string;
  isRequest: boolean;
}

const CustomerInformation = ({ customerId, isRequest }: customerProps) => {
  return (
    <>
      {isRequest && <ProductSubTitle>고객 정보</ProductSubTitle>}
      <CustomerInfoBox>
        <CustomerSubInformation customerId={customerId} />
      </CustomerInfoBox>
    </>
  );
};

const CustomerInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 24px;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 6px;
`;
const ProductSubTitle = styled.div`
  width: 71px;
  height: 26px;
  margin-top: 32px;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

export default CustomerInformation;
