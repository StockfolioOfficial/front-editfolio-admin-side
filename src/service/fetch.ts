import { CreatorModel } from 'contexts/adminStore';

export const baseUrl = 'https://api-ef.stockfolio.ai';

interface LoginModel {
  username: string;
  password: string;
}

interface TokenModel {
  token: string;
}

interface UserModel {
  name: string;
  nickname: string;
  userId: string;
  username: string;
}

interface CustomerModel {
  email: string;
  mobile: string;
  name: string;
}

interface CustomerDefaultModel {
  channelLink: string;
  channelName: string;
  email: string;
  mobile: string;
  name: string;
  userId: string;
}

export interface CustomerDataModel extends CustomerDefaultModel {
  createdAt: string;
}

export interface CustomerDetailModel extends CustomerDefaultModel {
  onedriveLink: string;
  personaLink: string;
  memo: string;
}

class FetchData {
  makeHader = (token: string) => {
    return {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };
  };

  login = async (values: LoginModel) => {
    try {
      const resValue = await fetch(`${baseUrl}/sign-in`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then<TokenModel>((res) => {
        if (!res.ok) throw Error('hello');
        return res.json();
      });

      localStorage.setItem('editfolio-admin-token', resValue.token);
      return true;
    } catch {
      console.error('로그인을 할 수 없습니다.');
      return false;
    }
  };

  logout = () => {
    localStorage.removeItem('editfolio-admin-token');
  };

  getAdminData = async () => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    try {
      const res = await fetch(`${baseUrl}/admin/me`, {
        headers: new Headers(this.makeHader(token)),
      }).then<UserModel>((res) => res.json());
      return res;
    } catch {
      console.error('정보를 가져올 수 없습니다.');
    }
  };

  createCustomer = async (values: CustomerModel) => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return false;
    }

    const headerDict: HeadersInit = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    try {
      await fetch(`${baseUrl}/customer`, {
        method: 'POST',
        headers: new Headers(headerDict),
        body: JSON.stringify(values),
      }).then((res) => res.json());
      return true;
    } catch {
      return false;
    }
  };

  getCustomerList = async () => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return false;
    }

    return fetch(`${baseUrl}/customer`, {
      headers: new Headers(this.makeHader(token)),
    }).then((res) => res.json());
  };

  getCreatorList = async () => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    const res = await fetch(`${baseUrl}/admin/creator`, {
      headers: new Headers(this.makeHader(token)),
    }).then<CreatorModel[]>((res) => res.json());
    return res;
  };

  getCustomerDetail = async (customerId: string) => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    const res = await fetch(`${baseUrl}/customer/${customerId}`, {
      headers: new Headers(this.makeHader(token)),
    }).then<CustomerDetailModel>((res) => res.json());
    return res;
  };
}

export default FetchData;
