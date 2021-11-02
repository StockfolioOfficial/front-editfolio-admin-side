import { useStores } from 'index';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useHistory } from 'react-router';
import OrderFetchData, { OrderDataModal } from 'service/fetchOrder';

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
  page: 'complete' | 'edit' | 'request' | 'finish' | string;
}

const OrderControlPanel = observer(({ data, page }: OrderControlPanelProps) => {
  const { adminStore } = useStores();
  const history = useHistory();
  const { creators } = adminStore;
  const { saveOrderDetailData } = new OrderFetchData();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newValue = e.currentTarget;
    const formData = new FormData(newValue);
    const formKeys = [...formData.keys()];
    if (formKeys.includes('calender') && formData.get('calender') === '') {
      window.alert('마감 날짜를 선택해주세요.');
      return;
    }
    if (formKeys.includes('editors') && formData.get('editors') === '-') {
      window.alert('편집자를 선택해주세요.');
      return;
    }
    const changeData: Partial<
      Pick<OrderDataModal, 'dueDate' | 'orderState'> &
        Record<'assignee', OrderDataModal['assignee']['assignee']>
    > = {};
    if (data.dueDate || formKeys.includes('calender'))
      changeData.dueDate = (formData.get('calender') as string) || data.dueDate;
    if (data.assignee || formKeys.includes('editors')) {
      const creator = formData.get('editors');
      const creatorId = creators.find((cre) => cre.name === creator)?.userId;
      if (!creatorId) return window.alert('정확한 편집자를 선택해주세요.');
      changeData.assignee = creatorId;
    }
    if (data.orderState || formKeys.includes('state'))
      changeData.orderState = data.orderState;
    if (!changeData.assignee && !changeData.dueDate && !changeData.orderState)
      return;
    const saveRes = await saveOrderDetailData({
      orderId: data.orderId,
      assignee: changeData.assignee || '',
      dueDate: changeData.dueDate || '',
      orderState: changeData.orderState || 0,
    });
    if (saveRes) history.push('/request-producting');
  };

  return (
    <>
      <ControlForm onSubmit={page !== 'complete' ? handleSubmit : undefined}>
        <LineLayout>
          <LineList>
            <SelectOrderData title="주문 일시" data={data.orderedAt} />
          </LineList>
          <LineList>
            <SelectDeliveryDate
              defaultValue={data.dueDate}
              fixed={page === 'complete'}
            />
          </LineList>
          <LineList>
            <SelectEditor options={creators} />
          </LineList>
          <LineList>
            <SelectStatus value={data.orderStateContent} />
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
});

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
