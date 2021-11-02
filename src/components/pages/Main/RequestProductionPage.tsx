import React, { useEffect } from 'react';
import styled from 'styled-components';
import useList from 'hooks/useList';
import OrderFetchData from 'service/fetchOrder';
import TitleHeader from 'components/TitleHeader';
import { useHistory, useLocation } from 'react-router';
import Nav from '../Header';
import Aside from '../../Aside/Aside';

const MENULIST = ['날짜', '고객명(채널명)'];

const RequestProductionPage = () => {
  const { pathname } = useLocation();
  const history = useHistory();

  const { getReguestOrderList } = new OrderFetchData();

  const { CategoryView, OrderList } = useList(
    'request',
    'request',
    getReguestOrderList,
  );

  useEffect(() => {
    // console.log(pathname);
    if (pathname === '/request-production') return;
    history.replace('/request-production');
  }, []);

  return (
    <>
      <Nav />
      <MainBox>
        <Aside />
        <MainLayout>
          <TitleHeader
            title="제작 의뢰 요청"
            placeholder="휴대폰 번호 검색"
            // isSearch
          />
          <CategoryView category={MENULIST} />
          <OrderList />
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
  padding: 40px 32px;
  background-color: #fafafa;
`;

export default RequestProductionPage;
