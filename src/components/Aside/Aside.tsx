import React from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ReactComponent as AdminListIcon } from '../../assets/styles/adminList.svg';
import { ReactComponent as UserListIcon } from '../../assets/styles/userList.svg';
import { ReactComponent as RequestIcon } from '../../assets/styles/adminRequest.svg';
import { ReactComponent as RequestingIcon } from '../../assets/styles/Requesting.svg';
import { ReactComponent as RequestFinishIcon } from '../../assets/styles/requestFinish.svg';

const Aside = () => {
  const history = useHistory();
  const { pathname } = useLocation();

  const changePage = (path: string) => {
    history.push(path);
  };

  return (
    <AsideBox>
      <UserManagement>User 관리</UserManagement>
      <AdminListBox>
        <AdminIcon />
        <AdminListText>어드민 목록</AdminListText>
      </AdminListBox>
      <UserListBox
        type="button"
        selected={pathname === '/admin-list'}
        onClick={() => pathname !== '/admin-list' && changePage('/admin-list')}
      >
        <UserIcon />
        <UserListText>고객 목록</UserListText>
      </UserListBox>
      <ProductionRequest>제작 의뢰</ProductionRequest>
      <UserListBox
        type="button"
        selected={pathname === '/request-production'}
        onClick={() =>
          pathname !== '/request-production' &&
          changePage('/request-production')
        }
      >
        <RequestSvg />
        <UserListText>제작 의뢰 요청</UserListText>
      </UserListBox>
      <UserListBox
        type="button"
        selected={pathname === '/request-producting'}
        onClick={() =>
          pathname !== '/request-producting' &&
          changePage('/request-producting')
        }
      >
        <RequestingSvg />
        <UserListText>제작 의뢰 진행중</UserListText>
      </UserListBox>
      <UserListBox
        type="button"
        selected={pathname === '/request-edit'}
        onClick={() =>
          pathname !== '/request-edit' && changePage('/request-edit')
        }
      >
        <RequestingSvg />
        <UserListText>제작 수정 요청</UserListText>
      </UserListBox>
      <UserListBox
        type="button"
        selected={pathname === '/request-finish'}
        onClick={() =>
          pathname !== '/request-finish' && changePage('/request-finish')
        }
      >
        <RequestFinishSvg />
        <UserListText>제작 의뢰 완료</UserListText>
      </UserListBox>
    </AsideBox>
  );
};

const AsideBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 324px;
  height: 1020px;
  cursor: pointer;
`;

const UserManagement = styled.span`
  display: flex;
  width: 56px;
  height: 20px;
  margin: 80px 0 0 40px;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: ${({ theme }) => theme.color.paleBlue};
`;

const AdminListBox = styled.div`
  display: flex;
  width: 260px;
  height: 48px;
  margin: 30px 24px 0 40px;
  border-radius: 100px;
  &:hover {
    background-color: ${({ theme }) => theme.color.mint};
    color: ${({ theme }) => theme.color.white};
    fill: ${({ theme }) => theme.color.white};
  }
`;

const AdminIcon = styled(AdminListIcon)`
  display: flex;
  margin: 14px 0 14px 22px;
`;

const AdminListText = styled.div`
  display: flex;
  width: 68px;
  height: 22px;
  margin: 13px 0 13px 14px;
  font-size: 14px;
  line-height: 22px;
`;

const UserListBox = styled.button<{ selected?: boolean }>`
  display: flex;
  width: 260px;
  height: 48px;
  margin: 12px 24px 0 40px;
  border-radius: 100px;

  ${({ selected, theme }) =>
    selected
      ? `
    background-color: ${theme.color.mint};
    color: ${theme.color.white};
    fill: ${theme.color.white};
    `
      : ''}

  &:hover {
    ${({ selected, theme }) =>
      !selected ? `background-color: ${theme.color.stone};` : ''}
  }
`;

const UserIcon = styled(UserListIcon)`
  display: flex;
  margin: 14px 0 14px 22px;
`;

const UserListText = styled.div`
  display: flex;
  margin: 13px 0 13px 14px;
  font-size: 14px;
  line-height: 22px;
`;

const ProductionRequest = styled.div`
  display: flex;
  width: 56px;
  height: 20px;
  margin: 80px 0 0 40px;
  font-size: 13px;
  font-weight: 400;
  line-height: 20px;
  color: #becbd8;
`;

const RequestSvg = styled(RequestIcon)`
  display: flex;
  margin: 14px 0 14px 22px;
`;

const RequestingSvg = styled(RequestingIcon)`
  display: flex;
  margin: 14px 0 14px 22px;
`;

const RequestFinishSvg = styled(RequestFinishIcon)`
  display: flex;
  margin: 14px 0 14px 22px;
`;

export default Aside;
