import { theme } from 'assets/styles/theme';
import { useStores } from 'index';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import FetchData, { AdminModal, CustomerDataModel } from 'service/fetch';
import OrderFetchData, { OrderListModel } from 'service/fetchOrder';
import styled from 'styled-components';

interface colorProps {
  color: keyof typeof theme.color;
  width?: string;
  fontColor?: keyof typeof theme.color;
}

const useList = (
  page: string,
  fetch?: () =>
    | Promise<OrderListModel[] | undefined>
    | Promise<CustomerDataModel[] | undefined>
    | Promise<AdminModal[] | undefined>,
) => {
  const [list, setList] = useState<
    OrderListModel[] | CustomerDataModel[] | AdminModal[]
  >([]);

  async function setListFetch() {
    if (!fetch) return;
    const res = await fetch();
    if (!res) return;
    setList(res);
  }

  useEffect(() => {
    setListFetch();
  }, []);

  const changeState = (state: number) => {
    switch (state) {
      case 1:
        return (
          <State>
            <Circle color="violet" />
            영상 검토 중
          </State>
        );
      case 2:
        return (
          <State>
            <Circle color="gray" />
            편집자 배정 중
          </State>
        );
      case 3:
        return (
          <State>
            <Circle color="purple" />
            편집 중
          </State>
        );
      case 4:
        return (
          <State>
            <Circle color="mint" />
            이펙트 추가 중
          </State>
        );
      case 5:
        return (
          <State>
            <Circle color="skyblue" />
            수정 중
          </State>
        );
      case 6:
        return (
          <State>
            <Circle color="black" />
            완료
          </State>
        );
      default:
        return undefined;
    }
  };

  const renderButton = (id?: string, isSuper?: boolean) => {
    const history = useHistory();
    const { deleteCustomer, deleteAdmin } = new FetchData();
    const { takeMeOrder } = new OrderFetchData();
    switch (page) {
      case 'request':
      case 'ongoing':
      case 'edit':
      case 'complete':
        return (
          <>
            {page === 'request' && (
              <Button
                color="purple"
                width="84px"
                fontColor="white"
                onClick={() =>
                  id &&
                  takeMeOrder(id).then(
                    (res) => res && history.push(`/order-detail/ongoing/${id}`),
                  )
                }
              >
                가져가기
              </Button>
            )}
            <UnderLineButton
              color="white"
              width="71px"
              onClick={() => history.push(`/order-detail/${page}/${id}`)}
            >
              자세히
            </UnderLineButton>
          </>
        );
      case 'adminList':
        return isSuper ? (
          <>
            <UnderLineButton
              color="white"
              width="43px"
              onClick={() =>
                history.push({
                  pathname: `/admin-edit/${id}`,
                  state: {
                    data: (list as AdminModal[]).find(
                      (item) => item.userId === id,
                    ),
                  },
                })
              }
            >
              수정
            </UnderLineButton>
            <Button
              color="red"
              width="43px"
              fontColor="white"
              onClick={async () => {
                const res = window.confirm('정말 삭제하겠습니까?');
                if (!res) return;
                if (!id) return;
                const deleteRes = await deleteAdmin(id);
                if (!deleteRes) window.alert('계정을 삭제하지 못했습니다.');
                else setListFetch();
              }}
            >
              삭제
            </Button>
          </>
        ) : undefined;
      case 'customerList':
        return (
          <>
            <UnderLineButton
              color="white"
              width="43px"
              onClick={() => id && history.push(`/cutomer-detail/${id}`)}
            >
              보기
            </UnderLineButton>
            <Button
              color="red"
              width="43px"
              fontColor="white"
              onClick={async () => {
                if (id) {
                  const res = await deleteCustomer(id);
                  if (res) setListFetch();
                  else window.alert('고객을 삭제하지 못했습니다.');
                }
              }}
            >
              삭제
            </Button>
          </>
        );
      default:
        return undefined;
    }
  };

  interface CategoryViewProps {
    category: string[];
  }

  const CategoryView = ({ category }: CategoryViewProps) => {
    return (
      <CategoryList>
        {category.map((item) => (
          <CategoryItem key={item}>{item}</CategoryItem>
        ))}
      </CategoryList>
    );
  };

  const OrderList = () => {
    const orderList = list as OrderListModel[];
    function renderOrderState(stateNum: number) {
      switch (stateNum) {
        case 1:
          return '편집자 배정 중';
        case 2:
          return '영상 검토 중';
        case 3:
          return '편집 중';
        case 4:
          return '이펙트 추가 중';
        case 5:
          return '완료';
        case 6:
          return '최종 완료';
        case 7:
          return '수정 중';
        case 8:
          return '수정 완료';
        default:
          return '주문 상태';
      }
    }
    return (
      <List>
        {orderList.map((order) => (
          <Item key={order.orderId}>
            <Content>{new Date(order.orderedAt).toLocaleString()}</Content>
            <Content>{`${order.ordererName}${
              order.ordererChannelName && `(${order.ordererChannelName})`
            }`}</Content>
            {order.assigneeName && <Content>{order.assigneeName}</Content>}
            {order.orderState && (
              <Content>{renderOrderState(order.orderState)}</Content>
            )}
            {order.orderId && (
              <ButtonBox>{renderButton(order.orderId)}</ButtonBox>
            )}
          </Item>
        ))}
      </List>
    );
  };

  const CustomerList = () => {
    const customerList = list as CustomerDataModel[];
    return (
      <List>
        {customerList.map((customer) => (
          <Item key={customer.userId}>
            {customer.createdAt && (
              <Content>{new Date(customer.createdAt).toLocaleString()}</Content>
            )}
            {customer.name && (
              <Content>
                {customer.name}
                {customer.channelName && `(${customer.channelName})`}
              </Content>
            )}
            {customer.email && <Content>{customer.email}</Content>}
            {customer.mobile && <Content>{customer.mobile}</Content>}
            <ButtonBox>
              {customer.userId && renderButton(customer.userId)}
            </ButtonBox>
          </Item>
        ))}
      </List>
    );
  };

  const AdminList = observer(() => {
    const adminList = list as AdminModal[];
    const { userStore } = useStores();
    const { roles } = userStore;
    return (
      <List>
        {adminList.map((admin) => (
          <Item key={admin.userId}>
            {admin.createdAt && (
              <Content>{new Date(admin.createdAt).toLocaleString()}</Content>
            )}
            {admin.name && <Content>{admin.name}</Content>}
            {admin.nickname && <Content>{admin.nickname}</Content>}
            {admin.email && <Content>{admin.email}</Content>}
            <ButtonBox>
              {admin.userId &&
                renderButton(admin.userId, toJS(roles).includes('SUPER_ADMIN'))}
            </ButtonBox>
          </Item>
        ))}
      </List>
    );
  });

  return {
    list,
    CategoryView,
    changeState,
    renderButton,
    OrderList,
    CustomerList,
    AdminList,
  };
};

