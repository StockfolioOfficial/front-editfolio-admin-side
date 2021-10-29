import React from 'react';
import FetchData from 'service/fetch';
import useList from 'hooks/useList';
import TitleHeader from '../../TitleHeader/TitleHeader';

const CustomerList = () => {
  const fetch = new FetchData();
  const { renderCategory, renderList } = useList(
    'customerList',
    'request',
    fetch.adminListFetchList,
  );

  return (
    <>
      <TitleHeader
        title="어드민 목록"
        placeholder="이메일, 고객명, 닉네임, 전화번호 검색"
        isSearch
        isButton
        buttonTitle="어드민 추가"
        click="/AdminAddPage"
      />
      {renderCategory(CATEGORY)}
      {renderList()}
    </>
  );
};

export default CustomerList;

const CATEGORY = ['날짜', '이름', '닉네임', '이메일'];
