import React from 'react';
import styled from 'styled-components';

const SelectSubmit = () => {
  return (
    <>
      <SaveButton>저장</SaveButton>
    </>
  );
};

const SaveButton = styled.button`
  width: 124px;
  height: 48px;
  margin: 50px 0 0 40px;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  background-color: #6ab4f7;
`;

export default SelectSubmit;