const List = styled.ul`
  > li:not(:last-child) {
    margin-bottom: 12px;
  }
`;

const Item = styled.li`
  display: flex;
  align-items: center;
  padding-right: 40px;
  position: relative;
  border-radius: 6px;

  & span {
    width: 212px;
    padding: 14px 0;
    text-align: center;
    color: ${({ theme }) => theme.color.black};
  }

  &:hover {
    background-color: ${({ theme }) => theme.color.stone};
  }
`;

const Content = styled.span`
  font-size: 13px;
`;

const State = styled.div`
  display: flex;
  align-items: center;
  width: 212px;
  margin-bottom: 12px;
  padding: 14px 0;
  font-size: 13px;
  text-align: center;
`;

const Circle = styled.div<colorProps>`
  width: 8px;
  height: 8px;
  margin-right: 8px;
  border-radius: 50%;
  background-color: ${({ theme, color }) => theme.color[color]};
`;

const ButtonBox = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 24px;
  margin-left: auto;
`;

const CategoryList = styled.ul`
  display: flex;
  margin: 16px 0 24px;
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

const Button = styled.button<colorProps>`
  width: ${({ width }) => width || '100%'};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 0;
  font-size: 13px;
  line-height: 20px;
  color: ${({ theme, fontColor }) =>
    fontColor ? theme.color[fontColor] : theme.color.black};
  background-color: ${({ theme, color }) => theme.color[color]};
  border-radius: 6px;

  &:hover {
    ${({ color }) => {
      if (color === 'white')
        return `background-color: ${theme.color.paleBlue};`;
      if (color === 'red') return `background-color: ${theme.color.red2};`;
    }}
  }
`;

const UnderLineButton = styled(Button)`
  border: 1px solid ${({ theme }) => theme.color.stone};
`;

export default useList;
