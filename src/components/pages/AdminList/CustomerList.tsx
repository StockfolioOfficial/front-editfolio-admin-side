import React from 'react';
import FetchData from 'service/fetch';
import useList from 'hooks/useList';
import TitleHeader from '../../TitleHeader/TitleHeader';

const CustomerList = () => {
  const fetch = new FetchData();
  const { list, renderCategory, renderList } = useList(fetch.fetchList);

  console.log(list);
  return (
    <>
      <TitleHeader
        title="고객 목록"
        placeholder="이메일, 고객명, 닉네임, 전화번호 검색"
        isSearch
      />
      {renderCategory(CATEGORY)}
      {renderList()}
    </>
  );
};

export default CustomerList;

const CATEGORY = ['날짜', '고객명(채널명)', '이메일', '전화번호'];
