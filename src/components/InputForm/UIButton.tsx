import React from 'react';
import styled from 'styled-components';

interface buttonProps {
  text: string;
  color: 'purple' | 'skyblue';
  width: string;
}

interface buttonStyle {
  color: 'purple' | 'skyblue';
  width: string;
}

const UIButton = ({ width, text, color }: buttonProps) => {
  return (
    <Button width={width} color={color}>
      {text}
    </Button>
  );
};

const Button = styled.button<buttonStyle>`
  width: ${({ width }) => width};
  height: 48px;
  margin: 28px 0;
  background-color: ${({ theme, color }) => theme.color[color]};
  border-radius: 6px;
  color: ${({ theme }) => theme.color.white};
`;

export default UIButton;
