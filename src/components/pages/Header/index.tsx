import React from 'react';
import styled from 'styled-components';
import { observer } from 'mobx-react-lite';
import { useHistory } from 'react-router';
import { useStores } from 'index';
import FetchData from 'service/fetch';
import { ReactComponent as UnderArrow } from '../../../assets/styles/arrow.svg';

const Header = observer(() => {
  const history = useHistory();
  const { logout } = new FetchData();
  const { userStore } = useStores();
  const { username, resetUser } = userStore;

  function logoutUser() {
    logout();
    resetUser();
    history.push('/login');
  }

  return (
    <Root>
      <h1>
        <img src="/images/Logo.png" alt="에딧폴리오" />
      </h1>
      <EmailBox type="button" onClick={() => logoutUser()}>
        <Name>{username}</Name>
        <UnderArrow />
      </EmailBox>
    </Root>
  );
});

const Root = styled.header`
  display: flex;
  justify-content: space-between;
  height: 60px;
  border-bottom: 1px solid ${({ theme }) => theme.color.stone};

  h1 {
    width: 120px;
    height: 32px;
    margin: 12px 0 16px 32px;
  }
`;

const EmailBox = styled.button`
  display: flex;
  align-items: center;
  height: 36px;
  margin: 12px 40px 12px 0;
  border: 1px solid #eeeeee;
  border-radius: 6px;
`;

const Name = styled.div`
  display: flex;
  margin: 8px 11px 8px 12px;
`;

export default Header;
