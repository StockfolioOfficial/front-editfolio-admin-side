import React from 'react';
import TitleHeader from '../../TitleHeader/TitleHeader';
import CustomerInformation from '../Main/CustomerInformation';

const CustomerData = () => {
  const id = '';
  return (
    <>
      <TitleHeader title="고객 정보" placeholder="" isSearch={false} />
      <CustomerInformation customerId={id} isRequest={false} />
    </>
  );
};

export default CustomerData;
