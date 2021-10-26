import React from 'react';
import styled from 'styled-components';

interface categoryProps {
  list: string[];
}

const Category = ({ list }: categoryProps) => {
  return (
    <CategoryList>
      {list.map((item) => (
        <CategoryItem key={item}>{item}</CategoryItem>
      ))}
    </CategoryList>
  );
};

const CategoryList = styled.ul`
  display: flex;
  max-width: 1152px;
  margin: 16px 0 24px 32px;
  border-bottom: 1px solid ${({ theme }) => theme.color.paleBlue};
`;

const CategoryItem = styled.li`
  width: 212px;
  padding: 14px 0;
  font-size: 13px;
  line-height: 1.5384615385;
  color: ${({ theme }) => theme.color.gray};
  text-align: center;
`;

export default Category;
