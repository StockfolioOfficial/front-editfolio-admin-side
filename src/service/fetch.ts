class FetchData {
  fetchLogin = (values: any) => {
    return fetch('http://192.168.35.85:8000/user/sign', {
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
    return fetch('http://192.168.35.211:8000/user/customer', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
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
