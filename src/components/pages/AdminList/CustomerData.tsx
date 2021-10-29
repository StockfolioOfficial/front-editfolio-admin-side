import React from 'react';
import TitleHeader from '../../TitleHeader/TitleHeader';
import CustomerInformation from '../Main/CustomerInformation';

const CustomerData = () => {
  return (
    <>
      <TitleHeader
        title="고객 정보"
        placeholder=""
        isSearch={false}
        isButton={false}
        buttonTitle=""
        click=""
      />
      <CustomerInformation isRequest={false} />
    </>
  );
};

export default CustomerData;
