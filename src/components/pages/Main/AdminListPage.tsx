import React from 'react';
import TitleHeader from 'components/TitleHeader';
import useList from 'hooks/useList';
import FetchData from 'service/fetch';
import { observer } from 'mobx-react-lite';
import { useStores } from 'index';

const CATEGORY = ['날짜', '이름', '닉네임', '이메일'];

const AdminListPage = observer(() => {
  const { userStore } = useStores();
  const { roles } = userStore;
  const { getAdminList } = new FetchData();
  const { CategoryView, AdminList } = useList('adminList', getAdminList);

  return (
    <>
      <TitleHeader
        title="어드민 목록"
        option={{
          addButtonText: roles.includes('SUPER_ADMIN')
            ? '어드민 추가'
            : undefined,
          goPage: '/admin-add',
        }}
      />
      <CategoryView category={CATEGORY} />
      <AdminList />
    </>
  );
});

export default AdminListPage;
