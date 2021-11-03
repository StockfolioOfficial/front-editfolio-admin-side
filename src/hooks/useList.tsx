import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import OrderFetchData, { OrderListModel } from 'service/fetchOrder';
import styled from 'styled-components';

interface colorProps {
  color:
    | 'purple'
    | 'gray'
    | 'violet'
    | 'mint'
    | 'skyblue'
    | 'black'
    | 'white'
    | 'red';
  width?: string;
  fontColor?: string;
}

const useList = (page: string, fetch?: () => Promise<any>) => {
  const [list, setList] = useState<OrderListModel[]>([]);

  async function setListFetch() {
    if (!fetch) return;
    const res = await fetch();
    if (!res) return;
    if (res?.errorCode) return;
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

  const renderButton = (id?: string) => {
    const history = useHistory();
    const { takeMeOrder } = new OrderFetchData();
    switch (page) {
      case 'request':
        return (
          <>
            <Button
              color="purple"
              width="84px"
              fontColor="white"
              onClick={() =>
                id &&
                takeMeOrder(id).then(() =>
                  history.push(`/detail/ongoing/${id}`),
                )
              }
            >
              가져가기
            </Button>
            <Button
              color="white"
              width="71px"
              onClick={() => history.push(`/detail/${page}/${id}`)}
            >
              자세히
            </Button>
          </>
        );
      case 'ongoing':
      case 'edit':
      case 'complete':
        return (
          <>
            <Button
              color="white"
              width="71px"
              onClick={() => history.push(`/detail/${page}/${id}`)}
            >
              자세히
            </Button>
          </>
        );
      case 'adminList':
        return (
          <>
            <Button color="purple" width="40px" fontColor="white">
              수정
            </Button>
            <Button color="red" width="40px" fontColor="white">
              삭제
            </Button>
          </>
        );
      case 'customerList':
        return (
          <>
            <Button
              color="white"
              width="40px"
              onClick={() => history.push('/cutomer-detail')}
            >
              보기
            </Button>
            <Button color="red" width="40px" fontColor="white">
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
        {orderList.map((item) => (
          <Item key={item.orderId}>
            <Content>
              {item.orderedAt.split('T').join(' • ').split('.')[0]}
            </Content>
            <Content>{`${item.ordererName}${
              item.ordererChannelName && `(${item.ordererChannelName})`
            }`}</Content>
            {item.assigneeName && <Content>{item.assigneeName}</Content>}
            {item.orderState && (
              <Content>{renderOrderState(item.orderState)}</Content>
            )}
            {item.orderId && (
              <ButtonBox>{renderButton(item.orderId)}</ButtonBox>
            )}
          </Item>
        ))}
      </List>
    );
  };

  // const CustomerDataList = () => {
  //   const viewList = list as OrderListModel[];
  //   return (
  //     <List>
  //       {viewList.map((item) => (
  //         <Item key={item.name}>
  //           {item.createdAt && <Content>{item.createdAt}</Content>}
  //           {item.name && (
  //             <Content>
  //               {item.name}
  //               {item.channelName && `(${item.channelName})`}
  //             </Content>
  //           )}
  //           {item.nickname && <Content>{item.nickname}</Content>}
  //           {item.ch_name && <Content>{item.assignee}</Content>}
  //           {item.email && <Content>{item.email}</Content>}
  //           {item.mobile && <Content>{item.mobile}</Content>}
  //           {item.state && changeState(item.state)}
  //           <ButtonBox>
  //             {item.userId && renderButton(page, item.userId)}
  //           </ButtonBox>
  //         </Item>
  //       ))}
  //     </List>
  //   );
  // };

  return {
    list,
    CategoryView,
    changeState,
    renderButton,
    OrderList,
    // CustomerDataList,
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
  max-width: 1200px;
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
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.width};
  height: 32px;
  background-color: ${({ theme, color }) => theme.color[color]};
  color: ${(props) => props.fontColor};
  border-radius: 6px;
  font-size: 13px;
  line-height: 1.5384615385;
  border: 1px solid gray;
`;

export default useList;
