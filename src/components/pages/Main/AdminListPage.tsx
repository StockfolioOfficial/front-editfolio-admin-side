import React from 'react';
import TitleHeader from 'components/TitleHeader';
import useList from 'hooks/useList';
import FetchData from 'service/fetch';

const CATEGORY = ['날짜', '이름', '닉네임', '이메일'];

const AdminList = () => {
  const { getAdminList } = new FetchData();
  const { CategoryView, AdminList } = useList('adminList', getAdminList);
  return (
    <>
      <TitleHeader title="어드민 목록" />
      <CategoryView category={CATEGORY} />
      <AdminList />
    </>
  );
};

export default AdminList;
