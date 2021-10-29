class FetchData {
  baseUrl = 'https://api-ef.stockfolio.ai';

  fetchLogin = (values: any) => {
    return fetch(`${this.baseUrl}/sign-in`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({
        username: values.id,
        password: values.password,
      }),
    }).then((res) => res.json());
  };

  fetchAdd = (values: any) => {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('edit-token') as string}`,
    };

    return fetch(`${this.baseUrl}/customer`, {
      method: 'POST',
      headers: new Headers(headerDict),
      body: JSON.stringify({
        name: values.name,
        email: values.id,
        mobile: values.mobile,
      }),
    }).then((res) => res.json());
  };

  customerFetchList = () => {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('edit-token') as string}`,
    };

    return fetch(`${this.baseUrl}/customer`, {
      headers: new Headers(headerDict),
    }).then((res) => res.json());
  };

  requestFetchList = () => {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('edit-token') as string}`,
    };

    return fetch(`${this.baseUrl}/order/ready`, {
      headers: new Headers(headerDict),
    }).then((res) => res.json());
  };

  requestingFetchList = () => {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('edit-token') as string}`,
    };

    return fetch(`${this.baseUrl}/order/processing`, {
      headers: new Headers(headerDict),
    }).then((res) => res.json());
  };

  requestFinishFetchList = () => {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('edit-token') as string}`,
    };

    return fetch(`${this.baseUrl}/order/done`, {
      headers: new Headers(headerDict),
    }).then((res) => res.json());
  };

  requestOrderDetail = (orderId: string) => {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('edit-token') as string}`,
    };

    return fetch(`${this.baseUrl}/order/${orderId}`, {
      headers: new Headers(headerDict),
    }).then((res) => res.json());
  };
}

export default FetchData;
