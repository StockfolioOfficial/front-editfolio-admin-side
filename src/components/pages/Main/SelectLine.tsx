import React from 'react';
import styled from 'styled-components';
import CustomerRequests from './CustomerRequests';
import EditsCnt from './EditsCnt';
import SelectDeliveryDate from './SelectDeliveryDate';
import SelectEditor from './SelectEditor';
import SelectOrderData from './SelectOrderData';
import SelectStatus from './SelectStatus';
import SelectSubmit from './SelectSubmit';

const SelectLine = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newValue = e.currentTarget;
    const formData = new FormData(newValue);
    console.log(formData.get('editors'));
    console.log(formData.get('status'));
    console.log(formData.get('calender'));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <LineLayout>
          <LineList>
            <SelectOrderData />
          </LineList>
          <LineList>
            <SelectDeliveryDate />
          </LineList>
          <LineList>
            <SelectEditor />
          </LineList>
          <LineList>
            <SelectStatus />
          </LineList>
          <LineList>
            <EditsCnt />
          </LineList>
          <LineList>
            <SelectSubmit />
          </LineList>
        </LineLayout>
        <CustomerRequests />
      </form>
    </>
  );
};

const LineLayout = styled.ul`
  display: flex;
`;

const LineList = styled.li`
  display: inline-flex;
  flex-direction: column;
`;

export default SelectLine;
