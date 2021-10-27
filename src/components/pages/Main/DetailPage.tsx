import React from 'react';
import styled from 'styled-components';

import Nav from '../Nav/Nav';
import Aside from '../../Aside/Aside';
// import CustomerInformationSubmit from './CustomerInformationSubmit';
import ProductionInformation from './ProductionInformation';
import SelectLine from './SelectLine';
import CustomerInformation from './CustomerInformation';

const DetailPage = () => {
  return (
    <>
      <Nav />
      <MainBox>
        <Aside />
        <MainLayout>
          {/* <CustomerInformationSubmit /> */}
          <ProductionInformation />
          <SelectLine />
          <CustomerInformation isRequest />
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

export default DetailPage;
