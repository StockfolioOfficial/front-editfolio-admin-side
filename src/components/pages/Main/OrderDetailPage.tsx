import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router';
import OrderFetchData, { OrderDetailModel } from 'service/fetchOrder';
import TitleHeader from 'components/TitleHeader';
import OrderControlPanel from '../../Oreder/OrderControlPanel';
import CustomerInformation from '../../Customer/CustomerInformation';

const OrderDetailPage = () => {
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
      <TitleHeader title={renderHeader()} />
      <DetailSection>
        <DetailSectionTitle>제작 정보</DetailSectionTitle>
        <OrderNumber>(주문번호: {param.id})</OrderNumber>
        <OrderControlPanel page={param.page} data={orderData} />
      </DetailSection>
      <DetailSection>
        <DetailSectionTitle>고객 정보</DetailSectionTitle>
        <CustomerInformation customerId={orderData.orderer} />
      </DetailSection>
    </>
  );
};

const DetailSection = styled.section`
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.color.stone};
`;

const DetailSectionTitle = styled.h3`
  display: inline-block;
  margin-bottom: 24px;
  font-size: 18px;
  font-weight: 700;
  line-height: 26px;
`;

const OrderNumber = styled.span`
  margin-left: 8px;
  color: #77828b;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
`;

export default OrderDetailPage;
