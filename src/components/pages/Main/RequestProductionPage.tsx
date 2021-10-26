import React from 'react';
import styled from 'styled-components';
import ListPage from 'components/UserList/ListPage';
import TitleHeader from 'components/TitleHeader/TitleHeader';
import Nav from '../Nav/Nav';
import Aside from '../../Aside/Aside';

const List = [
  {
    name: '김승찬',
    orderable_cnt: '4',
    ordered_at_datetime: '2021-10-12 14:51:30',
    due_data: '2021-10-17',
    assignee: '편집자',
    state: 0,
    start: '2021-10-12',
    end: '2021-10-12',
  },
];

const DATEMENU = ['날짜', '고객명(채널명)'];

const RequestProductionPage = () => {
  return (
    <>
      <Nav />
      <MainBox>
        <Aside />
        <MainLayout>
          <TitleHeader
            title="제작 의뢰 요청"
            placeholder="휴대폰 번호 검색"
            isSearch
          />
          <ListPage userList={List} list={DATEMENU} />
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
