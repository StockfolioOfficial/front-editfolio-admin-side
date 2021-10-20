import React from 'react';
import styled from 'styled-components';
import Nav from '../Nav/Nav';
import Aside from '../../Aside/Aside';
import ProductionInformation from './ProductionInformation';

const Main = () => {
  return (
    <>
      <Nav />
      <MainBox>
        <Aside />
        <MainLayout>
          <ProductionInformation />
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

export default Main;
