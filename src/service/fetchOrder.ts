import { baseUrl } from './fetch';

export const stateDatas = [
  {
    id: 1,
    content: '편집자 배정 중',
  },
  {
    id: 2,
    content: '영상 검토 중',
  },
  {
    id: 3,
    content: '편집 중',
  },
  {
    id: 4,
    content: '이펙트 추가 중',
  },
  {
    id: 5,
    content: '완료',
  },
  {
    id: 6,
    content: '최종 완료',
  },
  {
    id: 7,
    content: '수정 중',
  },
  {
    id: 8,
    content: '수정 완료',
  },
];

export interface OrderListModel {
  orderId: string;
  orderedAt: string;
  ordererChannelLink: string;
  ordererChannelName: string;
  ordererName: string;
  orderState?: number;
  orderStateContent?: string;
  assigneeName?: string;
  assigneeNickname?: string;
}

export interface OrderDetailModel {
  assignee?: {
    assignee: string;
    assigneeName: string;
    assigneeNickname: string;
  };
  dueDate?: string;
  orderId: string;
  orderState: number;
  orderStateContent: string;
  orderedAt: string;
  orderer: string;
  remainingEditCount: number;
  requirement?: string;
}

export interface OrderStateModel {
  id: number;
  content: string;
}

export type UpdataOrderModel = Pick<
  OrderDetailModel,
  'orderId' | 'dueDate' | 'orderState'
> &
  Record<'assignee', string>;

class OrderFetchData {
  orderBaseUrl = `${baseUrl}/order`;

  makeHader = (token: string) => {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  };

  getReguestOrderList = async () => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    try {
      const resList = await fetch(`${this.orderBaseUrl}/ready`, {
        headers: new Headers(this.makeHader(token)),
      }).then<OrderListModel[]>((res) => {
        if (res.status === 200) return res.json();
        if (res.status === 204) return [];
        throw Error(`${res.status}`);
      });
      return resList;
    } catch {
      console.error('리스트를 가져오지 못했습니다.');
    }
  };

  getReguestingOrderList = async () => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    try {
      const resList = await fetch(`${this.orderBaseUrl}/processing`, {
        headers: new Headers(this.makeHader(token)),
      }).then<OrderListModel[]>((res) => {
        if (res.status === 200) return res.json();
        if (res.status === 204) return [];
        throw Error(`${res.status}`);
      });
      return resList.filter(
        (list) => list.orderState !== 7 && list.orderState !== 8,
      );
    } catch {
      console.error('리스트를 가져오지 못했습니다.');
    }
  };

  getEditOrderList = async () => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    try {
      const resList = await fetch(`${this.orderBaseUrl}/processing`, {
        headers: new Headers(this.makeHader(token)),
      }).then<OrderListModel[]>((res) => {
        if (res.status === 200) return res.json();
        if (res.status === 204) return [];
        throw Error(`${res.status}`);
      });
      return resList.filter(
        (list) => list.orderState === 7 || list.orderState === 8,
      );
    } catch {
      console.error('리스트를 가져오지 못했습니다.');
    }
  };

  getFinishOrderList = async () => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    try {
      const resList = await fetch(`${this.orderBaseUrl}/done`, {
        headers: new Headers(this.makeHader(token)),
      }).then<OrderListModel[]>((res) => res.json());
      return resList;
    } catch {
      console.error('리스트를 가져오지 못했습니다.');
    }
  };

  getOrderDetail = async (orderId: string) => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    try {
      const resList = await fetch(`${this.orderBaseUrl}/${orderId}`, {
        headers: new Headers(this.makeHader(token)),
      }).then<OrderDetailModel>((res) => res.json());
      return resList;
    } catch {
      console.error('리스트를 가져오지 못했습니다.');
    }
  };

  saveOrderDetailData = async (orderData: UpdataOrderModel) => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return false;
    }

    try {
      await fetch(`${this.orderBaseUrl}/${orderData.orderId}`, {
        method: 'PUT',
        headers: new Headers(this.makeHader(token)),
        body: JSON.stringify({
          assignee: orderData.assignee,
          dueDate: orderData.dueDate,
          orderState: orderData.orderState,
        }),
      });
      return true;
    } catch {
      console.error('주문 정보를 저장할 수 없습니다.');
      return false;
    }
  };

  takeMeOrder = async (orderId: string) => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return false;
    }

    try {
      await fetch(`${this.orderBaseUrl}/${orderId}/assign-self`, {
        method: 'POST',
        headers: new Headers(this.makeHader(token)),
      }).then<Pick<OrderDetailModel, 'orderId'>>((res) => res.json());
      return true;
    } catch {
      console.error('주문 정보를 저장할 수 없습니다.');
      return false;
    }
  };

  getStateOptions = async (stateId: number) => {
    try {
      const resOptions = await fetch(`${baseUrl}/state/${stateId}/sub`).then<
        OrderStateModel[] | undefined
      >((res) => res.json());
      return resOptions || [];
    } catch {
      console.error('옵션 리스트를 가져올 수 없습니다.');
      return [];
    }
  };
}

export default OrderFetchData;
