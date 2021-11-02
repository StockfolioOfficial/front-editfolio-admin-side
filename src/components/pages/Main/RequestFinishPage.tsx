import React from 'react';
import styled from 'styled-components';
import useList from 'hooks/useList';
import OrderFetchData from 'service/fetchOrder';
import TitleHeader from 'components/TitleHeader';
import Nav from '../Header';
import Aside from '../../Aside/Aside';

const MENULIST = ['날짜', '이름', '상태'];

const RequestFinishPage = () => {
  const { getFinishOrderList } = new OrderFetchData();

  const { CategoryView, OrderList } = useList(
    'complete',
    'request',
    getFinishOrderList,
  );

  return (
    <>
      <Nav />
      <MainBox>
        <Aside />
        <MainLayout>
          <TitleHeader
            title="제작 의뢰 완료"
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
  background-color: #fafafa;
`;

export default RequestFinishPage;
