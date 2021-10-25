import { useState, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowSvg } from '../../../assets/styles/arrowPurple.svg';
import SelectList from './SelectList';

interface DropDown {
  showMenu: boolean;
}

const DROPMENU = [
  { id: 1, editor: '김승찬' },
  { id: 2, editor: '주철진' },
  { id: 3, editor: '송치헌' },
  { id: 4, editor: '성우진' },
  { id: 5, editor: '김정수' },
];

const SelectStatus = () => {
  const [inputValues, setInputValues] = useState('');
  const [showMenu, setShowMenu] = useState(false);
  const nameInput = useRef<HTMLInputElement | null>(null);

  const handleDropToggle = () => {
    setShowMenu(!showMenu);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(e.target.value);
  };

  const onReset = (value: string) => {
    if (!nameInput.current) return;
    nameInput.current.focus();
    nameInput.current.value = value;
    setShowMenu(false);
  };

  const matchValue = DROPMENU.filter((list) =>
    list.editor.includes(inputValues),
  );
  return (
    <>
      <OrderDateTitle>상태</OrderDateTitle>
      <SelectInputBox onClick={handleDropToggle}>
        <SelectInput onChange={handleOnChange} ref={nameInput} />
        <ArrowIcon showMenu={showMenu} />
        {showMenu && <SelectList matchValue={matchValue} onReset={onReset} />}
      </SelectInputBox>
    </>
  );
};

const OrderDateTitle = styled.div`
  margin: 26px 0 0 56px;
  color: #77828b;
  font-size: 13px;
  line-height: 20px;
`;

const SelectInputBox = styled.div`
  margin: 8px 0 0 56px;
  border-radius: 6px;
  background-color: #ffffff;
`;

const SelectInput = styled.input`
  padding: 14px 0 14px 16px;
  font-size: 13px;
  line-height: 20px;
`;

const ArrowIcon = styled(ArrowSvg)<DropDown>`
  margin-right: 21px;
  transform: ${(props) => (props.showMenu ? 'rotate(180deg)' : 'rotate(0)')};
`;

export default SelectStatus;
