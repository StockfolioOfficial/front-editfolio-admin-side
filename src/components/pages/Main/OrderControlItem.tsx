import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowSvg } from '../../../assets/styles/arrowPurple.svg';

interface OptionType {
  name: string;
  nickname: string;
  userId: string;
}

interface OrderControlItem {
  title: string;
  content?: string;
  type?: 'selectBox' | 'calendar' | 'editButton';
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement>;
}

const DROPMENU = [
  { userId: '1', name: '김승찬', nickname: '김' },
  { userId: '2', name: '주철진', nickname: '주' },
  { userId: '3', name: '송치헌', nickname: '송' },
  { userId: '4', name: '성우진', nickname: '성' },
  { userId: '5', name: '김정수', nickname: '김' },
];

const STETUS = [
  { id: 1, content: '영상검토중' },
  { id: 2, content: '편집자 배정 중' },
  { id: 3, content: '편집 중' },
  { id: 4, content: '이펙트 추가 중' },
  { id: 5, content: '수정 중' },
  { id: 6, content: '완료' },
];

const OrderControlItem = ({
  title,
  type,
  content,
  inputProps,
}: OrderControlItem) => {
  const [options, setOptions] = useState<OptionType[]>([]);

  function renderContent() {
    switch (type) {
      case 'selectBox':
        return (
          <OrderInputBox active>
            <OrderSelectInput type="text" {...inputProps} />
            <ArrowSvg />
            {options.length > 0 && (
              <OrderOptions>
                {options.map((option) => (
                  <li key={`selectBox-${option.name}`}>
                    <button type="button">{option.name}</button>
                  </li>
                ))}
              </OrderOptions>
            )}
          </OrderInputBox>
        );
      case 'calendar':
        return (
          <OrderContentBox>
            <OrderSelectInput type="date" name="calender" {...inputProps} />
          </OrderContentBox>
        );
      default:
        return <OrderData>{content}</OrderData>;
    }
  }

  useEffect(() => {
    let resOption: OptionType[] = [];
    switch (title) {
      case '상태':
        resOption = STETUS.map((stetus) => ({
          userId: `${stetus.id}`,
          name: stetus.content,
          nickname: stetus.content,
        }));
        break;
      case '담당 편집자':
        resOption = DROPMENU;
        break;
      default:
        resOption = [];
    }
    setOptions(resOption);
  }, []);

  return (
    <>
      <OrderTitle>{title}</OrderTitle>
      {renderContent()}
    </>
  );
};

OrderControlItem.defaultProps = {
  content: '',
  type: undefined,
  inputProps: undefined,
};

const OrderTitle = styled.div`
  margin-bottom: 8px;
  color: #77828b;
  font-size: 13px;
  line-height: 20px;
`;

const OrderData = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
  font-size: 13px;
  line-height: 20px;
`;

const OrderContentBox = styled.div`
  height: 48px;
  position: relative;
`;

const OrderSelectInput = styled.input`
  max-width: 190px;
  height: 100%;
  position: relative;
  padding: 12px 12px 12px 16px;
  font-size: 13px;
  line-height: 20px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
  /* &::-webkit-calendar-picker-indicator {
  } */
`;

const OrderInputBox = styled(OrderContentBox)<{ active: boolean }>`
  > svg {
    position: absolute;
    top: 50%;
    right: 19px;
    z-index: 1;
    transform: translateY(-50%)
      ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0)')};
  }
`;

const OrderOptions = styled.ul`
  width: 100%;
  position: absolute;
  top: calc(100% - 6px);
  padding: 18px 8px 12px;
  background-color: #ffffff;
  border: 1px solid #eeeeee;
  border-radius: 0 0 6px 6px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  z-index: 0;

  li,
  button {
    width: 100%;
  }
  button {
    padding: 4px 8px;
    font-size: 13px;
    line-height: 20px;
    text-align: left;
    border-radius: 6px;

    &:hover {
      background: #eeeeee;
    }
  }
`;

export default OrderControlItem;
