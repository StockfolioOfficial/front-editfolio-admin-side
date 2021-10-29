import React from 'react';
import styled from 'styled-components';

interface InfomationProps {
  orderId: string;
}

const ProductionInformation = ({ orderId }: InfomationProps) => {
  return (
    <ProductSubTitleBox>
      <ProductSubTitle>제작 정보</ProductSubTitle>
      <OrderNumber>(주문번호: {orderId})</OrderNumber>
    </ProductSubTitleBox>
  );
};

const ProductSubTitleBox = styled.div`
  display: flex;
  align-items: center;
  padding-top: 24px;
`;

const ProductSubTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

const OrderNumber = styled.p`
  margin-left: 8px;
  color: #77828b;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
`;

export default ProductionInformation;
