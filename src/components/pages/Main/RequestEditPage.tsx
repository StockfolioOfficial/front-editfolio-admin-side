import React from 'react';
import styled from 'styled-components';
import useList from 'hooks/useList';
import OrderFetchData from 'service/fetchOrder';
import TitleHeader from 'components/TitleHeader';
import Nav from '../Header';
import Aside from '../../Aside/Aside';

const MENULIST = ['날짜', '고객명', '상태'];

const RequestEditPage = () => {
  const { getEditOrderList } = new OrderFetchData();

  const { CategoryView, OrderList } = useList('edit', getEditOrderList);

  return (
    <>
      <Nav />
      <MainBox>
        <Aside />
        <MainLayout>
          <TitleHeader title="제작 수정 요청" />
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
  padding: 0 32px;
  background-color: #fafafa;
`;

export default RequestEditPage;
