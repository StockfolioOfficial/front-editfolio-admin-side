import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import { ReactComponent as SearchIcon } from '../../assets/images/ic_find_24.svg';
import { ReactComponent as DeleteIcon } from '../../assets/images/ic_circle_square_24.svg';

interface headerProps {
  title: string;
  option?: {
    isSearch?: boolean;
    placeholder?: string;
    addButtonText?: string;
    goPage?: string;
  };
}

const TitleHeader = ({ title, option }: headerProps) => {
  const history = useHistory();
  return (
    <Container>
      <Title>{title}</Title>
      {option && option.isSearch && (
        <SearchBox>
          <SearchInput placeholder={option?.placeholder} />
          <IconBox>
            <DeleteIcon />
            <SearchSvg />
          </IconBox>
        </SearchBox>
      )}
      {option && option.addButtonText && (
        <ActionButton
          type="button"
          onClick={() => option.goPage && history.push(option.goPage)}
        >
          {option.addButtonText}
        </ActionButton>
      )}
    </Container>
  );
};

TitleHeader.defaultProps = {
  option: undefined,
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 47px 0 23px;
  max-width: 1280px;
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 700;
  line-height: 1.4166666667;
  letter-spacing: 0.2px;
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 336px;
  margin-left: 60px;
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

const ActionButton = styled.button`
  margin-left: auto;
  padding: 5px 16px;
  font-size: 14px;
  line-height: 22px;
  ${({ theme }) => `
    color: ${theme.color.white};
    background: ${theme.color.purple};
  `}
  border-radius: 6px;
`;

export default TitleHeader;
