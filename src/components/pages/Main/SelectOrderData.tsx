import React from 'react';
import OrderControlItem from './OrderControlItem';

interface OrderDataProps {
  title: string;
  data: string;
}

const SelectOrderData = ({ title, data }: OrderDataProps) => {
  return <OrderControlItem title={title} content={data} />;
};

export default SelectOrderData;
