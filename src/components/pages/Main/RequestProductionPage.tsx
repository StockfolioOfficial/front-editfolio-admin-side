import React, { useEffect } from 'react';
import useList from 'hooks/useList';
import OrderFetchData from 'service/fetchOrder';
import TitleHeader from 'components/TitleHeader';
import { useHistory, useLocation } from 'react-router';

const MENULIST = ['날짜', '고객명'];

const RequestProductionPage = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const { getReguestOrderList } = new OrderFetchData();

  const { CategoryView, OrderList } = useList('request', getReguestOrderList);

  useEffect(() => {
    if (pathname === '/request-production') return;
    history.replace('/request-production');
  }, []);

  return (
    <>
      <TitleHeader title="제작 의뢰 요청" />
      <CategoryView category={MENULIST} />
      <OrderList />
    </>
  );
};

export default RequestProductionPage;
