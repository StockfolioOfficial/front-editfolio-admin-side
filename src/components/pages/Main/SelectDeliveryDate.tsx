import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowSvg } from '../../../assets/styles/arrowPurple.svg';

const SelectDeliveryDate = () => {
  const [inputDate, setInputDate] = useState('');
  const dateInput = useRef<HTMLInputElement | null>(null);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(e.target.value);
  };

  return (
    <>
      <OrderDateTitle>납품 예정일</OrderDateTitle>
      <DateBox>
        <DateSelect
          type="date"
          name="calender"
          value={inputDate}
          onChange={handleOnChange}
          ref={dateInput}
        />
        <ArrowIcon />
      </DateBox>
    </>
  );
};

const OrderDateTitle = styled.div`
  margin: 26px 0 0 56px;
  color: #77828b;
  font-size: 13px;
  line-height: 20px;
`;

const DateBox = styled.div`
  margin: 8px 0 0 56px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

const DateSelect = styled.input`
  padding: 14px 0 14px 16px;
  font-size: 13px;
  line-height: 20px;
  &::-webkit-calendar-picker-indicator {
  }
`;

const ArrowIcon = styled(ArrowSvg)`
  margin-right: 21px;
`;

export default SelectDeliveryDate;
