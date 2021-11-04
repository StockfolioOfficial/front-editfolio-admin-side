import React from 'react';
import useList from 'hooks/useList';
import FetchData from 'service/fetch';
import TitleHeader from 'components/TitleHeader';

const MENULIST = ['날짜', '고객명(채널명)', '이메일', '전화번호'];

const CustomerListPage = () => {
  const { getCustomerList } = new FetchData();

  const { CategoryView, CustomerList } = useList(
    'customerList',
    getCustomerList,
  );

  return (
    <>
      <TitleHeader
        title="고객 목록"
        option={{
          addButtonText: '고객 추가',
          goPage: '/customer-add',
        }}
      />
      <CategoryView category={MENULIST} />
      <CustomerList />
    </>
  );
};

export default CustomerListPage;
