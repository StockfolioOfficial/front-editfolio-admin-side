import React, { useEffect, useRef, useState } from 'react';
import OrderControlItem, { OptionType } from './OrderControlItem';

interface SelectStatusProps {
  value?: string;
}

interface OptionResModal {
  content: string;
  id: number;
}

const SelectStatus = ({ value }: SelectStatusProps) => {
  const statusRef = useRef<HTMLInputElement | null>(null);
  const [option, setOption] = useState<OptionType[]>([]);
  async function renderOption() {
    let stateId = 0;
    switch (value) {
      case '편집자 배정 중':
        stateId = 1;
        break;
      case '영상 검토 중':
        stateId = 2;
        break;
      case '편집 중':
        stateId = 3;
        break;
      case '이펙트 추가 중':
        stateId = 4;
        break;
      case '완료':
        stateId = 5;
        break;
      case '최종 완료':
        stateId = 6;
        break;
      case '수정 중':
        stateId = 7;
        break;
      case '수정 완료':
        stateId = 8;
        break;
      default:
        break;
    }
    const optionRes = await fetch(
      `https://api-ef.stockfolio.ai/order/state/${stateId}/sub`,
    ).then<OptionResModal[]>((res) => {
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
  }, []);

  return (
    <OrderControlItem
      title="상태"
      type="selectBox"
      inputProps={{
        name: 'status',
        value,
        ref: statusRef,
        disabled: option.length === 0,
        autoComplete: 'off',
      }}
      options={option}
    />
  );
};

SelectStatus.defaultProps = {
  value: undefined,
};

export default SelectStatus;
