import React from 'react';
import styled from 'styled-components';
import { ReactComponent as SearchIcon } from '../../assets/images/ic_find_24.svg';
import { ReactComponent as DeleteIcon } from '../../assets/images/ic_circle_square_24.svg';

interface headerProps {
  placeholder: string;
  isSearch: boolean;
}

const TitleHeader = ({ placeholder, isSearch }: headerProps) => {
  return (
    <Container>
      <Title>제작 의뢰 요청</Title>
      {isSearch && (
        <SearchBox>
          <SearchInput placeholder={placeholder} />
          <IconBox>
            <DeleteSvg />
            <SearchSvg />
          </IconBox>
        </SearchBox>
      )}
    </Container>
  );
};

const Container = styled.header`
  display: flex;
  align-items: center;
  margin-left: 32px;
  padding: 40px 32px 16px 0;
  border-bottom: 1px solid ${({ theme }) => theme.color.stone};
  max-width: 1280px;
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 1.4166666667;
  letter-spacing: 0.2px;
  margin-right: 60px;
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 336px;
  padding: 14px 16px 14px 12px;
  border: 1px solid ${({ theme }) => theme.color.stone};
  border-radius: 6px;
`;

const SearchInput = styled.input`
  &::placeholder {
    color: ${({ theme }) => theme.color.paleBlue};
    font-size: 13px;
    line-height: 1.5384615385;
  }
`;

const IconBox = styled.div`
  display: flex;
  align-items: center;
`;

const SearchSvg = styled(SearchIcon)`
  margin-left: 16px;
`;

const DeleteSvg = styled(DeleteIcon)``;

export default TitleHeader;
