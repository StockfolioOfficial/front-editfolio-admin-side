import { useState, useEffect } from 'react';
import styled from 'styled-components';

interface colorProps {
  color: 'purple' | 'gray' | 'violet' | 'mint' | 'skyblue' | 'black';
}

interface itemProps {
  ordered_at_datetime: string;
  name: string;
  assignee: string;
  state: number;
  orderable_cnt: string;
  start: string;
  end: string;
  due_data: string;
  ch_name: string;
  nickname: string;
  email: string;
  mobile: string;
}

const useList = (fetch?: () => Promise<any>) => {
  const [list, setList] = useState([]);

  useEffect(() => {
    if (!fetch) return;
    fetch().then((res: []) => setList(res));
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
    }
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

  const renderCategory = (category: string[]) => {
    return (
      <CategoryList>
        {category.map((item) => (
          <CategoryItem key={item}>{item}</CategoryItem>
        ))}
      </CategoryList>
    );
  };

  const List = styled.ul``;

  const Item = styled.li`
    display: flex;
    margin-left: 32px;

    & span {
      width: 212px;
      margin-bottom: 12px;
      padding: 14px 0;
      text-align: center;
      color: ${({ theme }) => theme.color.black};
    }
  `;

  const Content = styled.span``;

  const State = styled.div`
    display: flex;
    align-items: center;
    width: 212px;
    margin-bottom: 12px;
    padding: 14px 0;
    text-align: center;
  `;

  const Circle = styled.div<colorProps>`
    width: 8px;
    height: 8px;
    margin-right: 8px;
    border-radius: 50%;
    background-color: ${({ theme, color }) => theme.color[color]};
  `;

  const renderList = () => {
    return (
      <List>
        {list.map((item: itemProps) => (
          <Item key={item.name}>
            {item.ordered_at_datetime && (
              <Content>{item.ordered_at_datetime}</Content>
            )}
            {item.name && <Content>{item.name}</Content>}
            {item.nickname && <Content>{item.nickname}</Content>}
            {item.ch_name && <Content>{item.assignee}</Content>}
            {item.email && <Content>{item.email}</Content>}
            {item.mobile && <Content>{item.mobile}</Content>}
            {changeState(item.state)}
          </Item>
        ))}
      </List>
    );
  };

  return { list, renderList, renderCategory, changeState };
};

export default useList;
