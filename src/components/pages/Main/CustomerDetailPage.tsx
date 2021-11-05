import { useParams } from 'react-router';
import CustomerSubInformation from 'components/Customer/CustomerInformation';
import TitleHeader from 'components/TitleHeader';
import styled from 'styled-components';
import CustomerInformationSubmit from 'components/Customer/CustomerInformationSubmit';
import { FormEvent, useState } from 'react';
import UIButton from 'components/Buttons/UIButton';
import FetchData, { CustomerDetailModel } from 'service/fetch';

const CustomerDetailPage = () => {
  const param = useParams<{ id: string }>();
  const [DetailMode, setMode] = useState<'default' | 'edit'>('default');
  const { editCustomerDetail } = new FetchData();

  async function EditData(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const body: CustomerDetailModel = {
      channelLink: '',
      channelName: '',
      email: '',
      mobile: '',
      name: '',
      userId: '',
      onedriveLink: '',
      personaLink: '',
      memo: '',
    };
    const formData = new FormData(e.currentTarget);
    const keys = formData.keys();

    [...keys].forEach((key) => {
      if (
        key === 'memo' &&
        (formData.get(key) === undefined || formData.get(key) === '')
      )
        return;
      body[key as keyof CustomerDetailModel] = formData.get(key) as string;
    });
    body.userId = param.id;
    const res = editCustomerDetail(body);
    if (!res) return;
    setMode('default');
  }

  return (
    <>
      <TitleHeader title="고객 정보" />
      {DetailMode === 'default' ? (
        <DetailSection>
          <CustomerSubInformation customerId={param.id} />
          <EditButton
            width="336px"
            text="수정"
            color="skyblue"
            onClick={() => setMode('edit')}
          />
        </DetailSection>
      ) : (
        <DetailSection>
          <CustomerInformationSubmit
            customerId={param.id}
            onSubmit={(e) => EditData(e)}
            onCancel={() => setMode('default')}
          />
        </DetailSection>
      )}
    </>
  );
};

const EditButton = styled(UIButton)`
  display: block;
  margin: 40px auto 0;
`;

const DetailSection = styled.section`
  padding-top: 24px;
  border-top: 1px solid ${({ theme }) => theme.color.stone};
`;

export default CustomerDetailPage;
