import { CreatorModal } from 'contexts/adminStore';
import { useRef } from 'react';
import OrderControlItem from './OrderControlItem';

interface SelectEditorProps {
  options: CreatorModal[];
}

const SelectEditor = ({ options }: SelectEditorProps) => {
  const editorInputRef = useRef<HTMLInputElement | null>(null);

  return (
    <OrderControlItem
      title="담당 편집자"
      type="selectBox"
      inputProps={{
        name: 'editors',
        ref: editorInputRef,
        autoComplete: 'off',
      }}
      options={options.map((creator) => ({
        text: `${creator.name}${
          creator.nickname ? `(${creator.nickname})` : ''
        }`,
        value: creator.name,
      }))}
    />
  );
};

export default SelectEditor;
