import React from 'react';
import styled from 'styled-components';
import { ReactComponent as UnderArrow } from '../../../assets/styles/arrow.svg';
// import { ReactComponent as ArrowPurpleIcon } from '../../../assets/styles/arrowPurple.svg';

const Nav = () => {
  return (
    <>
      <NavBox>
        <LogoImg src="/images/Logo.png" />
        <EmailBox>
          <Email>jlee@stockfolio.ai</Email>
          <UnderArrow />
        </EmailBox>
      </NavBox>
    </>
  );
};

const NavBox = styled.nav`
  display: flex;
  justify-content: space-between;
  height: 60px;
`;

const LogoImg = styled.img`
  width: 120px;
  height: 32px;
  margin: 12px 0 16px 32px;
`;

const EmailBox = styled.div`
  display: flex;
  align-items: center;
  width: 166px;
  height: 36px;
  margin: 12px 40px 12px 0;
  border: 1px solid #eeeeee;
  border-radius: 6px;
`;

const Email = styled.div`
  display: flex;
  margin: 8px 11px 8px 12px;
`;

export default Nav;
