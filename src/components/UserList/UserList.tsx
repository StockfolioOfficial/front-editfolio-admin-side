import React from 'react';
import styled from 'styled-components';

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
  list: itemProps[];
}

const UserList = ({ list }: listProps) => {
  return (
    <List>
      {list.map((item) => (
        <Item key={item.name}>
          <Date>{item.ordered_at_datetime}</Date>
          <Name>{item.name}</Name>
          <Editor>{item.assignee}</Editor>
          <State>{item.state}</State>
        </Item>
      ))}
    </List>
  );
};

const List = styled.ul``;

const Item = styled.li`
  display: flex;
  margin-left: 32px;

  & span {
    width: 212px;
    margin-bottom: 12px;
    padding: 14px 0;
    text-align: center;
  }
`;

const Date = styled.span`
  color: ${({ theme }) => theme.color.black};
`;

const Name = styled.span``;

const Editor = styled.span``;

const State = styled.span``;

export default UserList;
