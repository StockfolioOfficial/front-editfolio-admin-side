import React from 'react';
import TitleHeader from '../../TitleHeader/TitleHeader';
import ListPage from '../../UserList/ListPage';

const CustomerList = () => {
  return (
    <>
      <TitleHeader
        title="고객 목록"
        placeholder="이메일, 고객명, 닉네임, 전화번호 검색"
        isSearch
      />
      <ListPage list={CATEGORY} userList={CUSTOMER} />
    </>
  );
};

export default CustomerList;

const CATEGORY = ['날짜', '고객명(채널명)', '이메일', '전화번호'];

const CUSTOMER = [
  {
    name: '김승찬',
    orderable_cnt: '4',
    ordered_at_datetime: '2021-10-12 14:51:30',
    due_data: '2021-10-17',
    assignee: '편집자',
    state: 4,
    start: '2021-10-12',
    end: '2021-11-12',
  },
  {
    name: '김승찬',
    orderable_cnt: '4',
    ordered_at_datetime: '2021-10-12 14:51:30',
    due_data: '2021-10-17',
    assignee: '편집자',
    state: 4,
    start: '2021-10-12',
    end: '2021-11-12',
  },
  {
    name: '김승찬',
    orderable_cnt: '4',
    ordered_at_datetime: '2021-10-12 14:51:30',
    due_data: '2021-10-17',
    assignee: '편집자',
    state: 4,
    start: '2021-10-12',
    end: '2021-11-12',
  },
  {
    name: '김승찬',
    orderable_cnt: '4',
    ordered_at_datetime: '2021-10-12 14:51:30',
    due_data: '2021-10-17',
    assignee: '편집자',
    state: 4,
    start: '2021-10-12',
    end: '2021-11-12',
  },
];
