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
      Authorization: localStorage.getItem('edit-token') as string,
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

  fetchList = () => {
    return fetch('/data/list.json').then((res) => res.json());
  };
}

export default FetchData;
