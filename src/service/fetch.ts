import { CreatorModal } from 'contexts/adminStore';

interface LoginModal {
  username: string;
  password: string;
}

interface TokenModal {
  token: string;
}

interface UserModal {
  name: string;
  nickname: string;
  userId: string;
  username: string;
}

interface CustomerModal {
  email: string;
  mobile: string;
  name: string;
}

class FetchData {
  baseUrl = 'https://api-ef.stockfolio.ai';

  login = async (values: LoginModal) => {
    try {
      const resValue = await fetch(`${this.baseUrl}/sign-in`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(values),
      }).then<TokenModal>((res) => res.json());
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

    const headerDict: HeadersInit = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    };

    try {
      const res = await fetch(`${this.baseUrl}/admin/me`, {
        headers: new Headers(headerDict),
      }).then<UserModal>((res) => res.json());
      return res;
    } catch {
      console.error('정보를 가져올 수 없습니다.');
    }
  };

  createCustomer = async (values: CustomerModal) => {
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
      await fetch(`${this.baseUrl}/customer`, {
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

    const headerDict: HeadersInit = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        localStorage.getItem('editfolio-admin-token') as string
      }`,
    };

    return fetch(`${this.baseUrl}/customer`, {
      headers: new Headers(headerDict),
    }).then((res) => res.json());
  };

  getCreatorList = async () => {
    const token = localStorage.getItem('editfolio-admin-token');
    if (!token) {
      console.error('토큰이 없습니다.');
      return;
    }

    const headerDict: HeadersInit = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${
        localStorage.getItem('editfolio-admin-token') as string
      }`,
    };

    const res = await fetch(`${this.baseUrl}/admin/creator`, {
      headers: headerDict,
    }).then<CreatorModal[]>((res) => res.json());
    return res;
  };
}

export default FetchData;
