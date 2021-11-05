import { makeAutoObservable } from 'mobx';
import { UserModel } from 'service/fetch';

export const initUser: UserModel = {
  name: '',
  nickname: '',
  userId: '',
  username: '',
  roles: [],
};

class User {
  name;

  nickname;

  userId;

  username;

  roles: string[];

  constructor() {
    makeAutoObservable(this);
    this.name = initUser.name;
    this.nickname = initUser.nickname;
    this.userId = initUser.userId;
    this.username = initUser.username;
    this.roles = initUser.roles;
  }

  setUser = (data: Partial<UserModel>) => {
    if (data.userId) this.userId = data.userId;
    if (data.name) this.name = data.name;
    if (data.nickname) this.nickname = data.nickname;
    if (data.username) this.username = data.username;
    if (data.roles) this.roles = data.roles;
  };

  resetUser = () => {
    this.userId = initUser.userId;
    this.name = initUser.name;
    this.nickname = initUser.nickname;
    this.username = initUser.username;
    this.roles = initUser.roles;
  };
}

export default User;
