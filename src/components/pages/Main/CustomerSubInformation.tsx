import React, { useEffect, useState } from 'react';
import FetchData, { CustomerDetailModel } from 'service/fetch';
import styled from 'styled-components';

interface CustomerSubInformationTpye {
  customerId: string;
}

const CustomerSubInformation = ({ customerId }: CustomerSubInformationTpye) => {
  const [subList, setSubList] = useState<CustomerDetailModel>({
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

  async function setCustomerSubList() {
    if (customerId === '') return;
    const res = await getCustomerDetail(customerId);
    if (!res) return;
    setSubList(res);
  }

  useEffect(() => {
    setCustomerSubList();
  }, [customerId]);

  return (
    <CostomerSubInfoRoot>
      <CostomerSubInfoWrap>
        <CustomerInfoTitle>고객명</CustomerInfoTitle>
        <CustomerInfoContent>{subList.name}</CustomerInfoContent>
      </CostomerSubInfoWrap>
      <CostomerSubInfoWrap>
        <CustomerInfoTitle>UID</CustomerInfoTitle>
        <CustomerInfoContent>{subList.userId}</CustomerInfoContent>
      </CostomerSubInfoWrap>
      <CostomerSubInfoWrap>
        <CustomerInfoTitle>이메일</CustomerInfoTitle>
        <CustomerInfoContent>
          {subList.email || '이메일이 없습니다.'}
        </CustomerInfoContent>
      </CostomerSubInfoWrap>
      <CostomerSubInfoWrap>
        <CustomerInfoTitle>전화번호</CustomerInfoTitle>
        <CustomerInfoContent>
          {subList.mobile || '전화번호가 없습니다.'}
        </CustomerInfoContent>
      </CostomerSubInfoWrap>
      <CostomerSubInfoWrap>
        <CustomerInfoTitle>페르소나</CustomerInfoTitle>
        {subList.personaLink ? (
          <CustomerInfoContent>
            <CustomerLink href={subList.personaLink}>
              {subList.personaLink}
            </CustomerLink>
          </CustomerInfoContent>
        ) : (
          <CustomerInfoContent>페스소나가 없습니다.</CustomerInfoContent>
        )}
      </CostomerSubInfoWrap>
      <CostomerSubInfoWrap>
        <CustomerInfoTitle>OneDrive</CustomerInfoTitle>
        <CustomerInfoContent>
          <CustomerLink href={subList.onedriveLink}>
            {subList.onedriveLink}
          </CustomerLink>
        </CustomerInfoContent>
      </CostomerSubInfoWrap>
      <CustomerNoteWrap>
        <CustomerNoteTitle>비고</CustomerNoteTitle>
        <CustomerNote>{subList.memo || '비고란이 없습니다.'}</CustomerNote>
      </CustomerNoteWrap>
    </CostomerSubInfoRoot>
  );
};

const CostomerSubInfoRoot = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding: 24px;

  > div:nth-child(1),
  > div:nth-child(2),
  > div:nth-child(3),
  > div:nth-child(4) {
    width: 45%;
  }
`;

const CostomerSubInfoWrap = styled.div`
  width: 100%;
  height: 48px;
  margin-bottom: 12px;
  display: flex;
`;

const CustomerInfoTitle = styled.div`
  width: 124px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  font-size: 13px;
  color: #77828b;
  font-weight: 400;
  line-height: 20px;
`;

const CustomerInfoContent = styled.p`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding: 0 12px;
  font-size: 13px;
  line-height: 20px;
  border-bottom: 1px solid #becbd8;
`;

const CustomerLink = styled.a`
  color: #6ab4f7;
`;

const CustomerNoteWrap = styled(CostomerSubInfoWrap)`
  height: auto;
`;

const CustomerNoteTitle = styled.div`
  width: 124px;
  padding-top: 14px;
  flex-shrink: 0;
  font-size: 13px;
  color: #77828b;
  font-weight: 400;
  line-height: 20px;
`;

const CustomerNote = styled.div`
  padding: 14px 12px 12px;
  font-size: 13px;
  line-height: 20px;
`;

export default CustomerSubInformation;
