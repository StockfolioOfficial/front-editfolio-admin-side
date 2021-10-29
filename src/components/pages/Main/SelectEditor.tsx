import { useRef } from 'react';
import OrderControlItem from './OrderControlItem';

const SelectEditor = () => {
  const editorInputRef = useRef<HTMLInputElement | null>(null);
  // const [inputValues, setInputValues] = useState('');
  // const [showMenu, setShowMenu] = useState(false);

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
      title="담당 편집자"
      type="selectBox"
      inputProps={{
        name: 'editors',
        ref: editorInputRef,
        autoComplete: 'off',
      }}
    />
  );
};

export default SelectEditor;
