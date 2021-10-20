import React from 'react';
import styled from 'styled-components';

const ProductionInformation = () => {
  return (
    <>
      <ProductSubTitleBox>
        <ProductSubTitle>제작 정보</ProductSubTitle>
        <OrderNumber>
          (주문번호: 550e8400-e29b-41d4-a716-446655440000)
        </OrderNumber>
      </ProductSubTitleBox>
    </>
  );
};

const ProductSubTitleBox = styled.div`
  display: flex;
`;

const ProductSubTitle = styled.div`
  width: 71px;
  height: 26px;
  margin: 24px 8px 26px 40px;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

const OrderNumber = styled.p`
  margin-top: 27px;
  color: #77828b;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
`;
export default ProductionInformation;
