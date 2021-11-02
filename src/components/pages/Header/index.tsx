import { useStores } from 'index';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useHistory } from 'react-router';
import FetchData from 'service/fetch';
import styled from 'styled-components';
import { ReactComponent as UnderArrow } from '../../../assets/styles/arrow.svg';
// import { ReactComponent as ArrowPurpleIcon } from '../../../assets/styles/arrowPurple.svg';

const Header = observer(() => {
  const history = useHistory();
  const { logout } = new FetchData();
  const { userStore } = useStores();
  const { email, resetUser } = userStore;

  function logoutUser() {
    logout();
    resetUser();
    history.push('/login');
  }

  return (
    <Root>
      <LogoImg src="/images/Logo.png" />
      <EmailBox type="button" onClick={() => logoutUser()}>
        <Email>{email}</Email>
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
`;

const LogoImg = styled.img`
  width: 120px;
  height: 32px;
  margin: 12px 0 16px 32px;
`;

const EmailBox = styled.button`
  display: flex;
  align-items: center;
  height: 36px;
  margin: 12px 40px 12px 0;
  border: 1px solid #eeeeee;
  border-radius: 6px;
`;

const Email = styled.div`
  display: flex;
  margin: 8px 11px 8px 12px;
`;

export default Header;
