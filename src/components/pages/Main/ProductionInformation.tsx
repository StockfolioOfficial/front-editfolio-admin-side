import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

interface UserData {
  id: string;
  name: string;
  orderable_cnt: string;
  ordered_at_datetime: string;
  due_data: string;
  assignee: string;
  state: number;
  start: string;
  end: string;
}

const ProductionInformation = () => {
  const [userData, setUserData] = useState<UserData>({
    id: '',
    name: '',
    orderable_cnt: '',
    ordered_at_datetime: '',
    due_data: '',
    assignee: '',
    state: 1,
    start: '',
    end: '',
  });

  const fetchData = () => {
    fetch(`/data/proceeding1.json`)
      .then((res) => res.json())
      .then((users) => {
        setUserData(users);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ProductSubTitleBox>
        <ProductSubTitle>제작 정보</ProductSubTitle>
        <OrderNumber>(주문번호: {userData.id})</OrderNumber>
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
