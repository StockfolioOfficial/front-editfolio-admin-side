class FetchData {
  fetchLogin = (values: any) => {
    return fetch('https://api-ef.stockfolio.ai/sign-in', {
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

    return fetch('https://api-ef.stockfolio.ai/admin', {
      method: 'POST',
      headers: new Headers(headerDict),
      body: JSON.stringify({
        email: values.email,
        name: values.name,
        nickname: values.nickname,
        password: values.password,
      }),
    }).then((res) => res.json());
  };

  customerFetchAdd = (values: any) => {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('edit-token') as string}`,
    };

    return fetch('https://api-ef.stockfolio.ai/customer', {
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

    return fetch('https://api-ef.stockfolio.ai/customer', {
      headers: new Headers(headerDict),
    }).then((res) => res.json());
  };

  requestFetchList = () => {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('edit-token') as string}`,
    };

    return fetch('https://api-ef.stockfolio.ai/order/ready', {
      headers: new Headers(headerDict),
    }).then((res) => res.json());
  };

  requestingFetchList = () => {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('edit-token') as string}`,
    };

    return fetch('https://api-ef.stockfolio.ai/order/processing', {
      headers: new Headers(headerDict),
    }).then((res) => res.json());
  };

  requestFinishFetchList = () => {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('edit-token') as string}`,
    };

    return fetch('https://api-ef.stockfolio.ai/order/done', {
      headers: new Headers(headerDict),
    }).then((res) => res.json());
  };

  adminListFetchList = () => {
    const headerDict = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('edit-token') as string}`,
    };

    return fetch('https://api-ef.stockfolio.ai/admin', {
      headers: new Headers(headerDict),
    }).then((res) => res.json());
  };
}

export default FetchData;
