import { CreatorModel } from 'contexts/adminStore';

export const baseUrl = 'https://api-ef.stockfolio.ai';

interface LoginModel {
  username: string;
  password: string;
}

interface TokenModel {
  token: string;
}

export interface UserModel {
  name: string;
  nickname: string;
  userId: string;
  username: string;
  roles: string[];
}

export interface AdminModal extends Omit<UserModel, 'username' | 'roles'> {
  email: string;
  createdAt: string;
}

interface CustomerModel {
  email: string;
  mobile: string;
  name: string;
}

interface CustomerDefaultModel extends CustomerModel {
  channelLink: string;
  channelName: string;
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

  getMyData = async () => {
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

  createAdmin = async (
    values: Pick<AdminModal, 'email' | 'name' | 'nickname'> &
      Record<'password', string>,
  ) => {
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
      await fetch(`${baseUrl}/admin`, {
        method: 'POST',
        headers: new Headers(headerDict),
        body: JSON.stringify(values),
      }).then((res) => {
        if (res.status > 300) throw Error(res.statusText);
      });
      return true;
    } catch (err) {
      console.error(err, '어드민을 생성하지 못했습니다.');
      return false;
    }
  };

  editAdmin = async (
    userId: string,
    values: Pick<AdminModal, 'email' | 'name' | 'nickname'>,
  ) => {
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
      return await fetch(`${baseUrl}/admin/${userId}`, {
        method: 'PUT',
        headers: new Headers(headerDict),
        body: JSON.stringify(values),
      }).then((res) => {
        if (res.ok) return true;
        console.log(res);
        throw Error(res.statusText);
      });
    } catch (err) {
      console.error(err, '어드민 정보를 수정하지 못했습니다.');
      return false;
    }
  };

  editAdminPw = async (userId: string, values: string) => {
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
      return await fetch(`${baseUrl}/admin/${userId}/pw`, {
        method: 'PATCH',
        headers: new Headers(headerDict),
        body: JSON.stringify({ password: values }),
      }).then((res) => {
        if (res.ok) return true;
        console.log(res);
        throw Error(res.statusText);
      });
    } catch (err) {
      console.error(err, '비밀번호를 변경하지 못했습니다.');
      return false;
    }
  };

  deleteAdmin = async (userId: string) => {
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
      return await fetch(`${baseUrl}/admin/${userId}`, {
        method: 'DELETE',
        headers: new Headers(headerDict),
      }).then((res) => {
        if (res.ok) return true;
        console.log(res);
        throw Error(res.statusText);
      });
    } catch (err) {
      console.error(err, '계정을 삭제하지 못했습니다.');
      return false;
    }
  };

  getAdminList = async () => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    try {
      const res = await fetch(`${baseUrl}/admin`, {
        headers: new Headers(this.makeHader(token)),
      }).then<AdminModal[]>((res) => {
        if (res.status === 200) return res.json();
        if (res.status === 204) return [];
        throw Error('어드민 목록을 가져올 수 없습니다.');
      });
      return res;
    } catch {
      console.error('어드민 목록을 가져올 수 없습니다.');
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
      }).then((res) => {
        if (res.status > 300) throw Error(res.statusText);
      });
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  getCustomerList = async () => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    const res = fetch(`${baseUrl}/customer`, {
      headers: new Headers(this.makeHader(token)),
    }).then<CustomerDataModel[]>((res) => {
      if (res.status === 200) return res.json();
      if (res.status === 204) return [];
      throw Error('고객 리스트를 가져오지 못했습니다.');
    });
    return res;
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

  editCustomerDetail = async (data: CustomerDetailModel) => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return false;
    }

    const { userId, ...rest } = data;

    try {
      return await fetch(`${baseUrl}/customer/${userId}`, {
        method: 'PUT',
        headers: new Headers(this.makeHader(token)),
        body: JSON.stringify({
          ...rest,
        }),
      }).then((res) => {
        if (res.status === 204) return true;
        return false;
      });
    } catch {
      console.error('고객 정보를 수정할 수 없습니다.');
      return false;
    }
  };

  deleteCustomer = async (id: string) => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return false;
    }

    try {
      await fetch(`${baseUrl}/customer/${id}`, {
        method: 'DELETE',
        headers: new Headers(this.makeHader(token)),
      }).then((res) => {
        if (res.ok) return;
        throw Error('고객을 삭제할 수 없습니다.');
      });
      return true;
    } catch (err) {
      console.error(err);
      return false;
    }
  };
}

export default FetchData;
