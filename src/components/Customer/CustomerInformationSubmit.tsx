import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import UIButton, { LineButton } from 'components/InputForm/UIButton';
import FetchData, { CustomerDetailModel } from 'service/fetch';

interface CustomerSubInformationTpye {
  customerId: string;
  onCancel?: () => void;
}

interface BoxLayoutProps {
  size?: 'half' | 'quarter';
}

const CustomerInformationSubmit = ({
  customerId,
  onCancel,
  ...rest
}: CustomerSubInformationTpye & React.HTMLAttributes<HTMLFormElement>) => {
  const [customer, setCustomer] = useState<CustomerDetailModel>({
    channelLink: '',
    channelName: '',
    email: '',
    mobile: '',
    name: '',
    userId: '',
    onedriveLink: '',
    personaLink: '',
    memo: '',
  });
  const { getCustomerDetail } = new FetchData();

  async function setCustomersData() {
    if (customerId === '') return;
    const res = await getCustomerDetail(customerId);
    if (!res) return;
    setCustomer(res);
  }

  useEffect(() => {
    setCustomersData();
  }, [customerId]);

  return (
    <CustomerInfoLayout {...rest}>
      <CustomerInfoLineLayout>
        <BoxLayout size="quarter">
          <CustomerInfoTitle>고객명</CustomerInfoTitle>
          <InfoTextArea
            name="name"
            defaultValue={customer.name}
            placeholder="고객명을 입력해주세요."
          />
        </BoxLayout>
        <BoxLayout size="quarter">
          <CustomerInfoTitle>채널명</CustomerInfoTitle>
          <InfoTextArea
            name="channelName"
            defaultValue={customer.channelName}
            placeholder="채널명을 입력해주세요."
          />
        </BoxLayout>
        <BoxLayout size="half">
          <CustomerInfoTitle>채널주소</CustomerInfoTitle>
          <InfoTextArea
            name="channelLink"
            defaultValue={customer.channelLink}
            placeholder="채널주소를 입력해주세요."
          />
        </BoxLayout>
      </CustomerInfoLineLayout>
      <CustomerInfoLineLayout>
        <BoxLayout size="quarter">
          <CustomerInfoTitle>이메일</CustomerInfoTitle>
          <InfoTextArea
            name="email"
            defaultValue={customer.email}
            placeholder="이메일를 입력해주세요."
          />
        </BoxLayout>
        <BoxLayout size="quarter">
          <CustomerInfoTitle>전화번호</CustomerInfoTitle>
          <InfoTextArea
            name="mobile"
            defaultValue={customer.mobile}
            placeholder="전화번호를 입력해주세요."
          />
        </BoxLayout>
        <BoxLayout size="half">
          <CustomerInfoTitle>페르소나</CustomerInfoTitle>
          <InfoTextArea
            name="personaLink"
            defaultValue={customer.personaLink}
            placeholder="페르소나를 입력해주세요."
          />
        </BoxLayout>
      </CustomerInfoLineLayout>
      <BoxLayout>
        <CustomerInfoTitle>OneDrive</CustomerInfoTitle>
        <InfoTextArea
          name="onedriveLink"
          defaultValue={customer.onedriveLink}
          placeholder="원드라이브 링크를 입력해주세요."
        />
      </BoxLayout>
      <BoxLayout>
        <CustomerInfoTitle>비고</CustomerInfoTitle>
        <InfoNoteTextArea
          name="memo"
          defaultValue={customer.memo}
          placeholder="비고란을 입력해주세요."
        />
      </BoxLayout>
      <InfoButtonWrap>
        <LineButton
          text="취소"
          width="100px"
          color="white"
          onClick={onCancel}
        />
        <UIButton text="수정 완료" width="228px" color="skyblue" />
      </InfoButtonWrap>
    </CustomerInfoLayout>
  );
};

CustomerInformationSubmit.defaultProps = {
  onCancel: undefined,
};

const CustomerInfoLayout = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const CustomerInfoLineLayout = styled.div`
  width: 100%;
  display: flex;

  > div:nth-child(1),
  > div:nth-child(2) {
    margin-right: 32px;
  }

  > div:nth-child(3) {
    flex-grow: 1;
  }
`;

const BoxLayout = styled.div<BoxLayoutProps>`
  width: ${({ size }) => {
    if (!size) return '100%';
    return size === 'quarter' ? '24%' : '45%';
  }};
  min-width: 240px;
  display: flex;
  flex-direction: column;
  margin-bottom: 37px;
`;

const CustomerInfoTitle = styled.div`
  display: flex;
  margin-bottom: 8px;
  font-size: 13px;
  color: ${({ theme }) => theme.color.gray};
  font-weight: 400;
  line-height: 20px;
`;

const InfoTextArea = styled.input`
  height: 48px;
  padding: 14px 12px;
  font-size: 13px;
  border: 1px solid ${({ theme }) => theme.color.stone};
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 6px;

  &::placeholder {
    color: ${({ theme }) => theme.color.paleBlue};
  }
`;

const InfoNoteTextArea = styled.textarea`
  height: 256px;
  padding: 14px 0 14px 12px;
  border: 1px solid ${({ theme }) => theme.color.stone};
  font-size: 13px;
  background-color: ${({ theme }) => theme.color.white};
  border-radius: 6px;
`;

const InfoButtonWrap = styled.div`
  display: flex;
  gap: 8px;
  margin-left: auto;
`;

export default CustomerInformationSubmit;
