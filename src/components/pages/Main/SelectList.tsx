import React from 'react';
import styled from 'styled-components';

interface SelectListProps {
  onReset: (value: string) => void;
  matchValue: { id: number; editor: string }[];
}

const SelectList = ({ matchValue, onReset }: SelectListProps) => {
  return (
    <>
      <DropBox>
        {matchValue.map((menuList) => {
          return (
            <DropBoxList key={menuList.editor}>
              <DropBoxListButton
                type="button"
                onClick={() => onReset(menuList.editor)}
              >
                {menuList.editor}
              </DropBoxListButton>
            </DropBoxList>
          );
        })}
      </DropBox>
    </>
  );
};

const DropBox = styled.div`
  width: 180px;
  border-radius: 6px;
  padding: 5px;
  background-color: white;
  position: absolute;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
`;

const DropBoxList = styled.li`
  margin: 8px 16px 8px 16px;
  list-style: none;
`;

const DropBoxListButton = styled.button`
  width: 100%;
  background-color: #ffffff;
  border: none;
  font-size: 13px;
  text-align: inherit;
  line-height: 20px;
`;

export default SelectList;
