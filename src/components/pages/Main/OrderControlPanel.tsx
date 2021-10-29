import React from 'react';
import styled from 'styled-components';
import CustomerRequests from './CustomerRequests';
import { OrderDataType } from './DetailPage';
import EditsCnt from './EditsCnt';
import SelectDeliveryDate from './SelectDeliveryDate';
import SelectEditor from './SelectEditor';
import SelectOrderData from './SelectOrderData';
import SelectStatus from './SelectStatus';
import SelectSubmit from './SelectSubmit';

interface OrderControlPanelProps {
  data: OrderDataType;
  page: string;
}

const OrderControlPanel = ({ data, page }: OrderControlPanelProps) => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newValue = e.currentTarget;
    const formData = new FormData(newValue);
    console.log(formData.get('editors'));
    console.log(formData.get('status'));
    console.log(formData.get('calender'));
  };

  return (
    <>
      <ControlForm onSubmit={page !== 'complete' ? handleSubmit : undefined}>
        <LineLayout>
          <LineList>
            <SelectOrderData date={data.orderedAt} />
          </LineList>
          <LineList>
            <SelectDeliveryDate
              defaultValue={data.dueDate}
              fixed={page === 'complete'}
            />
          </LineList>
          <LineList>
            <SelectEditor />
          </LineList>
          <LineList>
            <SelectStatus />
          </LineList>
          {page !== 'complete' &&
            (page === 'edit' ? (
              <LineList>
                <EditsCnt />
              </LineList>
            ) : (
              <LineList>
                <SelectSubmit />
              </LineList>
            ))}
        </LineLayout>
        <CustomerRequests />
      </ControlForm>
    </>
  );
};

const ControlForm = styled.form`
  margin-top: 26px;
  padding-bottom: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.color.stone};
`;

const LineLayout = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0 24px 0 8px;
`;

const LineList = styled.li`
  display: inline-flex;
  flex-direction: column;
  margin-right: 32px;

  &:last-child {
    margin-right: 0;
  }
`;

export default OrderControlPanel;
