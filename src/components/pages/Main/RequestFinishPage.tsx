import React from 'react';
import useList from 'hooks/useList';
import OrderFetchData from 'service/fetchOrder';
import TitleHeader from 'components/TitleHeader';

const MENULIST = ['날짜', '고객명', '상태'];

const RequestFinishPage = () => {
  const { getFinishOrderList } = new OrderFetchData();

  const { CategoryView, OrderList } = useList('complete', getFinishOrderList);

  return (
    <>
      <TitleHeader title="제작 의뢰 완료" />
      <CategoryView category={MENULIST} />
      <OrderList />
    </>
  );
};

export default RequestFinishPage;
