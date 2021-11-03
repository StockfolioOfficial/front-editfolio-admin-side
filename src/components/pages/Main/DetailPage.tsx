import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import OrderFetchData, { OrderDetailModel } from 'service/fetchOrder';
import TitleHeader from 'components/TitleHeader';
import Header from '../Header';
import Aside from '../../Aside/Aside';
import ProductionInformation from './ProductionInformation';
import OrderControlPanel from './OrderControlPanel';
import CustomerInformation from './CustomerInformation';

const DetailPage = () => {
  const [orderData, setOrderData] = useState<OrderDetailModel>({
    orderId: '',
    orderState: 0,
    orderStateContent: '대기',
    orderedAt: `${Date.now()}`,
    orderer: '',
    remainingEditCount: 0,
  });
  const param = useParams<{ id: string; page: string }>();
  const { getOrderDetail } = new OrderFetchData();

  async function setOrderDetail() {
    try {
      const res = await getOrderDetail(param.id);
      if (!res) throw Error('주문정보를 가져오지 못했습니다.');
      setOrderData(res);
    } catch {
      console.error('주문정보를 가져오지 못했습니다.');
    }
  }

  function renderHeader() {
    switch (param.page) {
      case 'ongoing':
        return '제작 의뢰 진행중';
      case 'edit':
        return '제작 수정 중...';
      case 'complete':
        return '제작 의뢰 완료';
      default:
        return '제작 의뢰 요청';
    }
  }

  useEffect(() => {
    setOrderDetail();
  }, [param.id, param.page]);

  return (
    <>
      <Header />
      <MainBox>
        <Aside />
        <MainLayout>
          <TitleHeader title={renderHeader()} />
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
