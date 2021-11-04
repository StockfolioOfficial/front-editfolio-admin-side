import useList from 'hooks/useList';
import TitleHeader from 'components/TitleHeader';
import OrderFetchData from 'service/fetchOrder';

const MENULIST = ['날짜', '고객명', ' 편집자', '상태'];

const RequestProductingPage = () => {
  const { getReguestingOrderList } = new OrderFetchData();

  const { CategoryView, OrderList } = useList(
    'ongoing',
    getReguestingOrderList,
  );

  return (
    <>
      <TitleHeader title="제작 의뢰 진행중" />
      <CategoryView category={MENULIST} />
      <OrderList />
    </>
  );
};

export default RequestProductingPage;
