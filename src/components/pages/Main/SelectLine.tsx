import React from 'react';
import styled from 'styled-components';
import EditsCnt from './EditsCnt';
import SelectDeliveryDate from './SelectDeliveryDate';
import SelectEditor from './SelectEditor';
import SelectOrderData from './SelectOrderData';
import SelectStatus from './SelectStatus';
import SelectSubmit from './SelectSubmit';

const SelectLine = () => {
  return (
    <>
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
