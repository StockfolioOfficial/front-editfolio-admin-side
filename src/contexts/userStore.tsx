import { makeAutoObservable } from 'mobx';

interface UserModal {
  name: string;
  nickname: string;
  userId: string;
  email: string;
}

export const initUser: UserModal = {
  name: '',
  nickname: '',
  userId: '',
  email: '',
};

class User {
  name;

  nickname;

  userId;

  email;

  constructor() {
    makeAutoObservable(this);
    this.name = initUser.name;
    this.nickname = initUser.nickname;
    this.userId = initUser.userId;
    this.email = initUser.email;
  }

  setUser = (data: Partial<UserModal>) => {
    if (data.userId) this.userId = data.userId;
    if (data.name) this.name = data.name;
    if (data.nickname) this.nickname = data.nickname;
    if (data.email) this.email = data.email;
  };

  resetUser = () => {
    console.log(this);
    this.userId = initUser.userId;
    this.name = initUser.name;
    this.nickname = initUser.nickname;
    this.email = initUser.email;
  };
}

export default User;
