import { makeAutoObservable } from 'mobx';
import Admin from './adminStore';
import User from './userStore';

class Root {
  userStore: User;

  adminStore: Admin;

  constructor() {
    makeAutoObservable(this);
    this.userStore = new User();
    this.adminStore = new Admin();
  }
}

export default Root;
