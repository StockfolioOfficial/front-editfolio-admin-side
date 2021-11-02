import React from 'react';
import styled from 'styled-components';
import useList from 'hooks/useList';

import FetchData from 'service/fetch';
import TitleHeader from 'components/TitleHeader/TitleHeader';
import Nav from '../Nav/Nav';
import Aside from '../../Aside/Aside';

const MENULIST = ['날짜', '이름', ' 편집자', '전화번호'];

const CustomerListPage = () => {
  const fetch = new FetchData();

  const { renderCategory, renderList } = useList(
    'customerList',
    'request',
    fetch.customerFetchList,
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
            isSearch
          />

          {renderCategory(MENULIST)}
          {renderList()}
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

export default CustomerListPage;