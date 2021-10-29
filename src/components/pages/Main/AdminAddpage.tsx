import React from 'react';
import styled from 'styled-components';
import AdditionalPage from '../AdminList/AdditionalPage';
import Nav from '../Nav/Nav';
import Aside from '../../Aside/Aside';

const AdminAddpage = () => {
  return (
    <>
      <Nav />
      <MainBox>
        <Aside />
        <MainLayout>
          <AdditionalPage />
        </MainLayout>
      </MainBox>
    </>
  );
};

const MainBox = styled.main`
  display: flex;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fafafa;
`;

export default AdminAddpage;
