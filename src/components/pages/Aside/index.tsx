import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as AdminListIcon } from '../../../assets/images/ic_user_check_24.svg';
import { ReactComponent as UserListIcon } from '../../../assets/images/ic_users_24.svg';
import { ReactComponent as RequestIcon } from '../../../assets/images/ic_message_24.svg';
import { ReactComponent as RequestingIcon } from '../../../assets/images/ic_list_todo_24.svg';
import { ReactComponent as EditIcon } from '../../../assets/images/ic_refresh_line_24.svg';
import { ReactComponent as RequestFinishIcon } from '../../../assets/images/ic_list_check_24.svg';

const Aside = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const changePage = (path: string) => {
    history.push(path);
  };

  return (
    <Root>
      <NavSection>
        <NavSectionTitle>User 관리</NavSectionTitle>
        <ul>
          <li key="어드민 목록">
            <NavSectionContent
              type="button"
              selected={pathname === '/admin-list'}
              onClick={() =>
                pathname !== '/admin-list' && changePage('/admin-list')
              }
            >
              <AdminListIcon />
              <AdminListText>어드민 목록</AdminListText>
            </NavSectionContent>
          </li>
          <li key="고객 목록">
            <NavSectionContent
              type="button"
              selected={pathname === '/customer-list'}
              onClick={() =>
                pathname !== '/customer-list' && changePage('/customer-list')
              }
            >
              <UserListIcon />
              <UserListText>고객 목록</UserListText>
            </NavSectionContent>
          </li>
        </ul>
      </NavSection>
      <NavSection>
        <NavSectionTitle>제작 의뢰</NavSectionTitle>
        <ul>
          <li>
            <NavSectionContent
              type="button"
              selected={pathname === '/request-production'}
              onClick={() =>
                pathname !== '/request-production' &&
                changePage('/request-production')
              }
            >
              <RequestIcon />
              <UserListText>제작 의뢰 요청</UserListText>
            </NavSectionContent>
          </li>
          <li>
            <NavSectionContent
              type="button"
              selected={pathname === '/request-producting'}
              onClick={() =>
                pathname !== '/request-producting' &&
                changePage('/request-producting')
              }
            >
              <RequestingIcon />
              <UserListText>제작 의뢰 진행중</UserListText>
            </NavSectionContent>
          </li>
          <li>
            <NavSectionContent
              type="button"
              selected={pathname === '/request-edit'}
              onClick={() =>
                pathname !== '/request-edit' && changePage('/request-edit')
              }
              isEdit
            >
              <EditIcon />
              <UserListText>제작 수정 요청</UserListText>
            </NavSectionContent>
          </li>
          <li>
            <NavSectionContent
              type="button"
              selected={pathname === '/request-finish'}
              onClick={() =>
                pathname !== '/request-finish' && changePage('/request-finish')
              }
            >
              <RequestFinishIcon />
              <UserListText>제작 의뢰 완료</UserListText>
            </NavSectionContent>
          </li>
        </ul>
      </NavSection>
    </Root>
  );
};

const Root = styled.nav`
  width: 324px;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 80px;
  padding: 40px 28px 40px 40px;
`;

const NavSection = styled.div`
  display: flex;
  flex-direction: column;

  > ul {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
`;

const NavSectionTitle = styled.div`
  margin-bottom: 16px;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.color.paleBlue};
`;

const NavSectionContent = styled.button<{
  selected?: boolean;
  isEdit?: boolean;
}>`
  width: 260px;
  height: 48px;
  display: flex;
  align-items: center;
  padding: 12px 20px;
  border-radius: 100px;

  &:hover {
    ${({ selected, theme }) =>
      !selected ? `background-color: ${theme.color.stone};` : ''}
  }

  > svg {
    margin-right: 16px;
    ${({ isEdit }) => (isEdit ? `transform: rotate(90deg);` : '')}
  }

  > svg > path {
    ${({ isEdit, theme }) => (isEdit ? `stroke: ${theme.color.black};` : '')}
  }

  ${({ selected, theme, isEdit }) =>
    selected
      ? `
      color: ${theme.color.white};
      background-color: ${theme.color.mint};

      > svg > path {
        ${
          isEdit
            ? `stroke: ${theme.color.white};`
            : `fill: ${theme.color.white};`
        }
      }
    `
      : ''}
`;

const AdminListText = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 22px;
`;

const UserListText = styled.div`
  display: flex;
  font-size: 14px;
  line-height: 22px;
`;

export default Aside;
