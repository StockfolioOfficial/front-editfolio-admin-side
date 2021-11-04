import React from 'react';
import styled from 'styled-components';

const SelectSubmit = () => {
  return (
    <SaveButton type="submit" value="Submit">
      저장
    </SaveButton>
  );
};

const SaveButton = styled.button`
  width: 124px;
  height: 48px;
  margin-top: 28px;
  border-radius: 6px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 700;
  background-color: #6ab4f7;
`;

export default SelectSubmit;
