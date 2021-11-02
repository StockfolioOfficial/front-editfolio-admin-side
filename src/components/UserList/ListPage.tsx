import React from 'react';
import Category from './Category';
import UserList from '.';

interface itemProps {
  ordered_at_datetime: string;
  name: string;
  assignee: string;
  state: number;
  orderable_cnt: string;
  start: string;
  end: string;
  due_data: string;
}

interface listProps {
  list: string[];
  userList: itemProps[];
}

const ListPage = ({ list, userList }: listProps) => {
  return (
    <>
      <Category list={list} />
      <UserList list={userList} />
    </>
  );
};

export default ListPage;
