interface OrderModal {
  orderId: string;
  orderedAt: string;
  ordererChannelLink: string;
  ordererChannelName: string;
  ordererName: string;
  assigneeName?: string;
  assigneeNickname?: string;
  orderState?: number;
  orderStateContent?: string;
}

interface OrderDataModal {
  assignee: {
    assignee: string;
    assigneeName: string;
    assigneeNickname: string;
  };
  dueDate: string;
  orderId: string;
  orderState: number;
  orderStateContent: string;
  orderedAt: string;
  orderer: string;
  remainingEditCount: number;
  requirement: string;
}

interface OrderStateModal {
  id: number;
  content: string;
}

class OrderFetchData {
  baseUrl = 'https://api-ef.stockfolio.ai';

  getReguestOrderList = async () => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    try {
      const resList = await fetch(`${this.baseUrl}/order/ready`, {
        headers: new Headers(headerDict),
      }).then<OrderModal[]>((res) => res.json());
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
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    try {
      const resList = await fetch(`${this.baseUrl}/order/processing`, {
        headers: new Headers(headerDict),
      }).then<OrderModal[]>((res) => res.json());
      return resList;
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

    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    try {
      const resList = await fetch(`${this.baseUrl}/order/done`, {
        headers: new Headers(headerDict),
      }).then<OrderModal[]>((res) => res.json());
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
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    try {
      const resList = await fetch(`${this.baseUrl}/order/${orderId}`, {
        headers: new Headers(headerDict),
      }).then<OrderDataModal>((res) => res.json());
      return resList;
    } catch {
      console.error('리스트를 가져오지 못했습니다.');
    }
  };

  saveOrderDetailData = async (
    orderData: Pick<OrderDataModal, 'orderId' | 'dueDate' | 'orderState'> &
      Record<'assignee', OrderDataModal['assignee']['assignee']>,
  ) => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return false;
    }

    const headerDict: HeadersInit = {
      method: 'PUT',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    try {
      await fetch(`${this.baseUrl}/order/${orderData.orderId}`, {
        headers: new Headers(headerDict),
        body: JSON.stringify({
          assignee: orderData.assignee,
          dueDate: orderData.dueDate,
          orderState: orderData.orderState,
        }),
      }).then<Pick<OrderDataModal, 'orderId'>>((res) => res.json());
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

    const headerDict: HeadersInit = {
      method: 'POST',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    try {
      const resId = await fetch(
        `${this.baseUrl}/order/${orderId}/assign-self`,
        {
          headers: new Headers(headerDict),
        },
      ).then<Pick<OrderDataModal, 'orderId'>>((res) => res.json());
      console.log(resId.orderId);
      return true;
    } catch {
      console.error('주문 정보를 저장할 수 없습니다.');
      return false;
    }
  };

  getFullStates = async () => {
    try {
      const states = await fetch(`${this.baseUrl}/state/full`).then<
        OrderStateModal[]
      >((res) => res.json());
      return states;
    } catch {
      console.error('상태 정보를 가져오지 못했습니다.');
    }
  };

  getStateOptions = async (stateId: number) => {
    try {
      const resOptions = await fetch(
        `${this.baseUrl}/state/${stateId}/sub`,
      ).then<OrderStateModal[] | undefined>((res) => res.json());
      return resOptions || [];
    } catch {
      console.error('옵션 리스트를 가져올 수 없습니다.');
      return [];
    }
  };
}

export default OrderFetchData;
