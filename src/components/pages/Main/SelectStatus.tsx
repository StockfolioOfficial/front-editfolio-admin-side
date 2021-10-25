import { useState, useRef } from 'react';
import styled from 'styled-components';
import { ReactComponent as ArrowSvg } from '../../../assets/styles/arrowPurple.svg';
import SelectList from './SelectList';

interface DropDown {
  showMenu: boolean;
}

const DROPMENU = [
  { id: 1, editor: '영상검토중' },
  { id: 2, editor: '편집자 배정 중' },
  { id: 3, editor: '편집 중' },
  { id: 4, editor: '이펙트 추가 중' },
  { id: 5, editor: '수정 중' },
  { id: 6, editor: '완료' },
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
    setInputValues(nameInput.current.value);
  };

  const matchValue = DROPMENU.filter((list) =>
    list.editor.includes(inputValues),
  );
  return (
    <>
      <OrderDateTitle>상태</OrderDateTitle>
      <SelectInputBox onClick={handleDropToggle}>
        <SelectInput
          name="status"
          value={inputValues}
          onChange={handleOnChange}
          ref={nameInput}
        />
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
  position: relative;
  margin: 8px 0 0 56px;
  background-color: #ffffff;
`;

const SelectInput = styled.input`
  position: relative;
  padding: 16px 35px 13px 14px;
  border-radius: 6px;
  font-size: 13px;
  line-height: 20px;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const ArrowIcon = styled(ArrowSvg)<DropDown>`
  position: absolute;
  top: 21px;
  right: 21px;
  transform: ${(props) => (props.showMenu ? 'rotate(180deg)' : 'rotate(0)')};
`;

export default SelectStatus;
