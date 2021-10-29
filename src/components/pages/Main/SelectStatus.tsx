import { useRef } from 'react';
import OrderControlItem from './OrderControlItem';

// interface DropDown {
//   showMenu: boolean;
// }

const SelectStatus = () => {
  // const [inputValues, setInputValues] = useState('');
  // const [showMenu, setShowMenu] = useState(false);
  const statusRef = useRef<HTMLInputElement | null>(null);

  // const handleDropToggle = () => {
  //   setShowMenu(!showMenu);
  // };

  // const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   setInputValues(e.target.value);
  // };

  // const onReset = (value: string) => {
  //   if (!nameInput.current) return;
  //   nameInput.current.focus();
  //   nameInput.current.value = value;
  //   setShowMenu(false);
  //   setInputValues(nameInput.current.value);
  // };

  // const matchValue = DROPMENU.filter((list) =>
  //   list.editor.includes(inputValues),
  // );
  return (
    <OrderControlItem
      title="상태"
      type="selectBox"
      inputProps={{
        name: 'status',
        ref: statusRef,
        autoComplete: 'off',
      }}
    />
  );
};

export default SelectStatus;
