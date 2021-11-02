import { makeAutoObservable } from 'mobx';
import User from './userStore';

class Root {
  userStore: User;

  constructor() {
    makeAutoObservable(this);
    this.userStore = new User();
  }
}

export default Root;
