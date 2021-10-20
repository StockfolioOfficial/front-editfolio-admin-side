import React from 'react';
import styled from 'styled-components';
import { ReactComponent as AdminListIcon } from '../../assets/styles/adminList.svg';
import { ReactComponent as UserListIcon } from '../../assets/styles/userList.svg';
import { ReactComponent as RequestIcon } from '../../assets/styles/adminRequest.svg';
import { ReactComponent as RequestingIcon } from '../../assets/styles/Requesting.svg';
import { ReactComponent as RequestFinishIcon } from '../../assets/styles/requestFinish.svg';

const Aside = () => {
  return (
    <AsideBox>
      <UserManagement>User 관리</UserManagement>
      <AdminListBox>
        <AdminIcon />
        <AdminListText>어드민 목록</AdminListText>
      </AdminListBox>
      <UserListBox>
        <UserIcon />
        <UserListText>고객 목록</UserListText>
      </UserListBox>
      <ProductionRequest>제작 의뢰</ProductionRequest>
      <UserListBox>
        <RequestSvg />
        <UserListText>제작 의뢰 요청</UserListText>
      </UserListBox>
      <UserListBox>
        <RequestingSvg />
        <UserListText>제작 의뢰 진행중</UserListText>
      </UserListBox>
      <UserListBox>
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

const UserListBox = styled.div`
  display: flex;
  width: 260px;
  height: 48px;
  margin: 30px 24px 0 40px;
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
