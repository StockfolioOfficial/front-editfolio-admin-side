import { CreatorModel } from 'contexts/adminStore';
import OrderControlItem from './OrderControlItem';

interface SelectEditorProps {
  defaultValue?: string;
  options: CreatorModel[];
  isComplete?: boolean;
}

const SelectEditor = ({
  defaultValue,
  options,
  isComplete,
}: SelectEditorProps) => {
  return (
    <OrderControlItem
      title="담당 편집자"
      type="selectBox"
      inputProps={{
        name: 'editors',
        defaultValue,
        autoComplete: 'off',
        disabled: isComplete,
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

SelectEditor.defaultProps = {
  defaultValue: undefined,
  isComplete: false,
};

export default SelectEditor;
