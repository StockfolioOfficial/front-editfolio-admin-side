import CustomerRequests from 'components/Customer/CustomerRequests';
import useTime from 'hooks/useTime';
import { useStores } from 'index';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { useHistory } from 'react-router';
import OrderFetchData, {
  OrderDetailModel,
  stateDatas,
} from 'service/fetchOrder';
import styled from 'styled-components';
// import EditsCnt from './EditsCnt';
import SelectDeliveryDate from './SelectDeliveryDate';
import SelectEditor from './SelectEditor';
import SelectOrderData from './SelectOrderData';
import SelectState from './SelectState';
import SelectSubmit from './SelectSubmit';

interface OrderControlPanelProps {
  data: OrderDetailModel;
  page: 'complete' | 'edit' | 'request' | 'finish' | string;
}

const OrderControlPanel = observer(({ data, page }: OrderControlPanelProps) => {
  const history = useHistory();
  const { convertRFC3339 } = useTime();
  const { adminStore } = useStores();
  const { creators, getCreatorId } = adminStore;
  const { saveOrderDetailData } = new OrderFetchData();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newValue = e.currentTarget;
    const formData = new FormData(newValue);
    const dueDataValue = formData.get('calender')
      ? convertRFC3339(new Date(formData.get('calender') as string))
      : data.dueDate;
    const assigneeValue = formData.get('editors')
      ? getCreatorId(formData.get('editors') as string)
      : data.assignee?.assignee;
    const stateValue = formData.get('state')
      ? stateDatas.find(
          (stateData) => stateData.content === formData.get('state'),
        )?.id
      : data.orderState;

    if (!dueDataValue) {
      window.alert('마감 날짜를 선택해주세요.');
      return;
    }

    if (!assigneeValue || assigneeValue === '-') {
      window.alert('편집자를 선택해주세요.');
      return;
    }

    if (!stateValue) {
      window.alert('상태값을 설정해주세요.');
      return;
    }
    console.log(stateValue, formData.get('state'));
    const saveRes = await saveOrderDetailData({
      orderId: data.orderId,
      dueDate: dueDataValue,
      assignee: assigneeValue,
      orderState: stateValue,
    });
    console.log(saveRes);
    if (saveRes) history.push('/request-producting');
  };

  return (
    <>
      <ControlForm onSubmit={page !== 'complete' ? handleSubmit : undefined}>
        <LineLayout>
          <Li>
            <SelectOrderData
              title="주문 일시"
              data={data.orderedAt?.replace('T', ' • ').split('.')[0]}
            />
          </Li>
          <DueDateWrap>
            <SelectDeliveryDate
              defaultValue={data.dueDate?.split('T')[0]}
              isComplete={page === 'complete'}
            />
          </DueDateWrap>
          <Li>
            <SelectEditor
              defaultValue={data.assignee?.assigneeName}
              options={creators}
              isComplete={page === 'complete'}
            />
          </Li>
          <StateWrap>
            <SelectState
              defaultState={{
                id: data.orderState,
                content: data.orderStateContent,
              }}
            />
          </StateWrap>
          {page !== 'complete' && (
            <ButtonWrap>
              <SelectSubmit />
              {page === 'edit' && (
                <p>남은 수정요청 수: {data.remainingEditCount}</p>
              )}
            </ButtonWrap>
          )}
        </LineLayout>
        <CustomerRequests content={data.requirement} />
      </ControlForm>
    </>
  );
});

const ControlForm = styled.form`
  padding-bottom: 32px;
  border-bottom: 1px solid ${({ theme }) => theme.color.stone};
`;

const LineLayout = styled.ul`
  display: flex;
  flex-flow: row wrap;
  margin: 0 24px 0 8px;
`;

const Li = styled.li`
  min-width: 180px;
  display: inline-flex;
  flex-direction: column;
  margin-right: 32px;
  flex-shrink: 0;

  &:last-child {
    margin-right: 0;
  }
`;

const DueDateWrap = styled(Li)`
  input {
    width: 188px;
  }
`;

const StateWrap = styled(Li)`
  input {
    width: 208px;
  }
`;

const ButtonWrap = styled(Li)`
  flex-direction: row;
  > p {
    height: 48px;
    display: flex;
    align-items: center;
    margin: 28px 8px 0 48px;
    font-size: 13px;
    color: ${({ theme }) => theme.color.gray};
  }
`;

export default OrderControlPanel;
