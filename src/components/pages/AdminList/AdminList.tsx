import React from 'react';
import styled from 'styled-components';
import Aside from 'components/Aside/Aside';
import Nav from 'components/pages/Nav/Nav';
// import AdditionalPage from './AdditionalPage';
import CustomerList from './CustomerList';
// import CustomerData from './CustomerData';

const AdminList = () => {
  return (
    <>
      <Nav />
      <MainBox>
        <Aside />
        <MainLayout>
          {/* <AdditionalPage /> */}
          <CustomerList />
          {/* <CustomerData /> */}
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

export default AdminList;
