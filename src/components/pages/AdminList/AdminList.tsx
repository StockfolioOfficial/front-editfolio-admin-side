import React from 'react';
import styled from 'styled-components';
import Aside from 'components/Aside/Aside';
import Nav from 'components/pages/Nav/Nav';
import CustomerList from './CustomerList';

const AdminList = () => {
  return (
    <>
      <Nav />
      <MainBox>
        <Aside />
        <MainLayout>
          <CustomerList />
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
