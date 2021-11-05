import React from 'react';
import styled from 'styled-components';
import { theme } from 'assets/styles/theme';

interface buttonProps {
  text: string;
  color?: keyof typeof theme.color;
  width: string;
}

const UIButton = ({
  width,
  text,
  color,
  ...rest
}: buttonProps & React.HTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button width={width} color={color || 'black'} {...rest}>
      {text}
    </Button>
  );
};

const Button = styled.button<Pick<buttonProps, 'width' | 'color'>>`
  width: ${({ width }) => width};
  height: 48px;
  margin: 28px 0;
  background-color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.white};
  border-radius: 6px;
  color: ${({ theme, color }) =>
    color === 'white' ? theme.color.black : theme.color.white};
`;

UIButton.defaultProps = {
  color: undefined,
};

export default UIButton;

export const LineButton = ({
  ...rest
}: React.ComponentProps<typeof UIButton>) => <LineButtonRoot {...rest} />;

const LineButtonRoot = styled(UIButton)`
  border: 1px solid ${({ theme }) => theme.color.stone};
`;
