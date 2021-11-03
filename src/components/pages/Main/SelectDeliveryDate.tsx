import React from 'react';
import OrderControlItem from './OrderControlItem';

interface SelectDeliveryDate {
  defaultValue?: string;
  isComplete?: boolean;
}

const SelectDeliveryDate = ({
  defaultValue,
  isComplete,
}: SelectDeliveryDate) => {
  return (
    <OrderControlItem
      title="납품 예정일"
      type="calendar"
      inputProps={{
        defaultValue,
        disabled: isComplete,
      }}
    />
  );
};

SelectDeliveryDate.defaultProps = {
  defaultValue: '',
  isComplete: false,
};

export default SelectDeliveryDate;
