import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowSvg } from '../../../assets/styles/arrowPurple.svg';

export interface OptionType {
  text: string;
  value: string;
}

interface OrderControlItemProps {
  title: string;
  content?: string;
  type?: 'selectBox' | 'calendar' | 'editButton';
  inputProps?: React.InputHTMLAttributes<HTMLInputElement> &
    React.RefAttributes<HTMLInputElement>;
  options?: OptionType[];
}

const OrderControlItem = ({
  title,
  type,
  content,
  inputProps,
  options = [],
}: OrderControlItemProps) => {
  const { onFocus, ref, ...inputRest } = inputProps || {};
  const [open, setOpen] = useState<boolean>(false);
  const inputRef = (ref ||
    useRef<HTMLInputElement | null>(
      null,
    )) as React.MutableRefObject<HTMLInputElement | null>;

  function selectOption(target: string) {
    if (!inputRef.current) return;
    inputRef.current.value = target;
    if (open) setOpen(false);
  }

  function onFocusIn(e: React.FocusEvent<HTMLInputElement>) {
    if (!open) setOpen(true);
    if (onFocus) onFocus(e);
  }

  function renderContent() {
    switch (type) {
      case 'selectBox':
        return (
          <OrderInputBox active={open}>
            <OrderSelectInput
              type="text"
              onFocus={(e) => onFocusIn(e)}
              onChange={(e) => e.currentTarget.value}
              ref={inputRef}
              {...inputRest}
            />
            {options.length > 0 && !inputProps?.disabled && (
              <button type="button" onClick={() => setOpen(!open)}>
                <ArrowSvg />
              </button>
            )}
            {options.length > 0 && open && (
              <OrderOptions>
                {options.map((option) => (
                  <li key={`selectBox-${inputProps?.id || ''}-${option.text}`}>
                    <button
                      type="button"
                      onClick={() => selectOption(option.value)}
                    >
                      {option.text}
                    </button>
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
  options: [],
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
  min-width: 190px;
  height: 100%;
  position: relative;
  padding: 12px 12px 12px 16px;
  font-size: 13px;
  line-height: 20px;
  border-radius: 6px;
  background-color: #ffffff;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;

  &:disabled {
    cursor: default;
    box-shadow: none;
    background-color: ${({ theme }) => theme.color.stone};
  }
  /* &::-webkit-calendar-picker-indicator {
  } */
`;

const OrderInputBox = styled(OrderContentBox)<{ active: boolean }>`
  > button {
    display: flex;
    align-items: center;
    position: absolute;
    top: 50%;
    right: 7px;
    padding: 8px 7px;
    cursor: pointer;
    z-index: 1;
    transform: translateY(-50%)
      ${({ active }) => (active ? 'rotate(180deg)' : 'rotate(0)')};
    transition: transform 0.1s;
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
