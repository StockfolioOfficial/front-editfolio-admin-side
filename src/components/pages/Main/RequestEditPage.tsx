import React from 'react';
import useList from 'hooks/useList';
import OrderFetchData from 'service/fetchOrder';
import TitleHeader from 'components/TitleHeader';

const MENULIST = ['날짜', '고객명', '상태'];

const RequestEditPage = () => {
  const { getEditOrderList } = new OrderFetchData();

  const { CategoryView, OrderList } = useList('edit', getEditOrderList);

  return (
    <>
      <TitleHeader title="제작 수정 요청" />
      <CategoryView category={MENULIST} />
      <OrderList />
    </>
  );
};

export default RequestEditPage;
