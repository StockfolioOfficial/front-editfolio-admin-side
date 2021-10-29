import React, { useState, useRef } from 'react';
import OrderControlItem from './OrderControlItem';

interface SelectDeliveryDate {
  defaultValue?: string;
  fixed?: boolean;
}

const SelectDeliveryDate = ({ defaultValue, fixed }: SelectDeliveryDate) => {
  const [inputDate, setInputDate] = useState(defaultValue || '');
  const dateInput = useRef<HTMLInputElement | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(e.target.value);
  };

  return (
    <OrderControlItem
      title="납품 예정일"
      type={!fixed ? 'calendar' : undefined}
      inputProps={
        !fixed
          ? {
              value: inputDate,
              onChange: handleOnChange,
              ref: dateInput,
            }
          : undefined
      }
    />
  );
};

SelectDeliveryDate.defaultProps = {
  defaultValue: '',
  fixed: undefined,
};

export default SelectDeliveryDate;
