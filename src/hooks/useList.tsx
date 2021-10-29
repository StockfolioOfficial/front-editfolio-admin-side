import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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

interface itemProps {
  assignee?: string;
  state?: number;
  orderable_cnt?: string;
  start?: string;
  end?: string;
  due_data?: string;
  ch_name?: string;
  nickname?: string;
  role?: string;
  channelLink?: string;
  channelName?: string;
  createdAt?: string;
  email?: string;
  mobile?: string;
  name?: string;
  userId?: string;
}

interface OrderItemType {
  orderId: string;
  orderedAt: string;
  ordererChannelLink: string;
  ordererChannelName: string;
  ordererName: string;
  orderState?: number;
  orderStateContent?: string;
  assigneeName?: string;
  assigneeNickname?: string;
}

const useList = (page: string, role?: string, fetch?: () => Promise<any>) => {
  const [list, setList] = useState<itemProps[] | OrderItemType[]>([]);
  useEffect(() => {
    console.log(fetch);
    if (!fetch) return;
    fetch().then((res: (itemProps[] | OrderItemType[])[]) =>
      setList(
        role
          ? res.map((data: any) => ({
              ...data,
              role,
            }))
          : res,
      ),
    );
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
        break;

      case 2:
        return (
          <State>
            <Circle color="gray" />
            편집자 배정 중
          </State>
        );
        break;

      case 3:
        return (
          <State>
            <Circle color="purple" />
            편집 중
          </State>
        );
        break;

      case 4:
        return (
          <State>
            <Circle color="mint" />
            이펙트 추가 중
          </State>
        );
        break;

      case 5:
        return (
          <State>
            <Circle color="skyblue" />
            수정 중
          </State>
        );
        break;

      case 6:
        return (
          <State>
            <Circle color="black" />
            완료
          </State>
        );
        break;

      default:
        return undefined;
        break;
    }
  };

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

  const renderButton = (page: string, role: string, userId: string) => {
    const history = useHistory();
    switch (page) {
      case 'request':
        return (
          <>
            <Button color="purple" width="84px" fontColor="white">
              가져가기
            </Button>
            <Button
              color="white"
              width="71px"
              onClick={() => history.push(`/detail/${page}/${userId}`)}
            >
              자세히
            </Button>
          </>
        );
      case 'ongoing':
      case 'complete':
        return (
          <>
            <Button
              color="white"
              width="71px"
              onClick={() => history.push(`/detail/${page}/${userId}`)}
            >
              자세히
            </Button>
          </>
        );
      case 'adminList':
        if (role === 'super_admin') {
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
        }
        return undefined;
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

  const CategoryList = styled.ul`
    display: flex;
    max-width: 1200px;
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

  const renderCategory = (category: string[]) => {
    return (
      <CategoryList>
        {category.map((item) => (
          <CategoryItem key={item}>{item}</CategoryItem>
        ))}
      </CategoryList>
    );
  };

  const List = styled.ul`
    > li:not(:last-child) {
      margin-bottom: 12px;
    }
  `;

  const Item = styled.li`
    display: flex;
    align-items: center;
    margin-left: 32px;
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

  const renderList = () => {
    const viewList = list as itemProps[];
    return (
      <List>
        {viewList.map((item) => (
          <Item key={item.name}>
            {item.createdAt && <Content>{item.createdAt}</Content>}
            {item.name && (
              <Content>
                {item.name}
                {item.channelName && `(${item.channelName})`}
              </Content>
            )}
            {item.nickname && <Content>{item.nickname}</Content>}
            {item.ch_name && <Content>{item.assignee}</Content>}
            {item.email && <Content>{item.email}</Content>}
            {item.mobile && <Content>{item.mobile}</Content>}
            {item.state && changeState(item.state)}
            <ButtonBox>
              {item.role &&
                item.userId &&
                renderButton(page, item.role, item.userId)}
            </ButtonBox>
          </Item>
        ))}
      </List>
    );
  };

  const renderOrderList = () => {
    const orderList = list as OrderItemType[];
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
            <Content>{item.orderedAt}</Content>
            <Content>{`${item.ordererName}${
              item.ordererChannelName && `(${item.ordererChannelName})`
            }`}</Content>
            {item.assigneeName && <Content>{item.assigneeName}</Content>}
            {item.orderState && (
              <Content>{renderOrderState(item.orderState)}</Content>
            )}
            {role && item.orderId && (
              <ButtonBox>{renderButton(page, role, item.orderId)}</ButtonBox>
            )}
          </Item>
        ))}
      </List>
    );
  };

  return {
    list,
    renderList,
    renderCategory,
    changeState,
    renderButton,
    renderOrderList,
  };
};

export default useList;
