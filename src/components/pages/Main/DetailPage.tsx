import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import FetchData from 'service/fetch';
import TitleHeader from 'components/TitleHeader/TitleHeader';
import Nav from '../Nav/Nav';
import Aside from '../../Aside/Aside';
import ProductionInformation from './ProductionInformation';
import OrderControlPanel from './OrderControlPanel';
import CustomerInformation from './CustomerInformation';

interface AssigneeType {
  assignee: string;
  assigneeName: string;
  assigneeNickname: string;
}

export interface OrderDataType {
  assignee?: AssigneeType;
  dueDate?: string;
  orderId: string;
  orderState: number;
  orderStateContent: string;
  orderedAt: string;
  orderer: string;
  remainingEditCount: number;
  requirement?: string;
}

const DetailPage = () => {
  const [orderData, setOrderData] = useState<OrderDataType>({
    orderId: '',
    orderState: 0,
    orderStateContent: '주문상태',
    orderedAt: '',
    remainingEditCount: 0,
    orderer: '',
  });
  const param = useParams<{ id: string; page: string }>();
  const handleFetch = new FetchData();

  async function setOrderDetail() {
    try {
      const res = (await handleFetch.requestOrderDetail(
        param.id,
      )) as OrderDataType;
      setOrderData(res);
    } catch {
      console.error('주문정보를 가져오지 못했습니다.');
    }
  }

  useEffect(() => {
    setOrderDetail();
  }, [param.id]);
  return (
    <>
      <Nav />
      <MainBox>
        <Aside />
        <MainLayout>
          <TitleHeader title="제작 의뢰 완료" />
          <ProductionInformation orderId={orderData.orderId} />
          <OrderControlPanel page={param.page} data={orderData} />
          <CustomerInformation customerId={orderData.orderer} isRequest />
        </MainLayout>
      </MainBox>
    </>
  );
};

const MainBox = styled.main`
  display: flex;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 32px;
  background-color: #fafafa;
`;

export default DetailPage;
