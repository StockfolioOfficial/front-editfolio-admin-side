import React, { useEffect } from 'react';
import styled from 'styled-components';
import useList from 'hooks/useList';
import FetchData from 'service/fetch';
import TitleHeader from 'components/TitleHeader/TitleHeader';
import { useHistory, useLocation } from 'react-router';
import Nav from '../Nav/Nav';
import Aside from '../../Aside/Aside';

const MENULIST = ['날짜', '고객명(채널명)'];

const RequestProductionPage = () => {
  const handleFetch = new FetchData();
  const { pathname } = useLocation();
  const history = useHistory();

  const { renderCategory, renderOrderList } = useList(
    'request',
    'request',
    handleFetch.requestFetchList,
  );

  useEffect(() => {
    console.log(pathname);
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

          {renderCategory(MENULIST)}
          {renderOrderList()}
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

export default RequestProductionPage;
