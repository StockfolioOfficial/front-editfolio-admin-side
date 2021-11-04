import React from 'react';
import FetchData from 'service/fetch';
import useList from 'hooks/useList';
import TitleHeader from '../TitleHeader';

const CustomerList = () => {
  const fetch = new FetchData();
  const {
    CategoryView,
    // CustomerDataList
  } = useList('customerList', fetch.getCustomerList);

  return (
    <>
      <TitleHeader title="고객 목록" />
      <CategoryView category={CATEGORY} />
      {/* <CustomerDataList /> */}
    </>
  );
};

export default CustomerList;

const CATEGORY = ['날짜', '고객명(채널명)', '이메일', '전화번호'];
