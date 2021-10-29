import React from 'react';
import styled from 'styled-components';
import CustomerAdditional from '../AdminList/CustomerAdditional';
import Nav from '../Nav/Nav';
import Aside from '../../Aside/Aside';

const CustomerAddListPage = () => {
  return (
    <>
      <Nav />
      <MainBox>
        <Aside />
        <MainLayout>
          <CustomerAdditional />
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

export default CustomerAddListPage;
