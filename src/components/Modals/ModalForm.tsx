import React from 'react';
import styled from 'styled-components';

interface buttonProps {
  color: 'purple' | 'white';
}

interface modalContent {
  description: string;
  subDescription: string;
  actionButton?: () => void;
}

interface modalProps {
  content: modalContent;
}

const ModalForm = ({ content }: modalProps) => {
  const { description, subDescription, actionButton } = content;
  const onClose = () => {
    console.log('close');
  };

  return (
    <Background>
      <Container>
        <Description>{description}</Description>
        <SubDescriptionBox>
          {subDescription.split('\n').map((word) => (
            <SubDescription key={word}>{word}</SubDescription>
          ))}
        </SubDescriptionBox>
        <ButtonBox>
          <Button color="white" onClick={onClose}>
            아니오
          </Button>
          <Button color="purple" onClick={actionButton}>
            예
          </Button>
        </ButtonBox>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  position: absolute;
  width: 100vmax;
  height: inherit;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: 100000;
`;

const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 312px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 6px;
  transform: translate(-50%, -50%);
`;

const Description = styled.p`
  margin: 48px 12px 16px 12px;
`;

const SubDescription = styled.p`
  color: ${({ theme }) => theme.color.gray};
  font-size: 11px;
  line-height: 1.4545454545;
`;

const SubDescriptionBox = styled.div`
  margin-bottom: 43px;
`;

const ButtonBox = styled.div`
  width: 100%;
`;

const Button = styled.button<buttonProps>`
  width: 50%;
  padding: 13px 0;
  background-color: ${({ theme, color }) => theme.color[color]};
  border-top: 1px solid ${({ theme }) => theme.color.stone};
  border-radius: 0 0 ${({ color }) => (color === 'purple' ? '6px 0' : '0 6px')};
  color: ${({ theme, color }) =>
    color === 'purple' ? theme.color.white : theme.color.black};
  font-size: 14px;
  line-height: 1.5714285714;
`;

export default ModalForm;
