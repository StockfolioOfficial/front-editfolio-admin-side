import React from 'react';
import OrderControlItem from './OrderControlItem';

interface OrderDataProps {
  date: string;
}

const SelectOrderData = ({ date }: OrderDataProps) => {
  return <OrderControlItem title="주문 일시" content={date} />;
};

export default SelectOrderData;
