import React from 'react';
import styled from 'styled-components';

interface buttonProps {
  text: string;
  color: 'purple' | 'skyblue';
}

interface buttonStyle {
  color: 'purple' | 'skyblue';
}

const UIButton = ({ text, color }: buttonProps) => {
  return <Button color={color}>{text}</Button>;
};

const Button = styled.button<buttonStyle>`
  width: 336px;
  height: 48px;
  margin-top: 60px;
  background-color: ${({ theme, color }) => theme.color[color]};
  border-radius: 6px;
  color: ${({ theme }) => theme.color.white};
`;

export default UIButton;
