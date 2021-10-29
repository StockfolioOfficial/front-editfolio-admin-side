import styled from 'styled-components';
import useList from 'hooks/useList';

import FetchData from 'service/fetch';
import TitleHeader from 'components/TitleHeader/TitleHeader';
import Nav from '../Nav/Nav';
import Aside from '../../Aside/Aside';

const MENULIST = ['날짜', '이름', ' 편집자', '상태'];

const RequestProductingPage = () => {
  const handleFetch = new FetchData();

  const { renderCategory, renderOrderList } = useList(
    'ongoing',
    'request',
    handleFetch.requestingFetchList,
  );

  return (
    <>
      <Nav />
      <MainBox>
        <Aside />
        <MainLayout>
          <TitleHeader
            title="제작 의뢰 진행중"
            placeholder="휴대폰 번호 검색"
            // isSearch
          />
          {renderCategory(MENULIST)}
          {renderOrderList()}
        </MainLayout>
      </MainBox>
    </>
  );
};

const MainBox = styled.main`
  display: flex;
`;

const MainLayout = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fafafa;
`;

export default RequestProductingPage;
