import React, { useEffect, useRef, useState } from 'react';
import OrderControlItem, { OptionType } from './OrderControlItem';

interface OptionResModel {
  content: string;
  id: number;
}

interface SelectStatusProps {
  defaultState?: OptionResModel;
}

const SelectState = ({ defaultState }: SelectStatusProps) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [option, setOption] = useState<OptionType[]>([]);
  async function renderOption() {
    if (!defaultState) return;
    const optionRes = await fetch(
      `https://api-ef.stockfolio.ai/order/state/${defaultState.id}/sub`,
    ).then<OptionResModel[]>((res) => {
      if (res.status === 200) return res.json();
      return [];
    });
    setOption(
      optionRes.map((op) => ({
        text: op.content,
        value: op.content,
      })),
    );
  }

  useEffect(() => {
    renderOption();
    if (!inputRef.current || !defaultState) return;
    inputRef.current.value = defaultState.content;
  }, [defaultState]);

  return (
    <OrderControlItem
      title="상태"
      type="selectBox"
      inputProps={{
        name: 'state',
        defaultValue: defaultState?.content,
        ref: inputRef,
        disabled: option.length === 0,
        autoComplete: 'off',
      }}
      options={option}
    />
  );
};

SelectState.defaultProps = {
  defaultState: undefined,
};

export default SelectState;
