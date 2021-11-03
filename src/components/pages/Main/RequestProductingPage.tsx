import styled from 'styled-components';
import useList from 'hooks/useList';
import TitleHeader from 'components/TitleHeader';
import OrderFetchData from 'service/fetchOrder';
import Nav from '../Header';
import Aside from '../../Aside/Aside';

const MENULIST = ['날짜', '고객명', ' 편집자', '상태'];

const RequestProductingPage = () => {
  const { getReguestingOrderList } = new OrderFetchData();

  const { CategoryView, OrderList } = useList(
    'ongoing',
    getReguestingOrderList,
  );

  return (
    <>
      <Nav />
      <MainBox>
        <Aside />
        <MainLayout>
          <TitleHeader title="제작 의뢰 진행중" />
          <CategoryView category={MENULIST} />
          <OrderList />
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
  padding: 0 32px;
  background-color: #fafafa;
`;

export default RequestProductingPage;
