import { makeAutoObservable } from 'mobx';

interface UserModal {
  name: string;
  nickname: string;
  id: string;
  email: string;
}

export const initUser: UserModal = {
  name: '',
  nickname: '',
  id: '',
  email: '',
};

class User {
  name = initUser.name;

  nickname = initUser.nickname;

  id = initUser.id;

  email = initUser.email;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(data: Partial<UserModal>) {
    if (data.id) this.id = data.id;
    if (data.name) this.name = data.name;
    if (data.nickname) this.nickname = data.nickname;
    if (data.email) this.email = data.email;
  }

  resetUser() {
    this.id = initUser.id;
    this.name = initUser.name;
    this.nickname = initUser.nickname;
    this.email = initUser.email;
  }
}

export default User;
